
import React from "react";
import SummarySection from "./SummarySection";

/**
 * @function
 * @name ProjectsSummarySections
 * @description renders summary sections for projects
 */
function ProjectsSummarySections({ projectsOverview }) {
    const projectSummaryDetails = [
        {
            title: 'Regions',
            data: projectsOverview.map(({region_name, projects_count}) => ({ name: region_name, count: projects_count}))}
    ];

    const renderProjectSummaryDetails = (arr) => arr.map(({title, data}) =>
        <SummarySection sectionName={title} items={data}/>
    );


    return projectsOverview.length ? ( <>{ renderProjectSummaryDetails(projectSummaryDetails)}</>) : '';
}

export default ProjectsSummarySections;
