import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import SideNavItemOverview from "../SideNavItemOverview";
import { moneyFormat } from "../../../../../../../../../../Util";
import './styles.css';
import ProjectsOverviewFilter from "../Filters";

/**
 * @function
 * @name NationalProjectsOverview
 * @description renders project overview at national level
 */
function NationalProjectsOverview(
    {
        projectsStatistics,
        getProjectsOverview,
        projectsCountByRegion,
        getProjectsByRegion,
        loadingStatistics,
        projects,
        getProjects
    }
) {

    // get project overview when
    // a  component has mounted
    useEffect(() => {
        getProjectsOverview();
        getProjects();
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
    ] : []
        ;

    const handleOnClickFilterItem = (id) => getProjectsByRegion(id);


    // prepare data for ProjectsRegionsPredefinedFilter
    
    return (
        <div>
            <SideNavItemOverview
                overViewData={overViewData}
                loadingStatistics={loadingStatistics}
                overViewData={overViewData}
                // predefinedFilterConfig={filterConfig}
                // predefinedFilterData={filterData}
                // handleOnclickFilterItem={handleOnClickFilterItem}
            />
            <ProjectsOverviewFilter locations={projectsCountByRegion} />
        
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
