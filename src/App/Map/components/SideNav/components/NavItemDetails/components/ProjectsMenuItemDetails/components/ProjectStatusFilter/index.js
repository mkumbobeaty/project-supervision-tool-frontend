import React from "react";
import PropTypes from 'prop-types';
import CheckBoxGroupFilter from "../../../../../../../../../components/CheckBoxGroupFilter";

const ProjectStatusFilter = ({statuses}) => {

    return (
        <CheckBoxGroupFilter
            items={statuses}
            itemsPerPage={5}
            filterTitle={`Status`}
        />
    )
}

export default ProjectStatusFilter;

ProjectStatusFilter.propTypes = {
    statuses: PropTypes.array.isRequired
}
