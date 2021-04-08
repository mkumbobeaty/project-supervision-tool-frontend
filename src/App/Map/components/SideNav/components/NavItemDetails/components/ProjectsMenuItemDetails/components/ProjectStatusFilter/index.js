import React from "react";
import PropTypes from 'prop-types';
import CheckBoxGroupFilter from "../../../../../../../../../components/CheckBoxGroupFilter";

const ProjectStatusFilter = ({statuses}) => {

const getFilterData = (items) => items.map(({name, description, id}) => ({
        title: description,
        value: name,
        id
    }));

const statusFilter = statuses.length > 0 ? getFilterData(statuses) : []

console.log(statusFilter);

    return (
        <CheckBoxGroupFilter
            items={statusFilter}
            itemsPerPage={5}
            filterTitle={`Status`}
        />
    )
}

export default ProjectStatusFilter;

ProjectStatusFilter.propTypes = {
    statuses: PropTypes.array.isRequired
}
