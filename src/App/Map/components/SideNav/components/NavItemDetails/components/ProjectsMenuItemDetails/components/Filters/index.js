import React from "react";
import LocationsFilter from "./components/locationsFilter";
import ProjectsFilter from "./components/projectsFilter";
import './styles.css';

const ProjectsOverviewFilter = ({ handleOnclickFilterItem, locations, projects }) => {
    return (
        <section className="ProjectsOverviewFilter">
           
            <ProjectsFilter predefinedFilterData={projects}
                handleOnclickFilterItem={handleOnclickFilterItem} />
             <LocationsFilter
                predefinedFilterData={locations}
                handleOnclickFilterItem={handleOnclickFilterItem}
            />
        </section>
    )
}

export default ProjectsOverviewFilter