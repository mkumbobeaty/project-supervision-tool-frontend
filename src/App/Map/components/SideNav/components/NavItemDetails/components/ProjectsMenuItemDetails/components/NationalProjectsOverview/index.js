import React, { useEffect } from "react";
import PropTypes from 'prop-types';

import './styles.css';
import {LeftOutlined} from "@ant-design/icons";
import {moneyFormat} from "../../../../../../../../../../Util";

/**
 * @function
 * @name ProjectOverviewTable
 * @description renders projects overview table
 */
function ProjectsOverviewTable({data}) {

    const renderData = (items) => items.map(({title, value}) => (
        <article>
            <div>{title}</div>
            <div className='value'>{value}</div>
        </article>
    ));
    return (
        <div className='ProjectOverviewTable'>
            { renderData(data)}
        </div>
    );
}

/**
 * @function
 * @name ProjectsRegionsPredefinedFilter
 * @description renders filter predefined aready with list of options
 */
function ProjectsRegionsPredefinedFilter({data, config}) {


    const renderFilterItems = items => items.map(({ title, value }) => (
        <li>
            <article className='filter-item'>
                <div className='filter-item-title'>{title}</div>
                <div className='filter-item-value'>{ value }</div>
            </article>
        </li>
    ));

    return (
        <div className='ProjectsRegionsPredefinedFilter'>
            <div className='projects-regions-predefined-filter-title'>{config.filterTitle}</div>
            <hr/>
            <section>
                <article className='filter-header'>
                    <div>{config.filterRightTitle}</div>
                    <div>{config.filterLeftTitle}</div>
                </article>
                <ol className='filter-list'>
                    {renderFilterItems(data)}
                </ol>
            </section>
        </div>
    );

}

// generate project commitment amount string
const getCommitmentAmount = ({ commitment_amount }) => {
    const { iso, total } = commitment_amount;
    const  money = moneyFormat(total);
    return `${iso} ${money}`;
}

// transform data into structure that
// filter can display
const getFilterData = (items) => items.map(({ region_name, projects_count}) => ({ title: region_name, value: projects_count}));

/**
 * @function
 * @name NationalProjectsOverview
 * @description renders project overview at national level
 */
function NationalProjectsOverview({ projectsStatistics, getProjectsOverview, projectsCountByRegion }) {

    useEffect(()=> {
        getProjectsOverview();
    }, []);

    const commitmentAmount = projectsStatistics ? getCommitmentAmount(projectsStatistics) : '';

    // prepare data for ProjectsRegionsPredefinedFilter
    const config = { filterTitle: 'Regions', filterRightTitle: 'Projects', filterLeftTitle: 'count'}
    const filterData =  projectsCountByRegion.length > 0 ? getFilterData(projectsCountByRegion) : []

    const data = projectsStatistics ? [
        {title: 'Projects', value: projectsStatistics.projects},
        {title: 'Commitment Amount', value: commitmentAmount},
        {title: 'Regions', value: projectsStatistics.regions},
    ] : [];
    return (
        <div className='NationalProjectsOverview'>

            <section className='title-and-back-button'>
                <div>National Overview</div>
                <div className="back-button">
                    <a>
                        <LeftOutlined style={{fontSize: 10}}/>
                        <span>Back</span>
                    </a>
                </div>
            </section>

            <section className='project-over-view-table'>
                <ProjectsOverviewTable data={data}/>
            </section>

            <section className='project-regions-filters'>
                <ProjectsRegionsPredefinedFilter data={filterData} config={config} />
            </section>
        </div>
    );

}

export default NationalProjectsOverview;

NationalProjectsOverview.propTypes = {
    projectsStatistics: PropTypes.bool.isRequired,
    getProjectsOverview: PropTypes.func.isRequired
}
