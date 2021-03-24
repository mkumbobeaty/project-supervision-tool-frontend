import React, { useState } from 'react';
import { Checkbox } from 'antd';
import './styles.css';

function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
}
const status = [
    'Active', 'Closed', 'Droped'
]
const CommonItemFilter = ({ title, projects }) => {

    return (
        <div className="CommonItemFilter">
            <h4>{title}</h4>
            <hr />
            {status.map(data => <Checkbox onChange={onChange}>{data}</Checkbox>)}
            <hr />
            <h4>Projects</h4>
            {projects.map(({ name }) => <div className='projectFilter'>
            <Checkbox onChange={onChange}>{name}</Checkbox>
            </div>
            )}

        </div>
    )
}

export default CommonItemFilter