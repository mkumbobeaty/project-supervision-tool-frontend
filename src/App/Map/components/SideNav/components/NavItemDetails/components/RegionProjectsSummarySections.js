import React from "react";
import PropTypes from 'prop-types';
import SummarySection from "./SummarySection";

/**
 * @function
 * @name RegionProjectsSummarySections
 * @description renders summary sections of projects belonging
 * to a certain region
 */
function RegionProjectsSummarySections({ regionProjects, getProject }){
    const summary = [
        {
            title: 'Total sub-projects per project',
            data: regionProjects.map(({ name, sub_projects_count, id }) => ({ name, count: sub_projects_count, id, count_title: 'total sub-projects'}))}
    ];
    const getProjectWrapper = (item) => getProject(item?.id)

    const renderSummary = (arr) => arr.map(({title, data}) =>
        <SummarySection sectionName={title} items={data} getData={getProjectWrapper}/>
    );

    return regionProjects.length > 0 ?( <>{ renderSummary(summary)}</>) : '';
}

export default RegionProjectsSummarySections;

RegionProjectsSummarySections.propTypes = {
    regionProjects: PropTypes.array.isRequired,
    getProject: PropTypes.func.isRequired
}
