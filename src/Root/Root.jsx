import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";



const Root = () => {
    return (
        <div>
            
           <div>
           <Navbar></Navbar>
            <Outlet></Outlet>  </div> 
        
           <div> <Footer></Footer> </div>
        </div>
    );
};

export default Root;