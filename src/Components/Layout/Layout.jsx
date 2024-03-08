import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Pages/Header/Header";
import './Layout.css'

const Layout = () => {

    const location = useLocation();
    // console.log(location);
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signup') ;
   

    return (
        <div className="font_source">
            { noHeaderFooter || <Header></Header> }
            <Outlet></Outlet>
            { noHeaderFooter || <Footer></Footer> }
        </div>
    );
};

export default Layout;