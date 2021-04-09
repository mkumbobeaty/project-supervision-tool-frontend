import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import SideNavItemOverview from "../SideNavItemOverview";
import { moneyFormat } from "../../../../../../../../../../Util";
import './styles.css';
import ProjectsFilter from "../ProjectsFilter";
import RegionsFilter from "../RegionsFilter";
import ProjectStatusFilter from "../ProjectStatusFilter";
import { getRegionsFailure } from "../../../../../../../../../../redux/modules/projects/actions";

/**
 * @function
 * @name NationalProjectsOverview
 * @description renders project overview at national level
 */
function NationalProjectsOverview(
    {
        projectsStatistics,
        getProjectsOverview,
        getProjectsByRegion,
        loadingStatistics,
        projects,
        getProjects,
        getProjectStatus,
        statuses,
        getRegions,
        regions,
        setProjectStatusFilter
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

    // generate project commitment amount string
    const getCommitmentAmount = ({ commitment_amount }) => {
        const { iso, total } = commitment_amount;
        const money = moneyFormat(total);
        return `${iso} ${money}`;
    }


    // prepare data for projects overview table
    const commitmentAmount = projectsStatistics?.commitment_amount ? getCommitmentAmount(projectsStatistics) : '';
    const overViewData = projectsStatistics ? [
        { title: 'Projects', value: projectsStatistics.projects, },
        { title: 'Sub Projects', value: 24 },
        { title: 'Regions', value: projectsStatistics.regions },
    ] : [];
    const handleOnClickFilterItem = (id) => getProjectsByRegion(id);


    return (
        <div>
            <SideNavItemOverview
                overViewData={overViewData}
                loadingStatistics={loadingStatistics}
                overViewData={overViewData}
            />
            <ProjectStatusFilter statuses={statuses} setProjectStatusFilter={setProjectStatusFilter}/>
            <ProjectsFilter projects={projects}/>
            <RegionsFilter regions={regions}/>
        </div>
    );


}

export default NationalProjectsOverview;

NationalProjectsOverview.propTypes = {
    projectsStatistics: PropTypes.object,
    projectsCountByRegion: PropTypes.array.isRequired,
    getProjectsOverview: PropTypes.func.isRequired
}

NationalProjectsOverview.defaultProps = {
    projectsStatistics: null,
}
