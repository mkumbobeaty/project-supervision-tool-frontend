import React from "react";
import PropTypes from 'prop-types';
import CustomSearch from "../CustomSearch";
import './styles.css';


/**
 * @function
 * @name TopSection
 * @description renders top section which has search bar, item title and filter button
 */
function TopSection({title, searchPlaceHolder}) {
    return (
        <div className='TopSection'>
             <section>
                <h3>{title}</h3>
            </section>
            {/* <section>
            <CustomSearch placeholder={searchPlaceHolder}/>
            </section> */}
           </div>
    );

}

export default TopSection;

TopSection.propTypes = {
    title: PropTypes.string,
    searchPlaceHolder: PropTypes.string.isRequired
}

TopSection.defaultProps = {
    title: ''
}
