import React, {useEffect} from "react";
import PropTypes from 'prop-types';
import SideNavItemOverview from "../../../SideNavItemOverview";
import {moneyFormat} from "../../../../../../../../../../Util";
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
    }
    ) {

    // get project overview when
    // a  component has mounted
    useEffect(() => {
        getProjectsOverview();
    }, []);


    // generate project commitment amount string
    const getCommitmentAmount = ({commitment_amount}) => {
        const {iso, total} = commitment_amount;
        const money = moneyFormat(total);
        return `${iso} ${money}`;
    }

    // transform data into structure that
    // filter can display
    const getFilterData = (items) => items.map(({region_name, projects_count, id}) => ({
        title: region_name,
        value: projects_count,
        id
    }));


    // prepare data for projects overview table
    const commitmentAmount = projectsStatistics ? getCommitmentAmount(projectsStatistics) : '';
    const overViewData = projectsStatistics ? [
        {title: 'Projects', value: projectsStatistics.projects},
        {title: 'Commitment Amount', value: commitmentAmount},
        {title: 'Regions', value: projectsStatistics.regions},
    ] : [];

    const handleOnClickFilterItem = (id) => getProjectsByRegion(id);


    // prepare data for ProjectsRegionsPredefinedFilter
    const filterConfig = {filterTitle: 'Regions', filterRightTitle: 'Projects', filterLeftTitle: 'count'}
    const filterData = projectsCountByRegion.length > 0 ? getFilterData(projectsCountByRegion) : []


    return (
        <SideNavItemOverview
            overViewData={overViewData}
            predefinedFilterData={filterData}
            predefinedFilterConfig={filterConfig}
            handleOnclickFilterItem={handleOnClickFilterItem}
            title='National Overview'
        />
    );

}

export default NationalProjectsOverview;

NationalProjectsOverview.propTypes = {
    projectsStatistics: PropTypes.object.isRequired,
    projectsCountByRegion: PropTypes.object.isRequired,
    getProjectsOverview: PropTypes.func.isRequired
}
