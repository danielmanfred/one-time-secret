import { UrlId } from "../domain/models/UrlId";
import { Secret } from "../domain/models/secret";

export interface SecretRepository {
    getSecretByUrlId(urlId: UrlId): Promise<Secret | null>
}
