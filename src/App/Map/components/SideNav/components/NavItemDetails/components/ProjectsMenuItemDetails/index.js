import React from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { mapSelectors } from '../../../../../../duck';
import ProjectsOverview from "./components/ProjectOverview";


function ProjectDetails() {
    return (<div>Project Details </div>)
}

/**
 * @function
 * @name ProjectsMenuItemDetails
 * @description shows project menu item details such as project overview
 * and project details
 */
function ProjectsMenuItemDetails({ isShowProjectOverview, isShowProjectDetails, projectsStatistics}) {

    return (
        <>
            { isShowProjectOverview ? <ProjectsOverview projectsStatistics={projectsStatistics}/> : ''}
            { isShowProjectDetails ? <ProjectDetails /> : ''}
        </>
    );

}
const mapStateToProps = state => ({
    isShowProjectOverview: mapSelectors.showProjectsOverviewSelector(state),
    projectsStatistics: mapSelectors.getProjectsStatistics(state),
    isShowProjectDetails: mapSelectors.showProjectDetailsSelector(state)
});

export default connect(mapStateToProps)(ProjectsMenuItemDetails);

ProjectsMenuItemDetails.propTypes = {
    isShowProjectOverview: PropTypes.bool.isRequired,
    projectsStatistics: PropTypes.object.isRequired,
    isShowProjectDetails: PropTypes.bool.isRequired,

}
