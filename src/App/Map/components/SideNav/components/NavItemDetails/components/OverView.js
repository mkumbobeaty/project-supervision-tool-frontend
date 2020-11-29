
import React from "react";
import PropTypes from 'prop-types';
import CustomSearch from "./CustomSearch";
import ProjectStatistics from "./ProjectStatistics";
import SummarySections from "./SummarySections";

function OverView({
                      projectsOverview,
                      regionProjects,
                      show,
                      getProject,
                      projectsStatistics,
                      getProjectsByRegion,
}) {

    return show ? (
        <section className='overview'>
            <CustomSearch/>
            <ProjectStatistics projectsStatistics={projectsStatistics}/>
            <SummarySections
                projectsOverview={projectsOverview}
                regionProjects={regionProjects}
                getProject={getProject}
                getProjectsByRegion={getProjectsByRegion}
            />
        </section>
    ) : '';
}

export default OverView;


OverView.propTypes = {
    projectsOverview: PropTypes.array.isRequired,
    regionProjects: PropTypes.array.isRequired,
    show: PropTypes.bool.isRequired,
    getProject: PropTypes.func.isRequired,
    projectsStatistics: PropTypes.object.isRequired,
    getProjectsByRegion: PropTypes.object.isRequired,
}
OverView.defaultProps = {
    getProjectsByRegion: () => {},
}
