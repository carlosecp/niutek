import React from 'react'
import Profile from '../assets/images/profile.png'
import {FaChevronCircleDown } from 'react-icons/fa';


let UserDropdown = () => 
    <div className="user-dropdown">
        <div className="user-img">
            <img src={Profile} alt="Foto-perfil" />
        </div>
        <div className="vertical-container">
            <div className="user-name">
                <h3>Juan Matus</h3>
            </div>
            <div className="user-role">
                <h5>Administrador</h5>
            </div>
        </div>

        <div className="arrow-container">
            <FaChevronCircleDown />
        </div>
    </div>

export default UserDropdown