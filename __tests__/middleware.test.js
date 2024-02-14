// middleware.test.js
const request = require('supertest');
const app = require('./index'); // Adjust the path as needed to import your Express app

describe('Conditional Middleware Validation', () => {
  test('POST /validate-data with isValid=true should proceed and return 200', async () => {
    const response = await request(app)
      .post('/validate-data')
      .send({ isValid: true });
    expect(response.statusCode).toBe(200);
    expect(response.text).toContain('data is valid');
  });

  test('POST /validate-data without isValid property should return 400', async () => {
    const response = await request(app)
      .post('/validate-data')
      .send({});
    expect(response.statusCode).toBe(400);
    expect(response.text).toContain('invalid request data');
  });

  test('POST /validate-data with isValid=false should return 400', async () => {
    const response = await request(app)
      .post('/validate-data')
      .send({ isValid: false });
    expect(response.statusCode).toBe(400);
    expect(response.text).toContain('invalid request data');
  });
});
