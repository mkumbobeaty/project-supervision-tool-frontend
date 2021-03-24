import React, { useState } from 'react';
import { Checkbox } from 'antd';
import './styles.css';

function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
}

const CommonItemFilter = ({ title, filterData }) => {

    return (
        <div className="CommonItemFilter">
            <h4>{title}</h4>
            <hr />
            {filterData.map(({ name, region_name }) => {
                return (
                    <div className='projectFilter'>
                        <Checkbox onChange={onChange} title={name}>{name}</Checkbox>
                    </div>
                )
            }
            )}

        </div>
    )
}

export default CommonItemFilter