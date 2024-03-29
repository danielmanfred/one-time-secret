import mongoose from "mongoose"
import { MongoSecretRepository } from "../../../../src/infra/repositories/mongo-secret-repository"
import { UrlId } from "../../../../src/domain/models/UrlId"
import { SecretModel } from "../../../../src/infra/repositories/sercret-model"

describe('MongoSecretRepository', () => {
    it('should connect to the database', () => {
        mongoose.connect = jest.fn()
        new MongoSecretRepository()
        expect(mongoose.connect).toBeCalledTimes(1)
        expect(mongoose.connect).toBeCalledWith('mongodb://localhost:27017/onetimesecret')
    })

    it('should not connect to the database when connection is already established', () => {
        mongoose.connect = jest.fn()
        mongoose.connection.readyState
        new MongoSecretRepository()
        expect(mongoose.connect).toBeCalledTimes(0)
    })

    it('should return a null object when the secret is not found', async () => {
        SecretModel.findOne = jest.fn().mockResolvedValue(null)
        mongoose.connect = jest.fn()
        //mongoose.connection.readyState = 1
        const urlId = new UrlId('123456qwerty')
        const mongoSecretRepository = new MongoSecretRepository()
        expect(await mongoSecretRepository.getSecretByUrlId(urlId)).toBe(null)
        expect(mongoose.connect).toBeCalledTimes(0)
    })
})
