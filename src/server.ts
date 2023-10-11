import { Application } from "./application"
import { Route } from '../src/route'
import { SecretsByIdController } from "./secrets-by-id-controller"
import { SecretsByIdRoute } from "./secrets-by-id-route"

const secretsByIdController = new SecretsByIdController()
const secretsByIdRoute = new SecretsByIdRoute(secretsByIdController)

const routeList: Route[] = []
routeList.push(secretsByIdRoute)

const application = new Application(routeList)
const expressApplication = application.getExpressApplication()

export default expressApplication
