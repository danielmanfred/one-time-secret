import express from "express";
import { Route } from "./route";
import { errorHandler } from "./middlewares/error-handler";

export class Application {
    private expressApp: express.Application = express()

    constructor(private routeList: Route[]) {
        this.routeList.forEach(route => route.mountRoute(this.expressApp))
        this.expressApp.use(errorHandler)
    }

    getExpressApplication(): express.Application {
        return this.expressApp
    }
}
