import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import { HomePageComponent } from "./Pages/Home";
import { BlogPageComponent } from "./Pages/Blog";
import { NotificationComponent } from "./Features/Noti";
import { LoginPageComponent } from "./Pages/Login";
import { useEffect } from "react";
import { useDispatch,useSelector } from 'react-redux'
import { setUser } from "../redux/Slices/userSlice";
import { setToken } from "../redux/Slices/tokenSlice";
import { getBlogsAction } from "../redux/Actions/getBlog";
import { RegisterPageComponent } from "./Pages/Register";
import { getUserAction } from "../redux/Actions/getUsers";
import { UserPageComponent } from "./Pages/User";
import { BlogInfoComponent } from "./Pages/Info";
import { Navbar, Nav } from 'react-bootstrap'
import '../CSS/App.css'
export const App = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getUserAction())
        dispatch(getBlogsAction())
        const user = window.localStorage.getItem('user')
        if (user) {
          const userLogged = JSON.parse(user)
          dispatch(setUser(userLogged))
          dispatch(setToken({ name: `Bearer ${userLogged.token}` }))
        }
    }, [])
    const user = useSelector(state => state.user)
    return (
        <div>
            <BrowserRouter>
                <Navbar className="nav" variant="underline" bg="light" expand="lg">
                    <Navbar.Brand>Blog List App</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto" variant="underline" >
                            {user ? (
                                <>
                                    <Nav.Link as={Link} to="/" style={{ marginRight: 5 }}>Home</Nav.Link>
                                    <Nav.Link as={Link} to="/blogs" style={{ marginRight: 5 }}>Blogs</Nav.Link>
                                </>
                            ) : null}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Routes>
                    <Route path="/blogs" element={<BlogPageComponent/>} />
                    <Route path="/" element={user ? <HomePageComponent/> : <LoginPageComponent/> } />
                    <Route path="/register" element={<RegisterPageComponent/>}/>
                    <Route path="/user/:id" element={<UserPageComponent/>}/>
                    <Route path="/blog/:id" element={<BlogInfoComponent/>}/>
                </Routes> 
            </BrowserRouter>
            <NotificationComponent/>
        </div>
    )
}