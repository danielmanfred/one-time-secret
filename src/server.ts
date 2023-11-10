import { Application } from "./rest/application"
import { Route } from './rest/route'
import { SecretsByIdController } from "./rest/secrets-by-id-controller"
import { SecretsByIdRoute } from "./rest/secrets-by-id-route"

const secretsByIdController = new SecretsByIdController()
const secretsByIdRoute = new SecretsByIdRoute(secretsByIdController)

const routeList: Route[] = []
routeList.push(secretsByIdRoute)

const application = new Application(routeList)
const expressApplication = application.getExpressApplication()

export default expressApplication
