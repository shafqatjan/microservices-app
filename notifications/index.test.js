const request = require('supertest');
const app = require('./index'); // Import your app

describe('Get Endpoints', () => {
  it('should receive a message from the message broker', async () => {
    const res = await request(app)
      .get('/notifications');
    expect(res.statusCode).toEqual(200);
  });
});
