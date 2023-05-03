import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import TermsCondition from "../Pages/Terms & Condition/TermsCondition";
import Blog from "../Pages/Blog/Blog";
import Register from "../Pages/Register/Register";
import Chef from "../Pages/Home/Home/Chef/Chef";

// eslint-disable-next-line no-unused-vars
const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/chef')
            },
            {
                path: ':id',
                element: <Chef></Chef>,
                loader: ({params}) => fetch(`http://localhost:5000/chef/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/terms',
                element: <TermsCondition></TermsCondition>
            },
            {
                path: '/blogs',
                element: <Blog></Blog>
            }
        ]
    }
])

export default router;