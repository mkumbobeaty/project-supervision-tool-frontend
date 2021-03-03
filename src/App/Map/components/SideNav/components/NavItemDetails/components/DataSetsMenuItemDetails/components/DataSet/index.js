import React from "react";
import { ExclamationCircleOutlined } from '@ant-design/icons';

import './styles.css';

function DataSetAction() {
    return (
        <div className='DataSetAction'>
            Add
        </div>
    )
}


function DataSet() {

    return (
        <div className='DataSet'>
            <div className='data-set-info'>
                <ExclamationCircleOutlined />
            </div>
            <div className='data-set-name-source'>
                <div>Agricultural land (% of land area)</div>
                <div>Source: World Development Indicators</div>
            </div>
            <DataSetAction />
        </div>

    )

}



export default DataSet
