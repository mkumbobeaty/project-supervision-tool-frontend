import React from "react";
import sectors from "../../../../../../../../../../API/sectors";
import LocationsFilter from "./components/locationsFilter";
import ProjectsFilter from "./components/projectsFilter";
import SectorsFilter from "./components/sectorsFilter";
import './styles.css';

const ProjectsOverviewFilter = ({ handleOnclickFilterItem, locations, projects, sectors }) => {
    return (
        <section className="ProjectsOverviewFilter">

            <ProjectsFilter predefinedFilterData={projects}
                handleOnclickFilterItem={handleOnclickFilterItem} />

            {/* <SectorsFilter handleOnclickFilterItem={handleOnclickFilterItem} predefinedFilterData={sectors} /> */}
            <LocationsFilter
                predefinedFilterData={locations}
                handleOnclickFilterItem={handleOnclickFilterItem}
            />
        </section>
    )
}

export default ProjectsOverviewFilter