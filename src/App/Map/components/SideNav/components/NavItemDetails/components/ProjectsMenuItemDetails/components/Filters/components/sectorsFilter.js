import React from "react";
import CommonItemFilter from "./CommonItemFilter";

// transform data into structure that
// filter can display
const getFilterData = (items) => items.map(({ name, id }) => ({
    title: name,
    value: name,
    total_count: 3,
    id
}));


const SectorsFilter = ({ handleOnclickFilterItem, predefinedFilterData }) => {

    const filterConfig = { filterTitle: 'Sectors' }
    const filterData = predefinedFilterData.length > 0 ? getFilterData(predefinedFilterData) : []

    return (
        <section className="SectorsFilter">
            {filterData.length > 0 ? <CommonItemFilter
                data={filterData}
                config={filterConfig}
                handleOnclickFilterItem={handleOnclickFilterItem}
                filterTitle={filterConfig.filterTitle}
            /> : ''}
        </section>
    )
}

export default SectorsFilter