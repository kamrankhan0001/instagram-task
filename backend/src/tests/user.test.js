const request = require('supertest');
const app = require('../src/app');

describe('User API Tests', () => {
  it('should fetch all users', async () => {
    const response = await request(app).get('/users');
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });

  it('should fetch posts of a specific user', async () => {
    const userId = '12345'; 
    const response = await request(app).get(`/users/${userId}/posts`);
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });
});
