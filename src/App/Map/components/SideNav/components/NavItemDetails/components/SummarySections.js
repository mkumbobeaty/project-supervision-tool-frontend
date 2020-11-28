
import React from "react";
import PropTypes from 'prop-types';
import ProjectsSummarySections from "./ProjectsSummarySections";
import RegionProjectsSummarySections from "./RegionProjectsSummarySections";


function SummarySections({projectsOverview, regionProjects, getProject}){


    const renderSections = () => {
        if (projectsOverview.length > 0) {
            return <ProjectsSummarySections projectsOverview={projectsOverview}/>;
        }
        else if (regionProjects.length > 0) {
            return <RegionProjectsSummarySections regionProjects={regionProjects} getProject={getProject}/>;
        }
        else {
            return '';
        }

    }

    return (<>{renderSections()}</>)
}

export default SummarySections;

SummarySections.propTypes = {
    projectsOverview: PropTypes.array,
    regionProjects: PropTypes.array,
    getProject: PropTypes.func,
}

SummarySections.defaultProps = {
    projectsOverview: [],
    regionProjects: [],
    getProject: () => {},
}