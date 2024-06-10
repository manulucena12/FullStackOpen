import { render, fireEvent, screen } from '@testing-library/react'
import { Blogs } from '../components/userBlogs'
import { BlogForm } from '../components/blogForm'
describe('Testing Blogs', () => {
    const myblogs = [
        {
          "title": "Donda ",
          "author": "Kanye",
          "likes": 44,
          "user": {
            "name": "Manu Lucena",
            "username": "manulucena12",
            "id": "665731a5dc99c408f232c9f8"
          },
          "id": "666573212569b679ac700498"
        }
    ]
    const user = {
        "name": "Manu Lucena",
        "username": "manulucena12",
        "id": "665731a5dc99c408f232c9f8"
    }
    const blogRendered = render(<Blogs blogs={myblogs} user={user} />)
    test('Title and Author', ()=> {
        blogRendered.getAllByText(/Title:/i)
        blogRendered.getAllByText(/Author:/i)
    })
    test('Details button works properly', ()=>{
        render(<Blogs blogs={myblogs} user={user} />)
        const button = screen.getByText('Show details')
        fireEvent.click(button)
        blogRendered.getAllByText(/Likes:/i)
    })
    test('Double likes call mockFunction', ()=>{
        const mockHandler = vi.fn()
        render(<Blogs blogs={myblogs} user={user} mockHandler={mockHandler} />)
        const button = screen.getByText('Show details')
        fireEvent.click(button)
        const likeButton = screen.getByText('Like')
        fireEvent.click(likeButton)
        fireEvent.click(likeButton)
        expect(mockHandler.mock.calls).toHaveLength(2)
    })
})
describe('Testing blogForm', ()=>{
    test('Create function works properly', ()=>{
        //event.preventDefault causes problems but the test is correct
        const mockHandler = vi.fn()
        render(<BlogForm mockHandler={mockHandler} />)
        const button = screen.getByText('Create a new blog')
        fireEvent.click(button)
        const buttonPost = screen.getByText('Create Blog')
        fireEvent.click(buttonPost)
        expect(mockHandler.mock.calls).toHaveLength(1)
    })
})