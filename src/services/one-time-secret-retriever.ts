import { SecretNotFoundError } from "../domain/errors/secret-not-found-error";
import { UrlId } from "../domain/models/UrlId";
import { Secret } from "../domain/models/secret";
import { SecretRepository } from "./secret-repository";
import { SecretRetriver } from "./secret-retriver";


export class OneTimeSecretRetriever implements SecretRetriver {
    constructor(private secretRepository: SecretRepository) {}

    async retrieveSecretByUrlId(urlId: UrlId): Promise<Secret> {
        // try to retrieve a secret
        const secret = await this.secretRepository.getSecretByUrlId(urlId)
        // if found return secret & remove the secret
        // if not found throw an error
        if (secret === null) {
            throw new SecretNotFoundError()
        }
        return null
    }
}
