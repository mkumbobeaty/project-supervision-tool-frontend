import React from 'react';
import PropTypes from 'prop-types';
import './styles.css'
import CustomSearch from "./components/CustomSearch";
import ProjectsSummarySections from "./components/ProjectsSummarySections";
import ProjectStatistics from './components/ProjectStatistics';
import RegionProjectsSummarySections from './components/RegionProjectsSummarySections';

function SummarySections({projectsOverview, regionProjects}){

    const renderSections = () => {
        if (projectsOverview.length > 0) {
            return <ProjectsSummarySections projectsOverview={projectsOverview}/>;
        }
        else if (regionProjects.length > 0) {
            return <RegionProjectsSummarySections regionProjects={regionProjects} />;
        }
        else {
            return '';
        }

    }

    return (<>{renderSections()}</>)
}


function NavItemDetails({activeItem, projectsOverview, regionProjects}) {


    return (
        <div
            style={activeItem === '' ? {display: 'none'} : { width: '16vw'}}
            className='NavItemDetails'
        >
            <section className='overview'>
                <CustomSearch/>
                <ProjectStatistics/>
                <SummarySections
                    projectsOverview={projectsOverview}
                    regionProjects={regionProjects}
                />
            </section>
        </div>
    );
}

export default NavItemDetails;

NavItemDetails.propTypes = {
    activeItem: PropTypes.string.isRequired,
    projectsOverview: PropTypes.array.isRequired,
    regionProjects: PropTypes.array.isRequired,
}
