import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                
            },
            // {
            //     path: '/category/:id',
            //     element: <Category></Category>,
            //     loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`)
            // },
            // {
            //     path: '/news/:id',
            //     element: <PrivateRoute><News></News></PrivateRoute>,
            //     loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
            // },
            // {
            //     path: '/login',
            //     element: <LogIn></LogIn>
            // },
            // {
            //     path: '/register',
            //     element: <Register></Register>
            // },
            // {
            //     path: '/terms',
            //     element: <TermsAndConditions></TermsAndConditions>
            // },

        ]
    }
])