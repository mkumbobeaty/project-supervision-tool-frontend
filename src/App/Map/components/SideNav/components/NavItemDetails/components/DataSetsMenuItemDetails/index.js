import React, { useEffect, useState } from "react";
import { Spin } from 'antd';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from 'prop-types';
import TopSection from "../TopSection";
import DataSet from "./components/DataSet";

import './styles.css'
import { mapDataSetsActions, mapDataSetsSelectors } from "../../../../../../../../redux/modules/map/dataSets";
import { Pagination } from "antd";
import CustomSearch from "../CustomSearch";

function DataSetsMenuItemDetails({ getLayers, layers, addDataSet, removeDataSet, total, loading }) {
    const [currentPage, setCurrentPage] = useState(1);
    useEffect(() => {
        getLayers(0);
    }, []);

    const onChange = (page) => {
        const offset = 10 * (page - 1);
        getLayers(offset);
        setCurrentPage(page)
    }

    const layerData = [
        { 'title': 'Administratrive_Boundaries', 'name': 'Dar es Salaam boundary for all regions', },
        { 'title': 'Land_use', 'name': 'Dar es Salaam land us', },
        { 'title': 'Administratrive_Boundaries', 'name': 'Dar es Salaam boundary', },
        { 'title': 'Land_use', 'name': 'Kimara mwisho land', },
        { 'title': 'Elevation', 'name': 'Msimbazi digital elevation modal ', },
        { 'title': 'Elevation', 'name': 'Msimbazi reference elevation', },
        { 'title': 'Infastructure', 'name': 'Dar es Salaam boundary', },
        { 'title': 'Infastructure', 'name': 'Dar es Salaam boundary', },
        { 'title': 'Infastructure', 'name': 'Dar es Salaam boundary', }

    ]

    let group = layerData.reduce((r, a) => {
        r[a.title] = [...r[a.title] || [], a];
        return r;
    }, {});

    return (
        <Spin spinning={loading}>
            <div className='DataSetsMenuItemDetails'>
                <TopSection searchPlaceHolder="Search Data " title={`MAP LAYERS (${total})`} />
                <hr />
                <div className="data-set-search" >
                    <CustomSearch placeholder='Search map layers' />
                </div>
                <hr />
                {/* <div className='data-set-items'>
                    {layers.length > 0 ? layers.map(layer => (
                        <DataSet layer={layer} addDataSet={addDataSet} removeDataSet={removeDataSet} />)) : ''}
                </div> */}

                <div className='data-set-items'>
                    <DataSet layer={group} addDataSet={addDataSet} removeDataSet={removeDataSet}  />
                </div>

                <div className='paginate-datasets'>
                    <Pagination current={currentPage} size='small' onChange={onChange} total={total} />
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
