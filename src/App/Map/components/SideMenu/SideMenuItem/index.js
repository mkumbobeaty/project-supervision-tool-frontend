import React from 'react';
import './styles.css';

const styles = {
    background: 'white',
    borderBottom: '1px solid blue',
}

const SideMenuItem = ({title, bgImage, setActive, ItemKey, active}) => {
    console.log(active === ItemKey);
    return (
        <div
            className="SideMenuItem"
            onClick={() => setActive(ItemKey)}
            style={active === ItemKey ? styles : {}}
        >
            <img src={bgImage} width={80}/>
            <div className="side-menu-item-title" style={active === ItemKey ? {color: "#2d98d4"} : {color: "white"}}>{title}</div>
        </div>
    );
}

export default SideMenuItem;
