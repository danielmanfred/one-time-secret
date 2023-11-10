import { Request, Response, request, response } from "express"
import { SecretsByIdController } from "../../src/rest/secrets-by-id-controller"
import { UrlIdValidationError } from "../../src/url-id-validation-error"

describe('SecretsByIdController', () => {
    it('should throw an error if the urlId is too short', () => {
        const req: Request = expect.any(request)
        const res: Response = expect.any(response)
        req.params = { urlId: 'mytest' }
        const next = jest.fn()

        const secretByIdController = new SecretsByIdController()
        secretByIdController.retrieveSecret(req, res, next)

        expect(next).toBeCalledTimes(1)
        expect(next).toBeCalledWith(new UrlIdValidationError('UrlId is too short'))
    })
})
