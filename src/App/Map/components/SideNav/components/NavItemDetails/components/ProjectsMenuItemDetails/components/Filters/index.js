import React from "react";
import LocationsFilter from "./components/locationsFilter";

const ProjectsOverviewFilter = ({ handleOnclickFilterItem, locations }) => {
    return (
        <section className="LocationsFilter">
            <LocationsFilter
                predefinedFilterData={locations}
                handleOnclickFilterItem={handleOnclickFilterItem}
            />
        </section>
    )
}

export default ProjectsOverviewFilter