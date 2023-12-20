import { SecretNotFoundError } from "../../src/secret-not-found-error"

describe('SecretNotFoundError', () => {
    it('should create a SecretNotFoundError error', () => {
        const error = new SecretNotFoundError()
        expect(error).toBeInstanceOf(SecretNotFoundError)
        expect(error.name).toBe('SecretNotFoundError')
        expect(error.message).toBe('Secret was not found in the system')
    })
})
