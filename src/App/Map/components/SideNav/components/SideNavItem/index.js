import React from 'react';
import './styles.css'

const styles = {
    color: '#2d98d4',
    backgroundColor: '#ffffff',
    borderRight: '2px solid #dcd9d954'
}

function SideNavItem({
                         title,
                         activeThumbnail,
                         inactiveThumbnail,
                         itemId,
                         activeItem,
                         setActiveItem,
                         getOverview,
                         clearOverview,
                     }) {
    const handleClick = () => {

        // if same item is clicked twice
        // set active item to null
        if (itemId === activeItem) {
            clearOverview();
            return setActiveItem('');
        }
        getOverview();
        return setActiveItem(itemId);
    }
    const isActive = itemId === activeItem

    return (
        <div className='SideNavItem' style={isActive ? styles : {}} onClick={handleClick}>
            <img src={isActive ? activeThumbnail : inactiveThumbnail} width={50}/>
            <div className="side-nav-item-title">{title}</div>
        </div>
    );
}

export default SideNavItem;
