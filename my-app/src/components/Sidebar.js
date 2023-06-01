import React from "react";
import css from "./css/Sidebar.module.css"

const Sidebar = () => {
    return (
        < div className = {css.sidebar} >
            <a>MyPhotos</a>
            <a>My Illustations</a>
            <a>My Paintings</a>
        </div>
    );
}

export default Sidebar;
