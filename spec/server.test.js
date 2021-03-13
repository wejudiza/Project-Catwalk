const regeneratorRuntime = require('regenerator-runtime/runtime');
const server = require('./mockServer.js');
const supertest = require('supertest');
const request = supertest(server);

it('Gets the products endpoint', async done => {
  const res = await request
    .get('/api/products')
  // console.log('res body', res.body)
  expect(res.status).toBe(200)
  expect(res.body[0].id).toBe(16392)
  expect(Array.isArray(res.body)).toBe(true)
  done()
})


it('Gets the products info endpoint', async done => {
  const res = await request
    .get('/api/products/16056')
  expect(res.status).toBe(200)
  expect(res.body.id).toBe(16056)
  done()
})

it('Gets the products styles endpoint', async done => {
  const res = await request
    .get('/api/products/16056/styles')
  // console.log('res body', res.body)
  expect(res.status).toBe(200)
  expect(res.body.product_id).toBe('16056')
  expect(Array.isArray(res.body.results)).toBe(true)
  done()
})

it('Gets the related products endpoint', async done => {
  const res = await request
    .get('/api/products/16056/related')
  // console.log('res body', res.body)
  expect(res.status).toBe(200)
  expect(res.body[0]).toBe(16057)
  expect(Array.isArray(res.body)).toBe(true)
  done()
})

it('Gets the reviews endpoint', async done => {
  const res = await request
    .get('/api/reviews?product_id=16056')
  expect(res.status).toBe(200)
  expect(typeof res.body.results[0].review_id).toBe('number')
  expect(Array.isArray(res.body.results)).toBe(true)
  done()
})

it('Gets the meta reviews endpoint', async done => {
  const res = await request
    .get('/api/reviews/meta/16056')
  expect(res.status).toBe(200)
  expect(res.body.product_id).toBe('16056')
  expect(Array.isArray(res.body)).toBe(false)
  done()
})

// the following 2 tests depend on the existing of a single review

// it('Gets the reviews helpful endpoint', async done => {
//   const res = await request
//     .put('/api/reviews/288035/helpful')
//   expect(res.status).toBe(200)
//   done()
// })

// it('Gets the reviews report endpoint', async done => {
//   const res = await request
//     .put('/api/reviews/288035/report')
//   expect(res.status).toBe(200)
//   done()
// })

it('Gets the interactions endpoint', async done => {
  const res = await request
    .post('/api/interactions')
    .send({
      element: 'test',
      widget: 'test',
      time: 'test'
    })
  expect(res.status).toBe(200)
  // expect(res.body.message).toBe('pass!')
  done()
})
