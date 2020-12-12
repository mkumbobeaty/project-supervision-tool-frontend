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
        getProject,
        setShowNationalOverview,
        setShowRegionalOverview,
        clearRegionalProjects,
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
                getProject={getProject}
                setShowNationalOverview={setShowNationalOverview}
                setShowRegionalOverview={setShowRegionalOverview}
                clearRegionalProjects={clearRegionalProjects}
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
    setShowNationalOverview: PropTypes.func.isRequired,
    setShowRegionalOverview: PropTypes.func.isRequired,
    clearRegionalProjects: PropTypes.func.isRequired,
    getProject: PropTypes.func.isRequired,
    regionProjects: PropTypes.array.isRequired,
}
