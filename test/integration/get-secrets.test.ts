import supertest from 'supertest'
import server from '../../src/server'

const request = supertest(server)

describe('Get Secrets Integration Test', () => {
    it('should return an error when the urlId provided is too short', async () => {
        const response = await request.get('/api/v1/secrets/2short')

        console.log(response.body)
        expect(response.status).toBe(400)
        expect(response.body).toEqual({
            name: 'UrlIdValidationError',
            message: 'UrlId is too short'
        })
    })

    it('should return an error when the secret does not exists in the system', async () => {
        // mock db
        const response = await request.get('/api/v1/secrets/123nonexistantsecret')

        console.log(response.body)
        expect(response.status).toBe(404)
        expect(response.body).toEqual({
            name: 'SecretNotFoundError',
            message: 'Secret was not found in the system'
        })
    })

    xit('should retrieve a secret from the system', () => {
    })
})
