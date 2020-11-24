import React from "react";
import SummarySection from "./SummarySection";

/**
 * @function
 * @name RegionProjectsSummarySections
 * @description renders summary sections of projects belonging
 * to a certain region
 */
function RegionProjectsSummarySections({ regionProjects }){
    const summary = [
        {
            title: 'Total sub-projects per project',
            data: regionProjects.map(({ name, sub_projects_count}) => ({ name, count: sub_projects_count, count_title: 'total sub-projects'}))}
    ];

    const renderSummary = (arr) => arr.map(({title, data}) =>
        <SummarySection sectionName={title} items={data}/>
    );

    return regionProjects.length > 0 ?( <>{ renderSummary(summary)}</>) : '';
}

export default RegionProjectsSummarySections;
