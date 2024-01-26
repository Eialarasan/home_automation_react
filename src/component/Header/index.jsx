import React, { useEffect, useState } from "react";
import { getUserData } from "../../redux/reducer/LoginReducers";
import {  useSelector } from "react-redux";


const Header = () => {
   
    const[timeOfday,setTimeOfDay]=useState('')
    const user= useSelector(getUserData)
    
  

   useEffect(()=>{
    const currentHour = new Date().getHours();
    let timeOfDay;
    if (currentHour >= 5 && currentHour < 12) {
      timeOfDay = 'Good morning';
    } else if (currentHour >= 12 && currentHour < 17) {
      timeOfDay = 'Good afternoon';
    } else {
      timeOfDay = 'Good evening';
    }
    setTimeOfDay(timeOfDay)
   },[])
    return (
        <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
        <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
        <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
        <i class="bi bi-0-circle"></i>
        </button>
         {/* Topbar Search --> */}
        <form
            class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
            <div class="input-group">
                    <h3>Hi  {user?.userDetails?.userName} {timeOfday}.....</h3>
            </div>
        </form>
    </nav>
    </div>
    </div>
    )
}
export default Header