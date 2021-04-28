import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import MultlevelFilter from "../../../../../../../../../components/CheckBoxGroupFilter/MultlevelFilter";

const prepareFilterItems = (items, districts) => items.map(({ name, id }) => ({
    title: name,
    id,
    children: districts,
}));

const SubProjectRegionsFilter = ({ project, setProjectRegionsFilter,getDistricts,districts }) => {

    const { regions } = project;
    const regionsFilterData = regions?.length > 0 ? prepareFilterItems(regions, districts) : [];

    const [regionsIds, setRegionId] = useState([]);
    useEffect(() => {
        getDistricts(regionsFilterData[0].id);
        setProjectRegionsFilter(regionsIds.join(','));
    }, [regionsIds]);

    const handleOnclickFilterItem = (status_id) => {
        if (regionsIds.includes(status_id)) {
            const filterUncheckedItem = regionsIds.filter((i) => i !== status_id);
            setRegionId(filterUncheckedItem);
        }
        else {
            setRegionId([...regionsIds, status_id]);
        }

    }

    return (
        // <CheckBoxGroupFilter
        //     items={regionsFilterData}
        //     itemsPerPage={5}
        //     filterTitle={`Regions`}
        //     // filterClass={`projectFilter`}
        //     handleFilter={handleOnclickFilterItem}
        //     projectFilterClass="regionFilter"
        // />
        <MultlevelFilter
            items={regionsFilterData}
        />
    )
}

export default SubProjectRegionsFilter;

SubProjectRegionsFilter.propTypes = {
    region: PropTypes.array.isRequired
}
