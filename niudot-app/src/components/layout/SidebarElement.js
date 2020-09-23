import React from "react";

export default function Sidebar_element({name, component, page}){
    return (
        <li onClick={() => alert('hello')} className="rounded">
            <span className="icon-navbar">
                {component}
            </span>
            {name}
        </li>
    )
}