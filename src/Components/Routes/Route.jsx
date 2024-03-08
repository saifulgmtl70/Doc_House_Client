import {
    createBrowserRouter,

} from "react-router-dom";

import ErrorPage from "../ErrorPage/ErrorPage";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Login from "../Authentication/Login/Login";
import Signup from "../Authentication/Signup/Signup";
import DoctorProfile from "../Pages/Home/DoctorProfile/DoctorProfile";
import Appointment from "../Pages/Appointment/Appointment";
import Dashboard from "../../Dashboard/Dashboard";
import DashboardHome from "../../Dashboard/DashboardHome/DashboardHome";
import AllUsers from "../../Dashboard/AllUsers/AllUsers";
import AddDoctor from "../../Dashboard/AddDoctor/AddDoctor";
import ManageDoctor from "../../Dashboard/ManageDoctor/ManageDoctor";
import PrivateRoute from "../../Dashboard/PrivateRoute";
import AdminRoute from "./AdminRoute";
import UserDashboard from "../../UserDashboard/UserDashboard";
import MyReviews from "../../UserDashboard/MyReviews/MyReviews";
import MyAppointment from "../../UserDashboard/MyAppointment/myappointment";
import MyHistory from "../../UserDashboard/MyHistory/MyHistory";
import Payment from "../../UserDashboard/MyAppointment/Payment/Payment";
import Contact from "../Pages/Contact/Contact";
import AllDoctors from "../Pages/Home/AllDoctors/AllDoctors";




export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      errorElement: <ErrorPage/>,
      children:[
        {
            path: '/',
            element: <Home/>
        },
        {
          path:'/login',
          element: <Login/>
        },
        {
          path: '/signup',
          element: <Signup/>
        },
        {
          path: '/doctorprofile/:id',
          element: <DoctorProfile/>,
          loader: () => fetch(`https://doc-house-server-tau.vercel.app/doctors`)
        },
        {
          path: '/appointment',
          element: <Appointment/>
        },
        
        {
          path: '/alldoctor',
          element: <AllDoctors/>
        },

        {
          path:'/contact',
          element: <Contact/>
        }

       
        
      ]
    },


    {
      path: 'dashboard',
      element: <AdminRoute> <Dashboard/> </AdminRoute>,
      errorElement: <ErrorPage/>,
      children: [
        {
          path: 'dashboardhome',
          element: <DashboardHome/>
        },
        {
          path: 'allusers',
          element: <AllUsers/>
        },
        {
          path: 'adddoctor',
          element: <AddDoctor/>
        },
        {
          path: 'managedoctor',
          element: <ManageDoctor/>
        }
      ]
    },




    {
      path: 'userdashboard',
      element: <PrivateRoute><UserDashboard/></PrivateRoute>,
      errorElement: <ErrorPage/>,
      children: [
        {
          path: 'myappointment',
          element: <MyAppointment/>
        },
        {
          path: 'payment',
          element: <Payment/>
        },
        {
          path: 'myreviews',
          element: <MyReviews/>
        },
        {
          path: 'myhistory',
          element: <MyHistory/>
        }
      ]
    }


    

   
   

  ]);