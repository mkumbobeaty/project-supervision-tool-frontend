import React from 'react';
import PropTypes from 'prop-types';
import './styles.css'
import ProjectsMenuItemDetails from './components/ProjectsMenuItemDetails';
import SubProjectsMenuItemDetails from './components/SubProjectsMenuItemDetails';
import DataSetsMenuItemDetails from "./components/DataSetsMenuItemDetails";


function NavItemDetails({activeItem}) {
    return (
        <div
            style={activeItem === '' ? {display: 'none'} : {width: '20vw'}}
            className='NavItemDetails'
        >
            {activeItem === 'projects' ? <ProjectsMenuItemDetails/> : ''}
            {activeItem === 'sub-projects' ? <SubProjectsMenuItemDetails/> : ''}
            {activeItem === 'data-sets' ? <DataSetsMenuItemDetails/> : ''}
        </div>
    );
}

NavItemDetails.propTypes = {
    activeItem: PropTypes.string.isRequired
}


export default NavItemDetails;
