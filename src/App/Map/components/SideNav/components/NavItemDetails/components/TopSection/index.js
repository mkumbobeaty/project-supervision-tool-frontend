import React from "react";
import {Button} from "antd";
import CustomSearch from "../CustomSearch";
import './styles.css';


/**
 * @function
 * @name TopSection
 * @description renders top section which has search bar, item title and filter button
 */
function TopSection({title}) {
    return (
        <div className='TopSection'>
            <CustomSearch/>
            <section>
                <div>{title}</div>
                <Button type="primary" style={{fontSize: 10}} size='small'>FILTERS</Button>
            </section>
            <hr/>
        </div>
    );

}

export default TopSection;
