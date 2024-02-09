import { Application } from "./infra/rest/application"
import { Route } from './infra/rest/route'
import { SecretsByIdController } from "./infra/rest/secrets-by-id-controller"
import { SecretsByIdRoute } from "./infra/rest/secrets-by-id-route"
import { OneTimeSecretRetriever } from "./services/one-time-secret-retriever"
import { MongoSecretRepository } from "./infra/repositories/mongo-secret-repository"

const secretRepository = new MongoSecretRepository()
const secretRetriver = new OneTimeSecretRetriever(secretRepository)
const secretsByIdController = new SecretsByIdController(secretRetriver)
const secretsByIdRoute = new SecretsByIdRoute(secretsByIdController)

const routeList: Route[] = []
routeList.push(secretsByIdRoute)

const application = new Application(routeList)
const expressApplication = application.getExpressApplication()

export default expressApplication
