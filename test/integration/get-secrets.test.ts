import supertest from 'supertest'
import server from '../../src/server'
import { SecretModel } from '../../src/infra/repositories/sercret-model'

const request = supertest(server)

describe('Get Secrets Integration Test', () => {
    it('should return an error when the urlId provided is too short', async () => {
        const response = await request.get('/api/v1/secrets/2short')

        console.log(response.body)
        expect(response.status).toBe(404)
        expect(response.body).toEqual({
            name: 'UrlIdValidationError',
            message: 'UrlId is too short'
        })
    })

    it('should return an error when the secret does not exists in the system', async () => {
        SecretModel.findOne = jest.fn().mockResolvedValue(null)
        const response = await request.get('/api/v1/secrets/123nonexistantsecret')

        console.log('RESPONSE BODY: ', response.body)
        expect(response.status).toBe(404)
        expect(response.body).toEqual({
            name: 'SecretNotFoundError',
            message: 'Secret was not found in the system'
        })
    })

    xit('should retrieve a secret from the system', () => {
    })

    xit('should throw a 500 error when unexpected error is thrown', () => {
    })
})
