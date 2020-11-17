import React, { useEffect } from 'react';
import './styles.css';

const styles = {
    background: 'white',
    borderBottom: '1px solid blue',
}

const SideMenuItem = ({title, bgImage, setActive, itemKey, active, getData}) => {

    useEffect(() => {
        if (active === itemKey)
        {
            // getData();
        }
    }, [active])

    return (
        <div
            className="SideMenuItem"
            onClick={() => setActive(itemKey)}
            style={active === itemKey ? styles : {}}
        >
            <img src={bgImage} width={80}/>
            <div className="side-menu-item-title" style={active === itemKey ? {color: "#2d98d4"} : {color: "white"}}>{title}</div>
        </div>
    );
}

export default SideMenuItem;
