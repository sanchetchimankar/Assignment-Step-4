import React from "react";
import Sidebar from "./Sidebar";
import { useState ,useEffect} from "react";
import { Button, Nav } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link } from "react-router-dom";
import { RiUserSettingsLine } from "react-icons/ri";
import './button.css';


const Dashboard = () =>{

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    
    const handleDropdownToggle = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };
    const [currentdate, setCurrentDate] = useState(
      new Date().toLocaleDateString()
    );
  
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
    
    useEffect(() => {
      // update current time every second
      const interval = setInterval(() => {
        setCurrentTime(new Date().toLocaleTimeString());
      }, 1000);
  
       // cleanup interval on unmount
      return () => clearInterval(interval);
    }, []);



  return (
   
    <header>
    <nav className="navbar navbar-expand-sm bg-secondary navbar-white">
      
      <ul className="navbar-nav">
        <div className="navbar-logo">
        <img src="https://www.zconsolutions.com/wp-content/uploads/2020/02/zconlogowith-tagline-1-1.svg" width="90" height="40" alt="" />
    
         </div>
         {/* <li className="nav-item">
            <Link className="nav-link" to="home">Home</Link>
         </li>
         <li className="nav-item">
             <Link className="nav-link" to="Login"> Dashboard </Link>
           </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">Login</Link>
        </li> */}
         <li className="nav-item2 text-end ">
         &nbsp;&nbsp;
          </li>&nbsp;
        
        <li className="nav-item2 text-end ">
            <div className="current-date text-end ">{currentdate}</div>
          </li>&nbsp;
        <li className="nav-item1">
        <div className="current-time"> {currentTime}</div>
        </li>
        </ul>
        <ul className="nav-bar ms=auto mb-2 mb-lg-0 ">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         
        
        <button className='button-60'  onClick={handleDropdownToggle}><RiUserSettingsLine/>Welcome User</button>
        <a className="navbar-brand nav-item3" >
         <img src="	https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" width="90" height="30" alt="" />
           </a>
           
            {isDropdownOpen &&
              <ul className="nav-item4">
               {/* <LogoutButton /> */}
              </ul>}
              {/* <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
             <li class="nav-item">
              <Link class="nav-link" to="Login">LogOut</Link>
            </li>
          </ul> */}
        
      </ul>

      
      </nav>
   <Sidebar />
   
    </header>

  );
};


export default Dashboard;
