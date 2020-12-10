import React, {useEffect} from "react";
import PropTypes from 'prop-types';

import './styles.css';
import {LeftOutlined} from "@ant-design/icons";
import {moneyFormat} from "../../../../../../../../Util";

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
            {renderData(data)}
        </div>
    );
}

/**
 * @function
 * @name ProjectsRegionsPredefinedFilter
 * @description renders filter predefined aready with list of options
 */
function ProjectsRegionsPredefinedFilter({data, config}) {


    const renderFilterItems = items => items.map(({title, value}) => (
        <li>
            <article className='filter-item'>
                <div className='filter-item-title'>{title}</div>
                <div className='filter-item-value'>{value}</div>
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

/**
 * @function
 * @name SideNavItemOverview
 * @description renders project overview at national level
 */
function SideNavItemOverview({overViewData, predefinedFilterData, predefinedFilterConfig}) {


    return (
        <div className='SideNavItemOverview'>

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
                <ProjectsOverviewTable data={overViewData}/>
            </section>

            <section className='project-regions-filters'>
                <ProjectsRegionsPredefinedFilter
                    data={predefinedFilterData}
                    config={predefinedFilterConfig}
                />
            </section>
        </div>
    );

}

export default SideNavItemOverview;

SideNavItemOverview.propTypes = {
    projectsStatistics: PropTypes.object.isRequired,
}
