import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import MultlevelFilter from "../../../../../../../../../components/CheckBoxGroupFilter/MultlevelFilter";

const prepareFilterItems = (items) => items.map(({ name, id, sub_components }) => ({
    title: name,
    id,
    children: sub_components,
})
);


const ComponentSubComponentFilter = ({ setComponentsSubComponentFilter, project }) => {
    const [componentIds, setComponentsId] = useState([]);
    
    useEffect(() => {
        setComponentsSubComponentFilter(componentIds.join(','));
    }, [componentIds]);

    const handleOnclickFilterItem = (package_id) => {
        if (componentIds.includes(package_id)) {
            const filterUncheckedItem = componentIds.filter((i) => i !== package_id);
            setComponentsId(filterUncheckedItem);
        }
        else {
            setComponentsId([...componentIds, package_id]);
        }

    }

const itemsData = project.components.length > 0 ? prepareFilterItems(project.components) : [];

    return (
        <MultlevelFilter
            items={itemsData}
        />
    )
}

export default ComponentSubComponentFilter;

ComponentSubComponentFilter.propTypes = {
    project: PropTypes.object.isRequired
}
