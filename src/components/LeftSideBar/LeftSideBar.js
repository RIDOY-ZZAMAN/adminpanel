import React from 'react';
// import { NavLink } from 'react-router-dom';
import './LeftSideBar.css'

const LeftSideBar = () => {
    return (
        <div className='SideBar'>
            <i class="fab fa-vuejs" style={{ color: "white" }}></i>
            <i class="fas fa-home" style={{ color: "#5E6876" }}></i>
            <i class="fas fa-tag" style={{ color: "#31A76F" }}></i>
            <i class="far fa-image" style={{ color: "#5E6876" }}></i>
            <i class="far fa-arrow-alt-circle-up" style={{ color: "#5E6876" }}></i>
            <i class="fas fa-border-all" style={{ color: "#5E6876" }}></i>
            <i class="fas fa-signal" style={{ color: "#5E6876" }}></i>

        </div >
    );
};

export default LeftSideBar;