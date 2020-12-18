import React from "react";
import PropTypes from 'prop-types';
import './styles.css';


/**
 * @function
 * @name ProjectOverviewTable
 * @description renders projects overview table
 */
function OverviewTable({data}) {

    const renderData = (items) => items.map(({title, value}) => (
        <article>
            <div>{title}</div>
            <div className='value'>{value}</div>
        </article>
    ));
    return (
        <div className='OverviewTable'>
            {renderData(data)}
        </div>
    );
}

export default OverviewTable;

OverviewTable.propTypes = {
    data: PropTypes.array.isRequired
}
