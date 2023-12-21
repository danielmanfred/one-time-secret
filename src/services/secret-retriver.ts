import { UrlId } from "../domain/models/UrlId";
import { Secret } from "../domain/models/secret";

export interface SecretRetriver {
    retrieveSecretByUrlId(urlId: UrlId): Promise<Secret>
}
