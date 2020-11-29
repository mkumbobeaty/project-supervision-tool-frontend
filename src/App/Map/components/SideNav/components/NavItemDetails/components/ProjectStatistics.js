import {Button} from "antd";
import React from "react";
import {moneyFormat} from "../../../../../../../Util";



/**
 * @function
 * @name ProjectStatistics
 * @description a function components that show summary statics info
 * about a all projects in a country
 */
function ProjectStatistics ({ projectsStatistics }) {
    const data = projectsStatistics ? [
        {title: 'Projects', value: projectsStatistics.projects},
        {title: 'Commitment Amount', value: `${projectsStatistics.commitment_amount.iso} ${moneyFormat(projectsStatistics.commitment_amount.total)}`},
        {title: 'Regions', value: projectsStatistics.regions},
    ] : [];

    const renderStatisticItems = (items) => items.map(({title, value }) => (
        <div className='overview-table-item'>
            <div title={title}>{title}</div>
            <div>{value}</div>
        </div>
    ));

    return projectsStatistics ? (
        <>
            <section className='overview-details'>
                <div className='overview-title'>Overview</div>
                <Button type="primary" style={{fontSize: 10}} size='small'>FILTERS</Button>
            </section>
            <section className='overview-table'>
                { renderStatisticItems(data)}
            </section>
        </>
    ) : '';
}

export default ProjectStatistics;
