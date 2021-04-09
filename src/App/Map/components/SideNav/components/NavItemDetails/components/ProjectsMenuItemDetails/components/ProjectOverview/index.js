import React, {useEffect} from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {mapActions, mapSelectors} from "../../../../../../../../../../redux/modules/map";
import {bindActionCreators} from "redux";
import {projectActions, projectSelectors} from "../../../../../../../../../../redux/modules/projects";
import {mapProjectActions} from "../../../../../../../../../../redux/modules/map/projects";
import TopSection from "../../../TopSection";
import SideNavItemOverview from "../SideNavItemOverview";
import ProjectStatusFilter from "../ProjectStatusFilter";
import ProjectsFilter from "../ProjectsFilter";
import RegionsFilter from "../RegionsFilter";

/**
 * @function
 * @name ProjectsOverview
 * @description renders projects overview information
 */
function ProjectsOverview(
    {
        projectsStatistics,
        getProjectsOverview,
        loadingStatistics,
        projects,
        getProjects,
        statuses,
        getProjectStatus,
        regions,
        getRegions,
        setProjectStatusFilter,
        setProjectIdFilter,
        setProjectRegionsFilter
    }
) {

    // get project overview when
    // a  component has mounted
    useEffect(() => {
        getProjectsOverview();
        getProjects();
        getProjectStatus();
        getRegions();
    }, []);

    const overViewData = projectsStatistics ? [
        { title: 'Projects', value: projectsStatistics.projects, },
        { title: 'Sub Projects', value: projectsStatistics.sub_projects },
        { title: 'Regions', value: projectsStatistics.regions },
    ] : [];

    return (
        <>
            <TopSection title="OVERVIEWS"/>
            <SideNavItemOverview
                overViewData={overViewData}
                loadingStatistics={loadingStatistics}
            />
            <ProjectStatusFilter
                statuses={statuses}
                setProjectStatusFilter={setProjectStatusFilter}
            />
            <ProjectsFilter
                projects={projects}
                setProjectIdFilter={setProjectIdFilter}
            />
            <RegionsFilter
                regions={regions}
                setProjectRegionsFilter={setProjectRegionsFilter}
            />

        </>
    );
}

const mapStateToProps = state => ({
    projectsStatistics: mapSelectors.getProjectsStatistics(state),
    regionProjectStatistics: mapSelectors.getRegionProjectsStatistics(state),
    loadingStatistics : mapSelectors.getProjectsStatisticsLoading(state),
    projectsCountByRegion: mapSelectors.getProjectsOverview(state),
    showNationalOverview: mapSelectors.showNationalOverviewSelector(state),
    showRegionalOverview: mapSelectors.showRegionalOverviewSelector(state),
    showRegionalOverviewLoader: mapSelectors.regionProjectsStatisticsLoader(state),
    regionProjects: mapSelectors.getRegionProjectsSelector(state),
    region: mapSelectors.getRegionDetailsSelector(state),
    projects:projectSelectors.getProjectsFilterSelector(state),
    statuses: projectSelectors.getProjectStatusSelector(state),
    regions: projectSelectors.getRegionsSelector(state),

});

const mapDispatchToProps = (dispatch) => ({
    getProjectsOverview: bindActionCreators(mapActions.getProjectStatisticsStart, dispatch),
    getProjectsByRegion: bindActionCreators(mapActions.getProjectsByRegionStart, dispatch),
    setShowRegionalOverview: bindActionCreators(mapActions.showRegionalProjectsOverview, dispatch),
    setShowNationalOverview: bindActionCreators(mapActions.showNationalProjectsOverview, dispatch),
    clearRegionalProjects: bindActionCreators(mapActions.clearRegionProjects, dispatch),
    getProject: bindActionCreators(mapProjectActions.getProjectStart, dispatch),
    getProjects:bindActionCreators(projectActions.getProjectFilterStart, dispatch),
    getProjectStatus: bindActionCreators(projectActions.getProjectStatusStart, dispatch),
    getRegions: bindActionCreators(projectActions.getRegionsStart, dispatch),
    setProjectStatusFilter:bindActionCreators(projectActions.setProjectStatusFilter, dispatch),
    setProjectIdFilter:bindActionCreators(projectActions.setProjectIdFilter, dispatch),
    setProjectRegionsFilter:bindActionCreators(projectActions.setProjectRegionsFilter, dispatch)

});


export default connect(mapStateToProps, mapDispatchToProps)(ProjectsOverview);

ProjectsOverview.propTypes = {
    projectsStatistics: PropTypes.object,
    showRegionalOverview: PropTypes.bool.isRequired,
    showNationalOverview: PropTypes.bool.isRequired,
    projectsCountByRegion: PropTypes.array.isRequired,
    getProjectsOverview: PropTypes.func.isRequired,
    getProjectsByRegion: PropTypes.func.isRequired,
    setShowNationalOverview: PropTypes.func.isRequired,
    setShowRegionalOverview: PropTypes.func.isRequired,
    clearRegionalProjects: PropTypes.func.isRequired,
    getProject: PropTypes.func.isRequired,
    regionProjects: PropTypes.array.isRequired,
    setProjectStatusFilter: PropTypes.array.isRequired,
}

ProjectsOverview.defaultProps = {
    projectsStatistics: null,
}
