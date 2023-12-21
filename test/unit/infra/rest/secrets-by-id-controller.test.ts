import { Request, Response, request, response } from "express"
import { SecretsByIdController } from "../../../../src/infra/rest/secrets-by-id-controller"
import { UrlIdValidationError } from "../../../../src/domain/errors/url-id-validation-error"
import { SecretNotFoundError } from "../../../../src/domain/errors/secret-not-found-error"
import { SecretRetriver } from "../../../../src/services/secret-retriver"
import { UrlId } from "../../../../src/domain/models/UrlId"

describe('SecretsByIdController', () => {
    it('should throw an error if the urlId is too short', async () => {
        const req: Request = expect.any(request)
        const res: Response = expect.any(response)
        req.params = { urlId: 'mytest' }
        const next = jest.fn()

        const secretRetriver: SecretRetriver = {
            retrieveSecretByUrlId: jest.fn().mockImplementation(async () => {
                throw new SecretNotFoundError()
            })
        }
        const secretByIdController = new SecretsByIdController(secretRetriver)
        await secretByIdController.retrieveSecret(req, res, next)

        expect(next).toBeCalledTimes(1)
        expect(next).toBeCalledWith(new UrlIdValidationError('UrlId is too short'))
        expect(secretRetriver.retrieveSecretByUrlId).toBeCalledTimes(0)
    })

    it('should throw an error if the secret was not found', async () => {
        const req: Request = expect.any(request)
        const res: Response = expect.any(response)
        req.params = { urlId: 'mytestwithavalidsecret' }
        const next = jest.fn()

        const secretRetriver: SecretRetriver = {
            retrieveSecretByUrlId: jest.fn()
        }
        const secretByIdController = new SecretsByIdController(secretRetriver)
        await secretByIdController.retrieveSecret(req, res, next)

        expect(next).toBeCalledTimes(1)
        expect(next).toBeCalledWith(new SecretNotFoundError())
        expect(secretRetriver.retrieveSecretByUrlId).toBeCalledTimes(1)
        expect(secretRetriver.retrieveSecretByUrlId).toBeCalledWith(new UrlId('mytestwithavalidsecret'))
    })
})
