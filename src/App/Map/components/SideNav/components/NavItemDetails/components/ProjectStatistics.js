import {Button} from "antd";
import React from "react";

/**
 * @function
 * @name ProjectStatistics
 * @description a function components that show summary statics info
 * about a all projects in a country
 */
const ProjectStatistics = () => (
    <>
        <section className='overview-details'>
            <div className='overview-title'>Overview</div>
            <Button type="primary" style={{fontSize: 10}} size='small'>FILTERS</Button>
        </section>
        <section className='overview-table'>
            <div className='overview-table-item'>
                <div title='Total projects count'>Projects</div>
                <div>2,859</div>
            </div>
            <div className='overview-table-item'>
                <div title='Total Commitment Amount'>Com.Amt</div>
                <div>$295.74b</div>
            </div>
            <div className='overview-table-item'>
                <div title='Projects Locations at regional level'>Regions</div>
                <div>18,238</div>
            </div>
            <div className='overview-table-item'>
                <div title='Projects locations at district level'>Districts</div>
                <div>134</div>
            </div>
        </section>
    </>
);

export default ProjectStatistics;
