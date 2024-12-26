const request = require('supertest');
const app = require('../src/app');

describe('Post API Tests', () => {
  it('should fetch all posts', async () => {
    const response = await request(app).get('/posts');
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });

  it('should create a new post for a user', async () => {
    const userId = '12345'; 
    const newPost = {
      title: 'Test Post',
      description: 'This is a test post',
      images: ['image1.jpg', 'image2.jpg'],
    };
    const response = await request(app).post(`/users/${userId}/posts`).send(newPost);
    expect(response.status).toBe(201);
    expect(response.body.title).toBe(newPost.title);
  });

  it('should delete a user\'s post', async () => {
    const userId = '12345'; 
    const postId = '67890';
    const response = await request(app).delete(`/users/${userId}/posts/${postId}`);
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Post deleted successfully');
  });
});
