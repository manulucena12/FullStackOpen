const supertest = require('supertest')
const {app,server} = require('../index')
const { default: mongoose } = require('mongoose')
const api = supertest(app)
const {dummy, totalLikes, favouriteBlog} = require('../utils/list_helper')

test('Checking number of blogs', ()=>{
    const blogs = []
    const result = dummy(blogs)
    expect(result).toBe(1)
})

describe('Total Likes', ()=>{
    const myBlogs = [
        {
          "title": "Donda",
          "author": "Kanye West",
          "url": "URl",
          "likes": 6,
          "id": "664c3586936f68cc996157a3"
        },
        {
          "title": "Pedro",
          "author": "Manu",
          "url": "URll",
          "likes": 4,
          "id": "664df8007c9dc9dcdf8c91ec"
        },
        {
          "title": "Pedro",
          "author": "Manu",
          "url": "URll",
          "likes": 1,
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
})


afterAll(()=>{
    mongoose.connection.close()
    server.close()
})