import { UrlId } from "./domain/models/UrlId"
import { Application } from "./infra/rest/application"
import { Route } from './infra/rest/route'
import { SecretRetriver } from "./services/secret-retriver"
import { SecretsByIdController } from "./infra/rest/secrets-by-id-controller"
import { SecretsByIdRoute } from "./infra/rest/secrets-by-id-route"
import { Secret } from "./domain/models/secret"

const secretRetriver: SecretRetriver = {
    retrieveSecretByUrlId: function (urlId: UrlId): Promise<Secret> {
        throw new Error("Function not implemented.")
    }
}
const secretsByIdController = new SecretsByIdController(secretRetriver)
const secretsByIdRoute = new SecretsByIdRoute(secretsByIdController)

const routeList: Route[] = []
routeList.push(secretsByIdRoute)

const application = new Application(routeList)
const expressApplication = application.getExpressApplication()

export default expressApplication
