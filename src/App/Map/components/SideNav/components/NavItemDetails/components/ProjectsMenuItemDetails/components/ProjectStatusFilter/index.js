import React from "react";
import PropTypes from 'prop-types';
import CheckBoxGroupFilter from "../../../../../../../../../components/CheckBoxGroupFilter";

const ProjectStatusFilter = ({statuses,filterProjectsbyStatus}) => {

const getFilterData = (items) => items.map(({name, description, id}) => ({
        title: description,
        value: name,
        id
    }));

const statusFilter = statuses.length > 0 ? getFilterData(statuses) : []


 const handleStatusFilter = (project_status_id) => {
    console.log(project_status_id);
    filterProjectsbyStatus(project_status_id)
 }

    return (
        <CheckBoxGroupFilter
            items={statusFilter}
            itemsPerPage={5}
            filterTitle={`Status`}
            handleFilter={handleStatusFilter}
        />
    )
}

export default ProjectStatusFilter;

ProjectStatusFilter.propTypes = {
    statuses: PropTypes.array.isRequired
}
