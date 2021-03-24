import React from "react";
import CommonItemFilter from "./CommonItemFilter";

// transform data into structure that
// filter can display
const getFilterData = (items) => items.map(({ region_name, projects_count, id }) => ({
    title: region_name,
    value: region_name,
    total_count: projects_count,
    id
}));


const LocationsFilter = ({ handleOnclickFilterItem, predefinedFilterData }) => {

    const filterConfig = { filterTitle: 'Locations' }
    const filterData = predefinedFilterData.length > 0 ? getFilterData(predefinedFilterData) : []

    return (
        <section className="LocationsFilter">
            {filterData.length > 0 ? <CommonItemFilter
                data={filterData}
                config={filterConfig}
                handleOnclickFilterItem={handleOnclickFilterItem}
                filterTitle={filterConfig.filterTitle}
            /> : ''}
        </section>
    )
}

export default LocationsFilter