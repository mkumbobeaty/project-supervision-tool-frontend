import React, {useEffect} from "react";
import PropTypes from 'prop-types';
import './styles.css';
import SideNavItemOverview from "../../../ProjectsMenuItemDetails/components/SideNavItemOverview";

/**
 * @function
 * @name NationalSubProjectsOverview
 * @description renders project overview at national level
 */
function NationalSubProjectsOverview(
    {
        subProjectsStatistics,
        loadingStatistics,
        getSubProjectsStatistics
    }
    ) {

    // get project overview when
    // a  component has mounted
    useEffect(() => {
        getSubProjectsStatistics();
    }, []);


    // transform data into structure that
    // filter can display
    const getFilterData = (items) => items.map(({region_name, projects_count, id}) => ({
        title: region_name,
        value: projects_count,
        id
    }));


    // prepare data for projects overview table
    const overViewData = subProjectsStatistics ? [
        {title: 'Sub Projects', value: subProjectsStatistics.sub_projects,},
        {title: 'Regions', value: subProjectsStatistics.regions},
        {title: 'Districts', value: subProjectsStatistics.districts},

    ] :  []
    ;

    // const handleOnClickFilterItem = (id) => getProjectsByRegion(id);

const projectsCountByRegion = [3, 4,5,6]
    // prepare data for ProjectsRegionsPredefinedFilter
    const filterConfig = {filterTitle: 'Regions', filterRightTitle: 'Regions', filterLeftTitle: 'Sub Projects'}
    const filterData = projectsCountByRegion?.length > 0 ? getFilterData(projectsCountByRegion) : []


    return (
        <SideNavItemOverview
            overViewData={overViewData}
            predefinedFilterData={filterData}
            predefinedFilterConfig={filterConfig}
            loadingStatistics={loadingStatistics}
            // handleOnclickFilterItem={handleOnClickFilterItem}
            title='National Overview'
        />
    );

}

export default NationalSubProjectsOverview;

NationalSubProjectsOverview.propTypes = {
    subProjectsStatistics: PropTypes.object,
    getSubProjectsStatistics: PropTypes.func.isRequired
}

NationalSubProjectsOverview.defaultProps = {
    subProjectsStatistics: null,
}
