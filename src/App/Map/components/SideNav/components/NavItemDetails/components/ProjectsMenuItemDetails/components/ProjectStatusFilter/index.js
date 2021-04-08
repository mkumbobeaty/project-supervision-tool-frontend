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


 const handleOnclickFilterItem = (project_status_id) => {
    console.log(project_status_id);
    debugger
    filterProjectsbyStatus(project_status_id)
 }

    return (
        <CheckBoxGroupFilter
            items={statusFilter}
            itemsPerPage={5}
            filterTitle={`Status`}
            handleFilter={handleOnclickFilterItem}
        />
    )
}

export default ProjectStatusFilter;

ProjectStatusFilter.propTypes = {
    statuses: PropTypes.array.isRequired,
    handleOnclickFilterItem:PropTypes.func.isRequired
}

ProjectStatusFilter.defaultProps = {
    handleOnclickFilterItem: () => {
    },
}
