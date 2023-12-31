import { request, response, Request, Response, NextFunction } from "express"
import { UrlIdValidationError } from "../../../../../src/domain/errors/url-id-validation-error"
import { errorHandler } from "../../../../../src/infra/rest/middlewares/error-handler"
import { SecretNotFoundError } from "../../../../../src/domain/errors/secret-not-found-error"

describe('ErrorHandler', () => {
    it('should generate an error response for a UrlValidationError', () => {
        const error = new UrlIdValidationError('UrlId is too short')
        const req: Request = expect.any(request)
        const res: Response = expect.any(response)
        res.status = jest.fn().mockReturnThis()
        res.json = jest.fn()
        const next: NextFunction = jest.fn()

        errorHandler(error, req, res, next)

        expect(next).toBeCalledTimes(0)
        expect(res.status).toBeCalledTimes(1)
        expect(res.status).toBeCalledWith(400)
        expect(res.json).toBeCalledTimes(1)
        expect(res.json).toBeCalledWith({
            name: 'UrlIdValidationError',
            message: 'UrlId is too short'
        })
    })

    it('should generate an error response for a SecretNotFoundError', () => {
        const error = new SecretNotFoundError()
        const req: Request = expect.any(request)
        const res: Response = expect.any(response)
        res.status = jest.fn().mockReturnThis()
        res.json = jest.fn()
        const next: NextFunction = jest.fn()

        errorHandler(error, req, res, next)

        expect(next).toBeCalledTimes(0)
        expect(res.status).toBeCalledTimes(1)
        expect(res.status).toBeCalledWith(404)
        expect(res.json).toBeCalledTimes(1)
        expect(res.json).toBeCalledWith({
            name: 'SecretNotFoundError',
            message: 'Secret was not found in the system'
        })
    })
})
