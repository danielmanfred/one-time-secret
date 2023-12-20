import { Secret } from "../../src/secret"
import { SecretValidationError } from "../../src/secret-validation-error"

describe('Secret', () => {
    it('should create an instance of secret', () => {
        expect(new Secret('mySecret')).toBeInstanceOf(Secret)
    })

    it('should throw an erro when secret is too short', () => {
        expect(new Secret('w')).toThrow(new SecretValidationError('Secret is too short'))
    })
})
