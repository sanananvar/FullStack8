import {createBrowserRouter} from "react-router-dom"
import UserRoot from "../pages/User/UserRoot"
import Home from "../pages/User/Home/Home"
import NFP from "../pages/User/NotFoundPage/NFP"
import Favorite from "../pages/User/Favorite/Favorite"
import AdminRoot from "../pages/Admin/AdminRoot"
import Dashboard from "../pages/Admin/Dashboard/Dashboard"
import ProductAdd from "../pages/Admin/Add/ProductAdd"

const routes= createBrowserRouter([
    {
        path:"/",
        element:<UserRoot/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/fav",
                element:<Favorite/>
            },
            {
                path:"*",
                element:<NFP/>
            }
        ]

    },
    {
        path:"/admin",
        element:<AdminRoot/>,
        children:[
            {
                path:"dashboard",
                element:<Dashboard/>
            },
            {
                path:"add",
                element:<ProductAdd/>
            }
        ]

    }
])

export default routes