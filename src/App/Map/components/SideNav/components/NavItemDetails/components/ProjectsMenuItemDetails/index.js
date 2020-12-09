import React from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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
function ProjectsMenuItemDetails({
                                     isShowProjectOverview,
                                     isShowProjectDetails,
                                     projectsStatistics,
                                     getProjectsOverview,
                                     projectsCountByRegion,
}) {

    return (
        <>
            { isShowProjectOverview ?
                <ProjectsOverview
                projectsStatistics={projectsStatistics}
                getProjectsOverview={getProjectsOverview}
                projectsCountByRegion={projectsCountByRegion}
            />
            : ''}

            { isShowProjectDetails ? <ProjectDetails /> : ''}
        </>
    );

}
const mapStateToProps = state => ({
    isShowProjectOverview: mapSelectors.showProjectsOverviewSelector(state),
    projectsStatistics: mapSelectors.getProjectsStatistics(state),
    regionProjectStatistics: mapSelectors.getRegionProjectsStatistics(state),
    projectsCountByRegion: mapSelectors.getProjectsOverview(state),
    isShowProjectDetails: mapSelectors.showProjectDetailsSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
    getProjectsOverview: bindActionCreators(mapActions.getProjectsOverviewStart, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsMenuItemDetails);

ProjectsMenuItemDetails.propTypes = {
    isShowProjectOverview: PropTypes.bool.isRequired,
    projectsStatistics: PropTypes.object.isRequired,
    projectsCountByRegion: PropTypes.object.isRequired,
    regionProjectStatistics: PropTypes.object.isRequired,
    isShowProjectDetails: PropTypes.bool.isRequired,
    getProjectsOverview: PropTypes.func.isRequired,

}
