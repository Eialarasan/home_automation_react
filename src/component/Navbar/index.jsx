import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import action from "../../redux/action";
import { useNavigate } from "react-router";
import { useDispatch } from 'react-redux';

const SideNavBar = () => {
    const location = useLocation()
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const logout=()=>{
        dispatch(action.logout())
        navigate("/")
       }
    return (
        <>
            <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
                    <div class="sidebar-brand-icon rotate-n-15">
                    <i class="bi bi-house-door"></i>
                    </div>
                    <div class="sidebar-brand-text mx-3">Homey </div>
                </a>

                <hr class="sidebar-divider my-0" />

                <li class={location.pathname==="/dashboard"?"nav-item active":"nav-item"}>
                    <Link to={'/dashboard'} class="nav-link">
                    <i class="bi bi-speedometer2"></i>
                        <span>Dashboard</span></Link>
                </li>
                <hr class="sidebar-divider" />
                <li class={location.pathname==="/home"?"nav-item active":"nav-item"}>
                    <Link to={'/home'} class="nav-link" >
                    <i class="bi bi-houses"></i>
                        <span>Home</span></Link>
                </li>
                <hr class="sidebar-divider" />
                <li class={location.pathname==="/room"?"nav-item active":"nav-item"}>
                    <Link to={'/room'} class="nav-link" >
                    <i class="bi bi-door-closed"></i>
                        <span>Room</span></Link>
                </li>
                <hr class="sidebar-divider" />
                <li class={location.pathname==="/device"?"nav-item active":"nav-item"}>
                    <Link to={'/device'} class="nav-link" >
                    <i class="bi bi-hdd-stack-fill"></i>
                        <span>Device</span></Link>
                </li>
                <hr class="sidebar-divider" />
                <li class={location.pathname==="/scheduler"?"nav-item active":"nav-item"}>
                    <Link to={'/scheduler'} class="nav-link" >
                    <i class="bi bi-calendar-week"></i>
                        <span>Scheduler</span></Link>
                </li>
                <hr class="sidebar-divider" />
                <li class={location.pathname==="/scheduler"?"nav-item active":"nav-item"}>
                   <a class="nav-link"> <i class="bi bi-calendar-week"></i>
                        <span onClick={()=>logout()}>Logout</span></a>
                </li>
            </ul>
        </>
    )
}
export default SideNavBar