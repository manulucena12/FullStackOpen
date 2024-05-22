const supertest = require('supertest')
const {app,server} = require('../index')
const { default: mongoose } = require('mongoose')
const api = supertest(app)
const {dummy} = require('../utils/list_helper')

test('Checking number of blogs', ()=>{
    const blogs = []
    const result = dummy(blogs)
    expect(result).toBe(1)
})

afterAll(()=>{
    mongoose.connection.close()
    server.close()
})