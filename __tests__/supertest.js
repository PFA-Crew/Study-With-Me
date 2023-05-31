const { response } = require('express');
const request = require('supertest');

const server = 'http://localhost:8080';

const functions = {
  adding: function (num1, num2) {
    return num1 + num2;
  },
};

module.exports = functions;

test('2 + 2 = 4', () => {
  expect(functions.adding(2, 2)).toBe(4);
});

describe('Route Integration for Notes', () => {
  describe('/', () => {
    describe('POST', () => {
      it('response with 200 status and text/html content type', () => {
        return request(server)
          .post('/')
          .expect('Content-Type', /text\/html/)
          .expect(200);
      });
    });
  });
});
