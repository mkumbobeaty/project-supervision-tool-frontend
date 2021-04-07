import React from "react";
import PropTypes from 'prop-types';
import CheckBoxGroupFilter from "../../../../../../../../../components/CheckBoxGroupFilter";

const prepareFilterItems = (items) => items.map(({ region_name, projects_count, id }) => ({
    title: region_name,
    value: region_name,
    total_count: projects_count,
    id
}));

const RegionsFilter = ({regions}) => {

    const regionsFilterData = regions.length > 0 ? prepareFilterItems(regions) : [];

    // const status = [
    //     {title: 'Active', value: 'Active', id: 1},
    //     {title: 'Closed', value: 'Closed', id: 1},
    //     {title: 'Dropped', value: 'Dropped', id: 1}
    // ]

    return (
        <CheckBoxGroupFilter
            items={regionsFilterData}
            itemsPerPage={5}
            filterTitle={`Regions`}
        />
    )
}

export default RegionsFilter;

RegionsFilter.propTypes = {
    regions: PropTypes.array.isRequired
}
