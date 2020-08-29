import React from 'react';
import './styles.css';

const SideMenuItem = ({title, bgImage}) => {
    return (
        <div className="SideMenuItem">
            <img src={bgImage} width={80}/>
            <div className="side-menu-item-title">{title}</div>
        </div>
    );
}

export default SideMenuItem;
