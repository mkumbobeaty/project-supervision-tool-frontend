import React from "react";
import PropTypes from 'prop-types';
import CheckBoxGroupFilter from "../../../../../../../../../components/CheckBoxGroupFilter";

const prepareFilterItems = (items) => items.map(({ name, id, projects_count }) => ({
    title: name,
    value: name,
    total_count: projects_count,
    id
}));

const RegionsFilter = ({regions}) => {

    const regionsFilterData = regions.length > 0 ? prepareFilterItems(regions) : [];

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
