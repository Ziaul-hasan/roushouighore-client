import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import TermsCondition from "../Pages/Terms & Condition/TermsCondition";
import Blog from "../Pages/Blog/Blog";
import Register from "../Pages/Register/Register";
import Chef from "../Pages/Home/Home/Chef/Chef";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../Error";

// eslint-disable-next-line no-unused-vars
const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://assignment-chef-receipe-server-ziaul-hasan.vercel.app/chef')
            },
            {
                path: 'chef/:id',
                element: <PrivateRoute><Chef></Chef></PrivateRoute>,
                loader: ({params}) => fetch(`https://assignment-chef-receipe-server-ziaul-hasan.vercel.app/chef/${params.id}`)
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