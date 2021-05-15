import React, {useEffect, useState} from "react";
import PropTypes from 'prop-types';
import {InfoCircleTwoTone, CloseOutlined} from '@ant-design/icons';

import './styles.css';
import {Popover} from "antd";
import API from "../../../../../../../../../../API";

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
                style={{'display': close ? 'block' : 'none'}}
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
    const {name, abstract, data_quality_statement, supplemental_information} = layer
    return (
        <div className='DataSetTitleHoverInfo'>
            <div>Name: {name}</div>
            <div>Abstract: {abstract}</div>
            <div>Data Quality Statement: {data_quality_statement}</div>
            <div>Supplemental Information: {supplemental_information}</div>
        </div>
    )
}

DataSetInfo.propTypes = {
    layer: PropTypes.object.isRequired
}


function LayerCategory({category, addDataSet, removeDataSet}) {

    useEffect(() => {}, []);

    return (
        <div>
            <section className='data-set-section'>
                <h4> Boundaries <span>(10)</span></h4>
                <div className='DataSet'>
                    <Popover
                        className='data-set-info'
                        content={<DataSetInfo/>}
                        title={<b>Data Set Details</b>}
                        placement="right"
                        trigger="click"
                    >
                        <InfoCircleTwoTone twoToneColor="#0f6788"/>
                    </Popover>
                    <div className='data-set-name-source'>
                        <div title={'test'}>{'test'}</div>
                    </div>
                    <DataSetAction
                        addDataSet={addDataSet}
                        removeDataSet={removeDataSet}
                    />
                </div>
            </section>
        </div>

    )

}


export default LayerCategory;

LayerCategory.propTypes = {
    layer: PropTypes.object.isRequired,
    addDataSet: PropTypes.func.isRequired,
    removeDataSet: PropTypes.func.isRequired,
}
