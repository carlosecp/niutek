import React from 'react'
import SidebarList from "./SidebarList"
import UserDropdown from './UserDropDown'

function Sidebar() {
    return (
        <div className="sidebar">
            <h2 id="niudot-title">niudot.</h2>
            <SidebarList/>
            <UserDropdown/>
        </div>
    );
}

export default Sidebar;