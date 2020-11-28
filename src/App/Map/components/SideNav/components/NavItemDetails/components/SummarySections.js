import ProjectsSummarySections from "./ProjectsSummarySections";
import RegionProjectsSummarySections from "./RegionProjectsSummarySections";
import React from "react";


function SummarySections({projectsOverview, regionProjects}){

    const renderSections = () => {
        if (projectsOverview.length > 0) {
            return <ProjectsSummarySections projectsOverview={projectsOverview}/>;
        }
        else if (regionProjects.length > 0) {
            return <RegionProjectsSummarySections regionProjects={regionProjects} />;
        }
        else {
            return '';
        }

    }

    return (<>{renderSections()}</>)
}

export default SummarySections;
