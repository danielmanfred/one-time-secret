import { UrlId } from "../../../../src/domain/models/UrlId"
import { UrlIdValidationError } from "../../../../src/domain/errors/url-id-validation-error"

describe('UrlId', () => {
    it('should create an instance of urlId', () => {
        expect(new UrlId('qwertyuiopp4694nnn3j3')).toBeInstanceOf(UrlId)
    })

    it('should throw an error when attempting to create a UrlId that is too short', () => {
        expect(() => new UrlId('sdxc')).toThrow(new UrlIdValidationError('UrlId is too short'))
    })
})
