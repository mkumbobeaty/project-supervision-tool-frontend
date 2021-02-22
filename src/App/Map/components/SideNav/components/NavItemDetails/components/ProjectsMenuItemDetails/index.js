import React from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {mapSelectors} from '../../../../../../../../redux/modules/map';
import ProjectsOverview from "./components/ProjectOverview";
import ProjectDetails from "./components/ProjectDetails";
import SubProjectDetails from "./components/SubProjectDetails";
import SubProjectElementDetails from "./components/SubProjectElement";




/**
 * @function
 * @name ProjectsMenuItemDetails
 * @description shows project menu item details such as project overview
 * and project details
 */
function ProjectsMenuItemDetails({ isShowProjectOverview, isShowProjectDetails, isShowSubProjectDetails, isShowSubProjectElementDetails }) {

    return (
        <>
            {isShowProjectOverview ? <ProjectsOverview/> : ''}
            {isShowProjectDetails ? <ProjectDetails/> : ''}
            {isShowSubProjectDetails ? <SubProjectDetails/> : ''}
            {isShowSubProjectElementDetails ? <SubProjectElementDetails/> : ''}
        </>
    );

}

const mapStateToProps = state => ({
    isShowProjectOverview: mapSelectors.showProjectsOverviewSelector(state),
    isShowSubProjectDetails: mapSelectors.showSubProjectDetailsSelector(state),
    isShowProjectDetails: mapSelectors.showProjectDetailsSelector(state),
    isShowSubProjectElementDetails: mapSelectors.showSubProjectElementDetailsSelector(state),
});



export default connect(mapStateToProps)(ProjectsMenuItemDetails);

ProjectsMenuItemDetails.propTypes = {
    isShowProjectOverview: PropTypes.bool.isRequired,
    isShowProjectDetails: PropTypes.bool.isRequired,
    isShowSubProjectDetails: PropTypes.bool.isRequired,
    isShowSubProjectElementDetails: PropTypes.bool.isRequired,
}
