import { SecretValidationError } from "./secret-validation-error";

export class Secret {
    constructor(secret: string) {
        if (secret.length <= 3) {
            throw new SecretValidationError('Secret is too short')
        }
    }
}
