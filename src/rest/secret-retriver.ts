import { UrlId } from "../UrlId";
import { Secret } from "../secret";

export interface SecretRetriver {
    retrieveSecretByUrlId(urlId: UrlId): Promise<Secret>
}
