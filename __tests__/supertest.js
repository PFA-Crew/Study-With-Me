const { response } = require('express');
const request = require('supertest');
const app = require('../server/server');

const server = 'http://localhost:8080';

describe('Route integration', () => {
  describe('/*', () => {
    describe('GET', () => {
      it('Should handle all other routes and send a 404 response', async () => {
        const response = await request(app).get('/*');
        expect(response.text).toBe('Not Found');
        expect(response.status).toBe(404);
      });
    });
  });
});
