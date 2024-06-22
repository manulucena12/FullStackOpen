import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import { HomePageComponent } from "./Pages/Home";
import { BlogPageComponent } from "./Pages/Blog";
import { NotificationComponent } from "./Features/Noti";
export const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Link to={'/'} style={{marginRight: 5}} >Home</Link>
                <Link to={'/blogs'}>Blogs</Link>
                <Routes>
                    <Route path="/" element={<HomePageComponent/>}/>
                    <Route path="/blogs" element={<BlogPageComponent/>} />
                </Routes> 
            </BrowserRouter>
            <NotificationComponent/>
        </div>
    )
}