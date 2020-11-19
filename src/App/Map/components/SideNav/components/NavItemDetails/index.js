import React from 'react';
import './styles.css'

const styles = {width: '16vw'}

function NavItemDetails({ activeItem }) {

    return(
        <div style={activeItem === '' ? { display: 'none'} : styles } className='NavItemDetails'>NavItemDetails</div>
    );
}

export default NavItemDetails;
