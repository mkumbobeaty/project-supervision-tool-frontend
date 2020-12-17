import React from 'react';
import PropTypes from 'prop-types';
import './styles.css'
import ProjectsMenuItemDetails from './components/ProjectsMenuItemDetails';

function CommingSoon() {

    return (
        <div>
            <b>Work on progress</b> <small>(coming soon!!)</small>
        </div>
    );

}

function SubProjectsMenuItemDetails() {

    return <CommingSoon/>

}

function DataSetsMenuItemDetails() {

    return <CommingSoon/>

}


function NavItemDetails({activeItem}) {
    return (
        <div
            style={activeItem === '' ? {display: 'none'} : {width: '16vw'}}
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
