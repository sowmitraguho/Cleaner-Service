import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home";
import Services from "../../Pages/Services/Services";
//import About from "../../Pages/About/About";
import Blog from "../../Pages/Blog/Blog";
import Contact from "../../Pages/Contact/Contact";
import LogIn from "../../Pages/Client/LogIn/LogIn";
import SignUp from "../../Pages/Client/SignUp/SignUp";
import SingleService from "../../Pages/Services/SingleService";
import AboutUs from "../../Pages/About/AboutUs";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch("http://localhost:5000/services")
            },
            {
                path: '/services',
                element: <Services></Services>,
                loader: () => fetch("http://localhost:5000/allservices")
            },
            {
                path: 'service/:id',
                element: <SingleService></SingleService>,
                loader: ({params}) => fetch(`http://localhost:5000/service/${params.id}`)
            },
            {
                path: '/about',
                element: <AboutUs></AboutUs>
            },
            {
                path: '/login',
                element: <LogIn></LogIn>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
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