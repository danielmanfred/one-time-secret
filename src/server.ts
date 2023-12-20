import { UrlId } from "./UrlId"
import { Application } from "./rest/application"
import { Route } from './rest/route'
import { SecretRetriver } from "./rest/secret-retriver"
import { SecretsByIdController } from "./rest/secrets-by-id-controller"
import { SecretsByIdRoute } from "./rest/secrets-by-id-route"
import { Secret } from "./secret"

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
