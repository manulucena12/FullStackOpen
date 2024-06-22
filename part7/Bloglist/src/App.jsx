import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import { HomePageComponent } from "./Pages/Home";
import { BlogPageComponent } from "./Pages/Blog";
import { NotificationComponent } from "./Features/Noti";
import { LoginPageComponent } from "./Pages/Login";
import { useEffect } from "react";
import { useDispatch,useSelector } from 'react-redux'
import { setUser } from "../redux/Slices/userSlice";
export const App = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        const user = window.localStorage.getItem('user')
        if (user) {
          const userLogged = JSON.parse(user)
          dispatch(setUser(userLogged))
        }
    }, [])
    const user = useSelector(state => state.user)
    return (
        <div>
            <BrowserRouter>
                <Link to={'/home'} style={{marginRight: 5}} >Home</Link>
                <Link to={'/blogs'} style={{marginRight: 5}} >Blogs</Link>
                <Routes>
                    <Route path="/home" element={<HomePageComponent/>}/>
                    <Route path="/blogs" element={<BlogPageComponent/>} />
                    <Route path="/" element={user ? <HomePageComponent/> : <LoginPageComponent/> } />
                </Routes> 
            </BrowserRouter>
            <NotificationComponent/>
        </div>
    )
}