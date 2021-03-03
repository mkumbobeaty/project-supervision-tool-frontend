import React from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { mapSubProjectActions, mapSubProjectSelectors } from '../../../../../../../../../../redux/modules/map/subProjects';
import ProjectsTopSection from "../../../ProjectsMenuItemDetails/components/ProjectsTopSection";
import NationalSubProjectsOverview from "../NationalSubProjectsOverview";
import RegionalSubProjectsOverview from "../RegionalSubProjectsOverview";
import TopSection from "../../../TopSection";
import { mapSelectors } from "../../../../../../../../../../redux/modules/map";

const SubProjectsOverview = ({
    subProjectsStatistics,
    getSubProjectsByRegion,
    subProjectCountByRegion,
    getSubProjectsOverview,
    showSubProjectsNationalOverview,
    regionSubProjectStatistics,
    loadingStatistics,
    showRegionalOverview,
    showRegionalOverviewLoader,
    regionSubProjectsOverView,
    setShowRegionalOverview,
    setShowNationalOverview,
    getSubProject,
    region,
    clearRegionSubProjects
}) => {
    return (
        <>
            <TopSection  title='SUB PROJECTS'  searchPlaceHolder='Search SubProjects'/>
            { showSubProjectsNationalOverview ? <NationalSubProjectsOverview
                getSubProjectsOverview={getSubProjectsOverview}
                subProjectsStatistics={subProjectsStatistics}
                subProjectCountByRegion={subProjectCountByRegion}
                loadingStatistics={loadingStatistics}
                getSubProjectsByRegion={getSubProjectsByRegion}
            /> : ''}
            {showRegionalOverview ? <RegionalSubProjectsOverview
                regionSubProjectStatistics={regionSubProjectStatistics}
                showRegionalOverviewLoader={showRegionalOverviewLoader}
                regionSubProjectsOverView={regionSubProjectsOverView}
                setShowNationalOverview={setShowNationalOverview}
                setShowRegionalOverview={setShowRegionalOverview}
                getSubProject={getSubProject}
                region={region}
                clearRegionSubProjects={clearRegionSubProjects}
            /> : ''}
        </>
    );
}

const mapStateToProps = state => ({
    subProjectsStatistics: mapSubProjectSelectors.getSubProjectsStatistics(state),
    loadingStatistics: mapSubProjectSelectors.getSubProjectsStatisticsLoading(state),
    showSubProjectsNationalOverview: mapSubProjectSelectors.showSubProjectNationalOverview(state),
    subProjectCountByRegion: mapSubProjectSelectors.getSubProjectsOverviewSelector(state),
    regionSubProjectStatistics: mapSubProjectSelectors.getRegionSubProjectsStatistics(state),
    showRegionalOverview: mapSubProjectSelectors.showRegionalOverviewSelector(state),
    showRegionalOverviewLoader: mapSubProjectSelectors.getRegionSubProjectsStatisticsLoader(state),
    regionSubProjectsOverView: mapSubProjectSelectors.getRegionSubProjectsOverviewSelector(state),
    region: mapSelectors.getRegionDetailsSelector(state),

});

const mapDispatchToProps = (dispatch) => ({
    getSubProjectsOverview: bindActionCreators(mapSubProjectActions.getSubProjectOverviewStart, dispatch),
    getSubProjectsByRegion: bindActionCreators(mapSubProjectActions.getSubProjectsByRegionStart, dispatch),
    setShowRegionalOverview: bindActionCreators(mapSubProjectActions.showRegionSubProjectsOverview, dispatch),
    setShowNationalOverview: bindActionCreators(mapSubProjectActions.showNationalSubProjectsOverview, dispatch),
    getSubProject:bindActionCreators(mapSubProjectActions.getSubProjectStart, dispatch),
    clearRegionSubProjects:bindActionCreators(mapSubProjectActions.clearRegionSubProjects, dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(SubProjectsOverview);

SubProjectsOverview.propTypes = {
    projectsStatistics: PropTypes.object,
    showSubProjectsNationalOverview: PropTypes.bool.isRequired,
}

SubProjectsOverview.defaultProps = {
    projectsStatistics: null,
}
