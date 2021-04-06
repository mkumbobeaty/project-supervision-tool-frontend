import React from "react";
import CommonItemFilter from "./CommonItemFilter";
import {Checkbox} from 'antd';

// transform data into structure that
// filter can display
const getFilterData = (items) => items.map(({ name, id, }) => ({
    title: name,
    value: name,
    id
}));

const status = [
    'Active', 'Closed', 'Droped'
]

function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
}

const ProjectsFilter = ({ handleOnclickFilterItem, predefinedFilterData }) => {

    const filterConfig = { filterTitle: 'Projects' }
    const filterData = predefinedFilterData.length > 0 ? getFilterData(predefinedFilterData) : []

    return (
        <section className="ProjectsFilter">
            <h4 className="ProjectsFilterStatus">Projects Status</h4>
            <hr />
              <div className="status">
                    {status.map(data => <Checkbox onChange={onChange}>{data}</Checkbox>)}
                </div>
              <hr />
            {filterData.length > 0 ? <CommonItemFilter
                data={filterData}
                config={filterConfig}
                handleOnclickFilterItem={handleOnclickFilterItem}
                filterTitle={filterConfig.filterTitle}
            /> : ''}
        </section>
    )
}

export default ProjectsFilter