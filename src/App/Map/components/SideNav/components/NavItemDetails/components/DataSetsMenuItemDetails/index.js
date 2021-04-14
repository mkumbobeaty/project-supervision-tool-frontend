import React, {useEffect, useState} from "react";
import { Spin } from 'antd';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import PropTypes from 'prop-types';
import TopSection from "../TopSection";
import DataSet from "./components/DataSet";

import './styles.css'
import {mapDataSetsActions, mapDataSetsSelectors} from "../../../../../../../../redux/modules/map/dataSets";
import {Pagination} from "antd";

function DataSetsMenuItemDetails({getLayers, layers, addDataSet, removeDataSet, total, loading}) {
    const [currentPage, setCurrentPage] = useState(1);
    useEffect(() => {
        getLayers(0);
    }, []);

    const onChange = (page) => {
        const offset = 10*(page - 1);
        getLayers(offset);
        setCurrentPage(page)
    }

    return (
        <Spin spinning={loading}>
            <div className='DataSetsMenuItemDetails'>
                <TopSection searchPlaceHolder="Search Data " title={`MAP LAYERS (${total})`}/>
                <div className='data-set-items'>
                    {layers.length > 0 ? layers.map(layer => (
                        <DataSet layer={layer} addDataSet={addDataSet} removeDataSet={removeDataSet}/>)) : ''}
                </div>
                <div className='paginate-datasets'>
                    <Pagination current={currentPage} size='small' onChange={onChange} total={total}/>
                </div>

            </div>
        </Spin>

    )

}


const mapStateToProps = state => ({
    layers: mapDataSetsSelectors.getGeonodeLayersSelector(state),
    total: mapDataSetsSelectors.getTotalDataSetsSelector(state),
    loading: mapDataSetsSelectors.getDataSetsLoaderSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
    getLayers: bindActionCreators(mapDataSetsActions.getGeonodeLayersStart, dispatch),
    addDataSet: bindActionCreators(mapDataSetsActions.setSelectedLayer, dispatch),
    removeDataSet: bindActionCreators(mapDataSetsActions.removeSelectedLayer, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(DataSetsMenuItemDetails)


DataSetsMenuItemDetails.propTypes = {
    addDataSet: PropTypes.func.isRequired,
    removeDataSet: PropTypes.func.isRequired,
    getLayers: PropTypes.func.isRequired,
    layers: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    total: PropTypes.number,
}

DataSetsMenuItemDetails.defaultProps = {
    layers: [],
    total: 0,
}
