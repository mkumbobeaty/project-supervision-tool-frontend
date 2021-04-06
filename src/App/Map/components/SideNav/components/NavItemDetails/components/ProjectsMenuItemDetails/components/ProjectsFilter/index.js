import React from "react";
import PropTypes from 'prop-types';
import CheckBoxGroupFilter from "../../../../../../../../../components/CheckBoxGroupFilter";

const prepareFilterItems = (items) => items.map(({name, id,}) => ({
    title: name,
    value: name,
    id
}));

const ProjectsFilter = ({projects}) => {

    const projectsFilterData = projects.length > 0 ? prepareFilterItems(projects) : [];

    // const status = [
    //     {title: 'Active', value: 'Active', id: 1},
    //     {title: 'Closed', value: 'Closed', id: 1},
    //     {title: 'Dropped', value: 'Dropped', id: 1}
    // ]

    return (
        <CheckBoxGroupFilter
            items={projectsFilterData}
            itemsPerPage={1}
            filterTitle={`Projects`}
        />
        )
}

export default ProjectsFilter;

ProjectsFilter.propTypes = {
    projects: PropTypes.array.isRequired
}
