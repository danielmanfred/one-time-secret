import { UrlIdValidationError } from "./url-id-validation-error";

export class UrlId {
    constructor(private urlId: string) {
        if (urlId.length < 10) {
            throw new UrlIdValidationError('UrlId is too short')
        }
    }
}
