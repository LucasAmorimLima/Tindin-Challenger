import app from '../app';
import supertest from 'supertest';


describe('Post Endpoints', () => {
  it('should create a new post', async () => {
    const res = await supertest(app)
      .post('/users')
      .send({
        "email":"lucas@gmail.com",
        "password":"lulululu"
      })
    expect(res.statusCode).toEqual(200)
    
  })
})