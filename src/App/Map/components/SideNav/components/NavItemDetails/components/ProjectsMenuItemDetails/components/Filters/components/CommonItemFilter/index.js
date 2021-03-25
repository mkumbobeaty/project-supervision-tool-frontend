import React from "react";
import PropTypes from 'prop-types';
import { Checkbox } from 'antd';
import LoadMore from '../loadMore';
import './styles.css';

function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
}
/**
 * @function
 * @name CommonItemFilter
 * @description renders filter predefined already with list of options
 */
function CommonItemFilter({ data, handleOnclickFilterItem, filterTitle }) {
    const renderFilterItems = items => items.map(({ title, value, id, total_count }, i) => (
        <div className='projectFilter' onClick={() => handleOnclickFilterItem(id)}>
            <Checkbox onChange={onChange} title={title} key={i}>{value} </Checkbox><span>{total_count}</span>
        </div>

    ));

    return (
        <div className='CommonItemFilter'>
            <h4>{filterTitle}</h4>
            <hr />
            <section>
                {
                    data.length >= 5 ? <LoadMore posts={data} renderFilterItems={renderFilterItems} /> : renderFilterItems(data)
                }
            </section>
        </div>
    );

}

export default CommonItemFilter;

CommonItemFilter.propTypes = {
    data: PropTypes.array.isRequired,
    config: PropTypes.shape({ filterRightTitle: PropTypes.string, filterLeftTitle: PropTypes.string }),
    filterTitle: PropTypes.string.isRequired,
    handleOnclickFilterItem: PropTypes.func,
}

CommonItemFilter.defaultProps = {
    handleOnclickFilterItem: () => { },
    config: null,
}
