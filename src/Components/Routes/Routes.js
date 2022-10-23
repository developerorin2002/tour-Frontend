import { createBrowserRouter } from "react-router-dom";
import AllHotels from "../AllHotels/AllHotels";
import BookingHotel from "../BookingHotel/BookingHotel";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import ThankYou from "../ThankYou/ThankYou";
import UserProfile from "../UserProfile/UserProfile";
import PrivateRoutes from "./PrivateRoutes";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                loader:()=>fetch('https://travel-web-server.vercel.app/hotelcategory'),
                element:<Home></Home>
            },
            {
                path:'/home',
                loader:()=>fetch('https://travel-web-server.vercel.app/hotelcategory'),
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Registration></Registration>
            },
            {
                path:'/allhotels/:name',
                loader:({params})=>fetch(`https://travel-web-server.vercel.app/hotels/${params.name}`),
                element:<PrivateRoutes><AllHotels></AllHotels></PrivateRoutes>
            },
            {
                path:'/booking/:id',
                loader:({params})=>fetch(`https://travel-web-server.vercel.app/hotel/${params.id}`),
                element:<PrivateRoutes><BookingHotel></BookingHotel></PrivateRoutes>
            }
            ,
            {
                path:'/profile',
                element:<PrivateRoutes><UserProfile></UserProfile></PrivateRoutes>
            },
            {
                path:'/thankyou',
                element:<PrivateRoutes><ThankYou></ThankYou></PrivateRoutes>
            }
        ]
    }
])