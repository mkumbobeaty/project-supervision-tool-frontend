
import React from "react";
import SummarySection from "./SummarySection";

/**
 * @function
 * @name ProjectsSummarySections
 * @description renders summary sections for projects
 */
function ProjectsSummarySections({ projectsOverview, getProjectsByRegion }) {
    const projectSummaryDetails = [
        {
            title: 'Regions',
            data: projectsOverview.map(({region_name, projects_count, id}) => ({ name: region_name, id, count: projects_count}))}
    ];

    const handleOnSummarySectionClick = (item) => getProjectsByRegion(item?.id);

    const renderProjectSummaryDetails = (arr) => arr.map(({title, data}) =>
        <SummarySection sectionName={title} items={data} getData={handleOnSummarySectionClick}/>
    );


    return projectsOverview.length ? ( <>{ renderProjectSummaryDetails(projectSummaryDetails)}</>) : '';
}

export default ProjectsSummarySections;
