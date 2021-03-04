import React from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { mapSubProjectActions, mapSubProjectSelectors } from '../../../../../../../../../../redux/modules/map/subProjects';
import ProjectsTopSection from "../../../ProjectsMenuItemDetails/components/ProjectsTopSection";
import NationalSubProjectsOverview from "../NationalSubProjectsOverview";
import TopSection from "../../../TopSection";

const SubProjectsOverview = ({ subProjectsStatistics, subProjectCountByRegion, getSubProjectsOverview, showSubProjectsNationalOverview, loadingStatistics }) => {
    return (
        <>
            <TopSection  title='SUB PROJECTS'  searchPlaceHolder='Search SubProjects'/>
            { showSubProjectsNationalOverview ? <NationalSubProjectsOverview
                getSubProjectsOverview={getSubProjectsOverview}
                subProjectsStatistics={subProjectsStatistics}
                subProjectCountByRegion={subProjectCountByRegion}
                loadingStatistics={loadingStatistics}
            /> : ''}
        </>
    );
}

const mapStateToProps = state => ({
    subProjectsStatistics: mapSubProjectSelectors.getSubProjectsStatistics(state),
    loadingStatistics: mapSubProjectSelectors.getSubProjectsStatisticsLoading(state),
    showSubProjectsNationalOverview: mapSubProjectSelectors.showSubProjectNationalOverview(state),
    subProjectCountByRegion: mapSubProjectSelectors.getSubProjectsOverviewSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
    getSubProjectsOverview: bindActionCreators(mapSubProjectActions.getSubProjectOverviewStart, dispatch),
});


export default connect(mapStateToProps, mapDispatchToProps)(SubProjectsOverview);

SubProjectsOverview.propTypes = {
    projectsStatistics: PropTypes.object,
    showSubProjectsNationalOverview: PropTypes.bool.isRequired,
}

SubProjectsOverview.defaultProps = {
    projectsStatistics: null,
}
