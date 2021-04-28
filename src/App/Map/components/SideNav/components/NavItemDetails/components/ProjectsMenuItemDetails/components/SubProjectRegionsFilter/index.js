import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import MultlevelFilter from "../../../../../../../../../components/CheckBoxGroupFilter/MultlevelFilter";

const prepareFilterItems = (items, districts) => items.map(({ name, id }) => ({
    title: name,
    id,
    children: districts,
})
);

const SubProjectRegionsFilter = ({ project, setProjectRegionsFilter,getDistricts,districts,setSubProjectDistrictsFilter }) => {

    const { regions } = project;
    const regionsFilterData = regions?.length > 0 ? prepareFilterItems(regions, districts) : [];
    
    // const [regionsIds, setDistrictId] = useState([]);
    // useEffect(() => {
    //     setProjectRegionsFilter(regionsIds.join(','));
    // }, [regionsIds]);

    // const handleOnclickFilterItem = (status_id) => {
    //     if (regionsIds.includes(status_id)) {
    //         const filterUncheckedItem = regionsIds.filter((i) => i !== status_id);
    //         setDistrictId(filterUncheckedItem);
    //     }
    //     else {
    //         setDistrictId([...regionsIds, status_id]);
    //     }

    // }

  const [checkedKeys, setCheckedKeys] = useState([]);
  const [selectedKeys, setSelectedKeys] = useState([]);
    const [districtsIds, setDistrictId] = useState([]);

    useEffect(() => {
        getDistricts(regionsFilterData[0].id);
        setSubProjectDistrictsFilter(districtsIds.join(','));
    }, [districtsIds]);

    const handleOnclickFilterItem = (status_id) => {
        if (districtsIds.includes(status_id)) {
            const filterUncheckedItem = districtsIds.filter((i) => i !== status_id);
            setDistrictId(filterUncheckedItem);
        }
        else {
            setDistrictId([...districtsIds, status_id]);
        }

    }


    const onCheck = (checkedKeysValue) => {
        console.log('onCheck', checkedKeysValue);
        setCheckedKeys(checkedKeysValue);
        handleOnclickFilterItem(checkedKeysValue)
      };
    
      const onSelect = (selectedKeysValue, info) => {
        console.log('onSelect', info);
        setSelectedKeys(selectedKeysValue);
      };

      
    
    return (

        <MultlevelFilter
            items={regionsFilterData}
            // handleFilter={handleOnclickFilterItem}
            onCheck={onCheck}
            onSelect={onSelect}
            checkedKeys={checkedKeys}
            selectedKeys={selectedKeys}
        />
    )
}

export default SubProjectRegionsFilter;

SubProjectRegionsFilter.propTypes = {
    region: PropTypes.array.isRequired
}
