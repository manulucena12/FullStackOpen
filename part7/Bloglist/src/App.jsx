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
                {user
                    ?   <>
                            <Link to={'/home'} style={{marginRight: 5}} >Home</Link>
                            <Link to={'/blogs'} style={{marginRight: 5}} >Blogs</Link>
                        </>
                    :   null
                }
                <Routes>
                    <Route path="/home" element={<HomePageComponent/>}/>
                    <Route path="/blogs" element={<BlogPageComponent/>} />
                    <Route path="/" element={user ? <HomePageComponent/> : <LoginPageComponent/> } />
                    <Route path="/register" element={<RegisterPageComponent/>}/>
                    <Route path="/:id" element={<UserPageComponent/>}/>
                </Routes> 
            </BrowserRouter>
            <NotificationComponent/>
        </div>
    )
}