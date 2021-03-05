import React, {useState} from "react";
import PropTypes from 'prop-types';
import { ExclamationCircleOutlined, CloseOutlined } from '@ant-design/icons';

import './styles.css';
import {Popover} from "antd";

function DataSetAction({addDataSet, removeDataSet, dataSet}) {
    const [close, setClose] = useState(false);

    return (
        <div className='DataSetAction'>
            <div
                className='add'
                style={{'display': close ? 'none' : 'block'}}
                onClick={() => {
                    setClose(true);
                     addDataSet(dataSet)
                     removeDataSet(null)
                }}
            >
                Add
            </div>
            <CloseOutlined
                className='close'
                style={{'display': close ? 'block': 'none'}}
                onClick={() => {
                    setClose(false);
                    removeDataSet(dataSet)
                    addDataSet(null)
                }}
            />
        </div>
    )
}

DataSetAction.propTypes = {
    dataSet: PropTypes.object.isRequired,
    addDataSet: PropTypes.func.isRequired,
    removeDataSet: PropTypes.func.isRequired,
}

function DataSetInfo({layer}) {
    const {name, abstract , data_quality_statement, supplemental_information} = layer
    return (
        <div className='DataSetTitleHoverInfo'>
            <div>Name: { name }</div>
            <div>Abstract: { abstract }</div>
            <div>Data Quality Statement: { data_quality_statement }</div>
            <div>Supplemental Information: { supplemental_information }</div>
        </div>
    )
}

DataSetInfo.propTypes = {
    layer: PropTypes.object.isRequired
}


function DataSet({layer, addDataSet, removeDataSet}) {
    const {name, abstract } = layer;
    return (
        <div className='DataSet'>
            <Popover
                className='data-set-info'
                content={<DataSetInfo layer={layer}/>}
                title={<b>Data Set Details</b>}
                placement="right"
                trigger="click"
            >
                <ExclamationCircleOutlined />
            </Popover>
            <div className='data-set-name-source'>
                <div title={name} >{name}</div>
                <div title={abstract}>Abstract: {abstract}</div>
            </div>
            <DataSetAction
                addDataSet={addDataSet}
                removeDataSet={removeDataSet}
                dataSet={layer}
            />
        </div>

    )

}



export default DataSet;

DataSet.propTypes = {
    layer: PropTypes.object.isRequired,
    addDataSet: PropTypes.func.isRequired,
    removeDataSet: PropTypes.func.isRequired,
}
