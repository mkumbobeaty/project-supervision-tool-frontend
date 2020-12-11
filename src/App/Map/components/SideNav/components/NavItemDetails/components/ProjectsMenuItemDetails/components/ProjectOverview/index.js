import React from "react";
import PropTypes from 'prop-types';
import ProjectsTopSection from "../ProjectsTopSection";
import NationalProjectsOverview from "../NationalProjectsOverview";
import RegionalProjectsOverview from "../RegionalProjectsOverview";


/**
 * @function
 * @name ProjectsOverview
 * @description renders projects overview information
 */
function ProjectsOverview(
    {
        projectsStatistics,
        getProjectsOverview,
        projectsCountByRegion,
        getProjectsByRegion,
        showRegionalOverview,
        showNationalOverview,
        regionProjectStatistics,
        regionProjects,
    }
) {
    return (
        <>
            <ProjectsTopSection/>
            {showNationalOverview ? <NationalProjectsOverview
                getProjectsOverview={getProjectsOverview}
                projectsStatistics={projectsStatistics}
                projectsCountByRegion={projectsCountByRegion}
                getProjectsByRegion={getProjectsByRegion}
            /> : ''}
            {showRegionalOverview ? <RegionalProjectsOverview
                regionProjectStatistics={regionProjectStatistics}
                regionProjects={regionProjects}
            /> : ''}

        </>
    );
}

export default ProjectsOverview;

ProjectsOverview.propTypes = {
    projectsStatistics: PropTypes.object.isRequired,
    showRegionalOverview: PropTypes.bool.isRequired,
    showNationalOverview: PropTypes.bool.isRequired,
    projectsCountByRegion: PropTypes.object.isRequired,
    getProjectsOverview: PropTypes.func.isRequired,
    getProjectsByRegion: PropTypes.func.isRequired,
    regionProjects: PropTypes.array.isRequired,
}
