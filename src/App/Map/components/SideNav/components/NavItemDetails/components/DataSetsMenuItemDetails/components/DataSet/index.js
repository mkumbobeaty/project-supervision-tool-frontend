import React, {useState} from "react";
import { ExclamationCircleOutlined, CloseOutlined } from '@ant-design/icons';

import './styles.css';
import {Popover} from "antd";

function DataSetAction() {
    const [close, setClose] = useState(false);

    return (
        <div className='DataSetAction'>
            <div
                className='add'
                style={{'display': close ? 'none' : 'block'}}
                onClick={() => setClose(true)}
            >
                Add
            </div>
            <CloseOutlined
                className='close'
                style={{'display': close ? 'block': 'none'}}
                onClick={() => setClose(false)}
            />
        </div>
    )
}

function DataSetInfo() {
    return (
        <div className='DataSetTitleHoverInfo'>
            <div>Agricultural land (% of land area)</div>
            <div>Source: World Development Indicators</div>
        </div>
    )
}


function DataSet() {

    return (
        <div className='DataSet'>
            <Popover className='data-set-info' content={DataSetInfo} title={<b>Data Set Details</b>} placement="right">
                <ExclamationCircleOutlined />
            </Popover>
            <div className='data-set-name-source'>
                <div title='Agricultural land (% of land area)'>Agricultural land (% of land area)</div>
                <div title='World Development Indicators'>Source: World Development Indicators</div>
            </div>
            <DataSetAction />
        </div>

    )

}



export default DataSet
