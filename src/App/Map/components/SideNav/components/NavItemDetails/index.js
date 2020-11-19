import React from 'react';
import { Input, AutoComplete } from 'antd';
import './styles.css'
import CustomSearch from "./components/CustomSearch";

const styles = {width: '16vw'}

function NavItemDetails({ activeItem }) {

    return(
        <div
            style={activeItem === '' ? { display: 'none'} : styles }
            className='NavItemDetails'
        >
            <CustomSearch />

        </div>
    );
}

export default NavItemDetails;
