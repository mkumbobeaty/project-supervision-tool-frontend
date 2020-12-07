import {Button} from "antd";
import PropTypes from 'prop-types';
import React from "react";

/**
 * @function
 * @name IntroSection
 * @description component that renders side menu main title
 *  and  overview  table which displays some statistics
 */
function IntroSection({ data, title }) {
    const renderStatisticItems = (items) => items.map(({title, value }) => (
        <div className='overview-table-item'>
            <div title={title}>{title}</div>
            <div>{value}</div>
        </div>
    ));

    return (
        <>
            <section className='overview-details'>
                <div className='overview-title'>{title}</div>
                <Button type="primary" style={{fontSize: 10}} size='small'>FILTERS</Button>
            </section>
            <section className='overview-table'>
                { renderStatisticItems(data)}
            </section>
        </>
    );
}

export default IntroSection;

IntroSection.propTypes = {
    data: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
}
