const regeneratorRuntime = require('regenerator-runtime/runtime');
const server = require('./mockServer.js');
const supertest = require('supertest');
const request = supertest(server);

server.get('/api/interactions', async (req, res) => {
  res.json({message: 'pass!'});
})

it('Gets the interactions endpoint', async done => {

  const res = await request.get('/api/interactions')

  expect(res.status).toBe(200)
  // expect(res.body.message).toBe('pass!')
  done()
})

server.get('/api/products', async (req, res) => {
  res.json({message: 'pass!'});
})

it('Gets the products endpoint', async done => {

  const res = await request.get('/api/products')

  expect(res.status).toBe(200)
  // expect(res.body.message).toBe('pass!')
  done()
})