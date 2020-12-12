import React from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {mapActions, mapSelectors} from '../../../../../../duck';
import { projectActions } from '../../../../../../../Projects/duck';
import ProjectsOverview from "./components/ProjectOverview";
import {bindActionCreators} from "redux";
import ProjectDetails from "./components/ProjectDetails";



/**
 * @function
 * @name ProjectsMenuItemDetails
 * @description shows project menu item details such as project overview
 * and project details
 */
function ProjectsMenuItemDetails(
    {
        isShowProjectOverview,
        isShowProjectDetails,
        projectsStatistics,
        getProjectsOverview,
        projectsCountByRegion,
        getProjectsByRegion,
        regionProjectStatistics,
        showRegionalOverview,
        showNationalOverview,
        regionProjects,
        getProject,
    }
) {

    return (
        <>
            {isShowProjectOverview ?
                <ProjectsOverview
                    showRegionalOverview={showRegionalOverview}
                    showNationalOverview={showNationalOverview}
                    projectsStatistics={projectsStatistics}
                    getProjectsOverview={getProjectsOverview}
                    projectsCountByRegion={projectsCountByRegion}
                    getProjectsByRegion={getProjectsByRegion}
                    regionProjectStatistics={regionProjectStatistics}
                    regionProjects={regionProjects}
                    getProject={getProject}
                />
                : ''}

            {isShowProjectDetails ? <ProjectDetails/> : ''}
        </>
    );

}

const mapStateToProps = state => ({
    isShowProjectOverview: mapSelectors.showProjectsOverviewSelector(state),
    projectsStatistics: mapSelectors.getProjectsStatistics(state),
    regionProjectStatistics: mapSelectors.getRegionProjectsStatistics(state),
    projectsCountByRegion: mapSelectors.getProjectsOverview(state),
    isShowProjectDetails: mapSelectors.showProjectDetailsSelector(state),
    showNationalOverview: mapSelectors.showNationalOverviewSelector(state),
    showRegionalOverview: mapSelectors.showRegionalOverviewSelector(state),
    regionProjects: mapSelectors.getRegionProjectsSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
    getProjectsOverview: bindActionCreators(mapActions.getProjectsOverviewStart, dispatch),
    getProjectsByRegion: bindActionCreators(mapActions.getProjectsByRegionStart, dispatch),
    getProject: bindActionCreators(projectActions.getProjectStart, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsMenuItemDetails);

ProjectsMenuItemDetails.propTypes = {
    showNationalOverview: PropTypes.bool.isRequired,
    showRegionalOverview: PropTypes.bool.isRequired,
    isShowProjectOverview: PropTypes.bool.isRequired,
    projectsStatistics: PropTypes.object.isRequired,
    projectsCountByRegion: PropTypes.object.isRequired,
    regionProjectStatistics: PropTypes.object.isRequired,
    isShowProjectDetails: PropTypes.bool.isRequired,
    getProjectsOverview: PropTypes.func.isRequired,
    getProjectsByRegion: PropTypes.func.isRequired,
    regionProjects: PropTypes.array.isRequired,
    getProject: PropTypes.func.isRequired,

}
