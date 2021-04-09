import React, {useEffect, useState}from "react";
import PropTypes from 'prop-types';
import CheckBoxGroupFilter from "../../../../../../../../../components/CheckBoxGroupFilter";

const prepareFilterItems = (items) => items.map(({ name, id, }) => ({
    title: name,
    value: name,
    id
}));

const ProjectsFilter = ({ projects,setProjectIdFilter,getSubProjects }) => {

    const projectsFilterData = projects.length > 0 ? prepareFilterItems(projects) : [];
   
    const [projectsIds, setProjectId] = useState([]);

    useEffect(() => {
        setProjectIdFilter(projectsIds.join(','));
    }, [projectsIds]);

    const handleOnClickFilterValue = () => getSubProjects();



    const handleOnclickFilterItem = (project_id) => {
        if (projectsIds.includes(project_id)) {
            const filterUncheckedItem = projectsIds.filter((i) => i !== project_id);
            setProjectId(filterUncheckedItem);
        }
        else {
            setProjectId([...projectsIds, project_id]);
        }
     }

    return (
        <CheckBoxGroupFilter
            items={projectsFilterData}
            itemsPerPage={5}
            filterTitle={`Projects`}
            handleOnClickFilterValue={handleOnClickFilterValue}
            handleFilter={handleOnclickFilterItem}
            // filterClass="projectFilter"
        />
    )
}

export default ProjectsFilter;

ProjectsFilter.propTypes = {
    projects: PropTypes.array.isRequired,
    handleOnclickFilterItem:PropTypes.func.isRequired

}
ProjectsFilter.defaultProps = {
    handleOnclickFilterItem: () => {
    },
}
