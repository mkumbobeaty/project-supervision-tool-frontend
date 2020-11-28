import CustomSearch from "./CustomSearch";
import ProjectStatistics from "./ProjectStatistics";
import SummarySections from "./SummarySections";
import React from "react";

function OverView({projectsOverview,regionProjects, show }) {
    return show ? (
        <section className='overview'>
            <CustomSearch/>
            <ProjectStatistics/>
            <SummarySections
                projectsOverview={projectsOverview}
                regionProjects={regionProjects}
            />
        </section>
    ) : '';
}

export default OverView;
