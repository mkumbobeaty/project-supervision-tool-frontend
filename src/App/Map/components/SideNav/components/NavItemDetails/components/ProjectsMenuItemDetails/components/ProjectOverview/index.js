import React from "react";
import PropTypes from 'prop-types';
import ProjectsTopSection from "../ProjectsTopSection";
import NationalProjectsOverview from "../NationalProjectsOverview";


/**
 * @function
 * @name ProjectsOverview
 * @description renders projects overview information
 */
function ProjectsOverview({ projectsStatistics, getProjectsOverview, projectsCountByRegion }) {
    return (
        <>
            <ProjectsTopSection/>
            <NationalProjectsOverview
                getProjectsOverview={getProjectsOverview}
                projectsStatistics={projectsStatistics}
                projectsCountByRegion={projectsCountByRegion}
            />
        </>
    );
}

export default ProjectsOverview;

ProjectsOverview.propTypes = {
    projectsStatistics: PropTypes.object.isRequired,
    projectsCountByRegion: PropTypes.object.isRequired,
    getProjectsOverview: PropTypes.func.isRequired,
}
