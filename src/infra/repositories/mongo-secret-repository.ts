import mongoose from "mongoose";
import { UrlId } from "../../domain/models/UrlId";
import { Secret } from "../../domain/models/secret";
import { SecretRepository } from "../../services/secret-repository";
import { SecretModel } from "./sercret-model";

export class MongoSecretRepository implements SecretRepository {
    constructor() {
        if (mongoose.connection.readyState !== 1) {
            mongoose.connect('mongodb://localhost:27017/onetimesecret')
        }
    }

    async getSecretByUrlId(urlId: UrlId): Promise<Secret | null> {
        const doc = await SecretModel.findOne({ urlId: urlId.toString() })
        if (doc === null) return null
        return new Secret('1234567qwertyu')
    }
}
