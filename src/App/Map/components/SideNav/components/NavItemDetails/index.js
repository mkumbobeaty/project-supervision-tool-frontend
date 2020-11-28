import React from 'react';
import PropTypes from 'prop-types';
import './styles.css'
import OverView from './components/OverView';
import ProjectInfo from "./components/ProjectInfo";


function NavItemDetails({activeItem, projectsOverview, regionProjects}) {


    return (
        <div
            style={activeItem === '' ? {display: 'none'} : { width: '16vw'}}
            className='NavItemDetails'
        >
            <OverView
            show={true}
            projectsOverview={projectsOverview}
            regionProjects={regionProjects}
            />
            <ProjectInfo project={{}} show={false}/>
        </div>
    );
}

export default NavItemDetails;

NavItemDetails.propTypes = {
    activeItem: PropTypes.string.isRequired,
    projectsOverview: PropTypes.array.isRequired,
    regionProjects: PropTypes.array.isRequired,
}
