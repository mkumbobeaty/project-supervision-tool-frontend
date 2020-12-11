import React from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {mapActions, mapSelectors} from '../../../../../../duck';
import ProjectsOverview from "./components/ProjectOverview";
import {bindActionCreators} from "redux";


function ProjectDetails() {
    return (<div>Project Details </div>)
}

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
        getRegionProjectStatistics,
        showRegionalOverview,
        showNationalOverview,
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
                    getRegionProjectStatistics={getRegionProjectStatistics}
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
});

const mapDispatchToProps = (dispatch) => ({
    getProjectsOverview: bindActionCreators(mapActions.getProjectsOverviewStart, dispatch),
    getProjectsByRegion: bindActionCreators(mapActions.getProjectsByRegionStart, dispatch),
    getRegionProjectStatistics: bindActionCreators(mapActions.getRegionProjectStatisticsStart, dispatch),
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
    getRegionProjectStatistics: PropTypes.func.isRequired,
    getProjectsByRegion: PropTypes.func.isRequired,

}
