import React from "react";
import ProjectsTopSection from "../ProjectsTopSection";

function NationalProjectsOverview() {
    return (<div>National Projects Overview</div>);

}

/**
 * @function
 * @name ProjectsOverview
 * @description renders projects overview information
 */
function ProjectsOverview() {
    return (
        <>
            <ProjectsTopSection/>
            <NationalProjectsOverview/>
        </>
    );
}

export default ProjectsOverview;
