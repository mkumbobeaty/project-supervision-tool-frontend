import React from "react";
import PropTypes from 'prop-types';
import ProjectsTopSection from "../ProjectsTopSection";
import NationalProjectsOverview from "../NationalProjectsOverview";


/**
 * @function
 * @name ProjectsOverview
 * @description renders projects overview information
 */
function ProjectsOverview({ projectsStatistics, getProjectsOverview }) {
    return (
        <>
            <ProjectsTopSection/>
            <NationalProjectsOverview getProjectsOverview={getProjectsOverview} projectsStatistics={projectsStatistics}/>
        </>
    );
}

export default ProjectsOverview;

ProjectsOverview.propTypes = {
    projectsStatistics: PropTypes.object.isRequired,
    getProjectsOverview: PropTypes.func.isRequired,
}
