import React from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { mapSubProjectActions, mapSubProjectSelectors } from '../../../../../../../../../../redux/modules/map/subProjects';
import ProjectsTopSection from "../../../ProjectsMenuItemDetails/components/ProjectsTopSection";
import NationalSubProjectsOverview from "../NationalSubProjectsOverview";
import TopSection from "../../../TopSection";

const SubProjectsOverview = ({ subProjectsStatistics, getSubProjectsStatistics, showSubProjectsNationalOverview, loadingStatistics }) => {
    return (
        <>
            <TopSection title='SUB PROJECTS' />
            { showSubProjectsNationalOverview ? <NationalSubProjectsOverview
                getSubProjectsStatistics={getSubProjectsStatistics}
                subProjectsStatistics={subProjectsStatistics}
                loadingStatistics={loadingStatistics}
            /> : ''}
        </>
    );
}

const mapStateToProps = state => ({
    subProjectsStatistics: mapSubProjectSelectors.getSubProjectsStatistics(state),
    loadingStatistics: mapSubProjectSelectors.getSubProjectsStatisticsLoading(state),
    showSubProjectsNationalOverview: mapSubProjectSelectors.showSubProjectNationalOverview(state),

});

const mapDispatchToProps = (dispatch) => ({
    getSubProjectsStatistics: bindActionCreators(mapSubProjectActions.getSubProjectStatisticsStart, dispatch),
});


export default connect(mapStateToProps, mapDispatchToProps)(SubProjectsOverview);

SubProjectsOverview.propTypes = {
    projectsStatistics: PropTypes.object,
    showSubProjectsNationalOverview: PropTypes.bool.isRequired,
}

SubProjectsOverview.defaultProps = {
    projectsStatistics: null,
}
