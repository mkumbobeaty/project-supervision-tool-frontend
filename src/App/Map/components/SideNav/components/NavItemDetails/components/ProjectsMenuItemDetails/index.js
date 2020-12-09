import React from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { mapSelectors } from '../../../../../../duck';

function ProjectsOverview() {
    return (<div>Projects  Overview </div>)
}

function ProjectDetails() {
    return (<div>Project Details </div>)
}

function ProjectsMenuItemDetails({ isShowProjectOverview, isShowProjectDetails }) {

    return (
        <>
            { isShowProjectOverview ? <ProjectsOverview /> : ''}
            { isShowProjectDetails ? <ProjectDetails /> : ''}
        </>
    );

}
const mapStateToProps = state => ({
    isShowProjectOverview: mapSelectors.showProjectsOverviewSelector(state),
    isShowProjectDetails: mapSelectors.showProjectDetailsSelector(state)
});

export default connect(mapStateToProps)(ProjectsMenuItemDetails);

ProjectsMenuItemDetails.propTypes = {
    isShowProjectOverview: PropTypes.bool.isRequired,
    isShowProjectDetails: PropTypes.bool.isRequired,
}
