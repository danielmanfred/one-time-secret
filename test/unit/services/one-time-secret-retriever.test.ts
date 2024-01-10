import { SecretNotFoundError } from "../../../src/domain/errors/secret-not-found-error"
import { UrlId } from "../../../src/domain/models/UrlId"
import { OneTimeSecretRetriever } from "../../../src/services/one-time-secret-retriever"
import { SecretRepository } from "../../../src/services/secret-repository"

describe('OneTimeSecretRetriver', () => {
    it('should throw an error if the secret was not found', () => {
        const secretRepository: SecretRepository = {
            getSecretByUrlId: jest.fn().mockResolvedValue(null)
        }
        const oneTimeSecretRetriever = new OneTimeSecretRetriever(secretRepository)
        const urlId = new UrlId('123456qwerty')
        const result = oneTimeSecretRetriever.retrieveSecretByUrlId(urlId)
        expect(result).rejects.toThrow(SecretNotFoundError)
        expect(secretRepository.getSecretByUrlId).toBeCalledTimes(1)
        expect(secretRepository.getSecretByUrlId).toBeCalledWith(new UrlId('123456qwerty'))
    })
})
