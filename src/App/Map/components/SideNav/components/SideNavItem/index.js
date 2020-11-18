import React from 'react';
import './styles.css'

const styles = {
    background: 'white',
    borderBottom: '1px solid blue',
}

function SideNavItem({title, activeThumbnail, inactiveThumbnail}) {
    const handleClick = () => {};
    return (
        <div className='SideNavItem' style={styles} onClick={handleClick}>

            <img src={inactiveThumbnail} width={80}/>
            <div className="side-nav-item-title">{title}</div>
        </div>
    );
}

export default SideNavItem;
