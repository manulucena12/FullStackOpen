const supertest = require('supertest')
const {app,server} = require('../index')
const { default: mongoose } = require('mongoose')
const api = supertest(app)
const {dummy, totalLikes, favouriteBlog, mostBlogs, newMostLikes} = require('../utils/list_helper')
const Blog = require('../modules/blog')
require('dotenv').config()
test.skip('Checking number of blogs', ()=>{
    const blogs = []
    const result = dummy(blogs)
    expect(result).toBe(1)
})

describe.skip('Total Likes', ()=>{
    const myBlogs = [
        {
          "title": "Donda",
          "author": "Kanye West",
          "url": "URl",
          "likes": 6,
          "blogs": 1,
          "id": "664c3586936f68cc996157a3"
        },
        {
          "title": "Pedro",
          "author": "Manu",
          "url": "URll",
          "likes": 4,
          "blogs": 8,
          "id": "664df8007c9dc9dcdf8c91ec"
        },
        {
          "title": "Pedro",
          "author": "Manu",
          "url": "URll",
          "likes": 1,
          "blogs": 2,
          "id": "664df8626540763654da491b"
        }
    ]
    test('Checking if the total of likes is 11', ()=>{
        const result = totalLikes(myBlogs)
        expect(result).toBe(11)
    })
    test('Finding the most liked blog', ()=>{
      const result = favouriteBlog(myBlogs)
      expect(result).toEqual(myBlogs[0])
    })
    test('Who posted more blogs?', ()=>{
      const hypo = {
        "author": myBlogs[1].author,
        "blogs" : myBlogs[1].blogs
      }
      const result = mostBlogs(myBlogs)
      expect(hypo).toEqual(result)
    })
    test('Who is the most liked author?', ()=>{
      const hypo = {
        "author": myBlogs[0].author,
        "likes": myBlogs[0].likes
      }
      const result = newMostLikes(myBlogs)
      expect(hypo).toEqual(result)
    })
})

test('Returned in JSON?', async ()=>{
  await api
    .get('/api/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

test.skip('Does it return the correct number of objects?', async ()=>{
  const result = await api.get('/api/blogs')
  const lengthBody = result.body.length
  expect(lengthBody).toBe(3)
})

test('Is ID the identificator?', async ()=>{
  const result = await api.get('/api/blogs')
  const namedPropperly = result.body
  namedPropperly.forEach(blog => {
    expect(blog.id).toBeDefined()
    expect(blog._id).toBeUndefined()
  })
})

test.skip('Checking POST', async ()=>{
  const newBlog = {
    "author": "Hello",
    "blogs": 3,
    "likes": 1,
    "title": "cheking",
    "url": "some"
  }
  await api
  .post('/api/blogs')
  .send(newBlog)
  .expect(201)
  // The array length is 1 before i did this test. If the next test is 2, the array length increased in 1.
})

test.skip('Chencking if the length has been increased', async ()=>{
  const res = await api.get('/api/blogs')
  expect(res.body.length).toBe(2)
})

test('Cheking if the likes are left', async ()=>{
  const newBlog = {
    "author": "Hello",
    "blogs": 3,
    "likes": 0,
    "title": "cheking",
    "url": "some"
  }
  expect(newBlog.likes).toBeDefined()
})

test.skip('Backend return 400', async ()=>{
  const newBlog = {
    "author": "Hello",
    "blogs": 3,
    "likes": 1,
    "url": "some"
  }
  await api
  .post('/api/blogs')
  .expect(400)
})

test.skip('Deleting object', async ()=>{
  await api
  .delete('/api/blogs/664f4b97fab76f9f75f2e90c')
  .expect(204)
})

test.skip('Updating likes', async ()=>{
  await api
  .put('/api/blogs/664f4b97fab76f9f75f2e90c')
  .expect(200)
})

test.skip('Sending a username/password that is <3 length is not possible', async ()=>{
  const invalidUser = {
    username: "Ma",
    password: "Hi"
  }
  await api
  .post('/api/users')
  .send(invalidUser)
  .expect(400)
})

test('POST without token return 401', async ()=>{
  const invalidBlog = {
    "title": "Estrella",
    "author": "Mora",
    "url": "URl",
    "likes": 1
  }
  await api
  .post('/api/blogs')
  .send(invalidBlog)
  .expect(401)
})

test('POST with tokens and validation', async ()=>{
  const validBlog = {
    "title": "Estrella",
    "author": "Mora",
    "url": "URl",
    "likes": 1
  }
  await api
  .post('/api/blogs')
  .set('Authorization', `Bearer ${process.env.TOKEN}`)
  .send(validBlog)
  .expect(200)
})

afterAll(()=>{
    mongoose.connection.close()
    server.close()
})