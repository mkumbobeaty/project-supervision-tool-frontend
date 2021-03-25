// import React from 'react';
import { Checkbox } from 'antd';
// import './styles.css';

// function onChange(e) {
//     console.log(`checked = ${e.target.checked}`);
// }

// const CommonItemFilter = ({ title, filterData }) => {
//     return (
//         <div className="CommonItemFilter">
//             <h4>{title}</h4>
//             <hr />
//             {filterData.map(({ name }) => {
//                 return (
//                     <div className='projectFilter'>
//                         <Checkbox onChange={onChange} title={name}>{name}</Checkbox>
//                     </div>
//                 )
//             }
//             )}

//         </div>
//     )
// }

// export default CommonItemFilter

import React from "react";
import PropTypes from 'prop-types';
import './styles.css';

function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
}
/**
 * @function
 * @name CommonItemFilter
 * @description renders filter predefined already with list of options
 */
function CommonItemFilter({ data, config, handleOnclickFilterItem, filterTitle }) {

const renderFilterItems = items => items.map(({ title, value, id,total_count }, i) => (
        <div className='projectFilter' onClick={() => handleOnclickFilterItem(id)}>
            <Checkbox onChange={onChange} title={title} key={i}>{value} </Checkbox><span>{total_count}</span>
        </div>

    ));

    return (
        <div className='CommonItemFilter'>
            <h4>{filterTitle}</h4>
            <hr />
            <section>
                {renderFilterItems(data)}
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
