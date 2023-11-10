import { Application } from "express";
import { Route } from "./route";
import { SecretsByIdController } from "./secrets-by-id-controller";

export class SecretsByIdRoute implements Route {
    constructor(private secretsByIdController: SecretsByIdController) {}

    mountRoute(application: Application): void {
        application.route('/api/v1/secrets/urlId').get(this.secretsByIdController.retrieveSecret)
    }
}