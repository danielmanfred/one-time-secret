import { SecretValidationError } from "../../src/secret-validation-error"
import { UrlIdValidationError } from "../../src/url-id-validation-error"

describe('SecretValidationError', () => {
    it('should create a SecretValidationError error', () => {
        const error = new SecretValidationError('UrlId is too short')
        expect(error).toBeInstanceOf(SecretValidationError)
        expect(error.name).toBe('SecretValidationError')
        expect(error.message).toBe('Secret is too short')
    })
})
