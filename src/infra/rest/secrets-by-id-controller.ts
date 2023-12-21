import { NextFunction, Request, Response } from "express";
import { UrlId } from "../../domain/models/UrlId";
import { SecretRetriver } from "../../services/secret-retriver";

export class SecretsByIdController {

    constructor(private secretRetriver: SecretRetriver) {}

    retrieveSecret = async (request: Request, response: Response, next: NextFunction) => {
        try {
            const urlId = new UrlId(request.params.urlId)
            return await this.secretRetriver.retrieveSecretByUrlId(urlId)
        } catch (error) {
            next(error)
        }
    }
}
