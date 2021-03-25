import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import SideNavItemOverview from "../SideNavItemOverview";
import { moneyFormat } from "../../../../../../../../../../Util";
import ProjectsOverviewFilter from "../Filters";
import './styles.css';

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
        getProjects,
        getSectors,
        sectors
    }
) {

    // get project overview when
    // a  component has mounted
    useEffect(() => {
        getProjectsOverview();
        getProjects();
        getSectors();
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
            />
            <ProjectsOverviewFilter 
                locations={projectsCountByRegion} 
                projects={projects} 
                handleOnClickFilterItem={handleOnClickFilterItem} 
                sectors={sectors}
                />
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
