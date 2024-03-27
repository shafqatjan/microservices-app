const request = require('supertest');
const app = require('./index'); // Import your app

describe('Post Endpoints', () => {
  it('should create a new user', async () => {
    const res = await request(app)
      .post('/users')
      .send({
        email: 'user@example.com',
        firstName: 'Test',
        lastName: 'User'
      });
    expect(res.statusCode).toEqual(200);
  });
});
