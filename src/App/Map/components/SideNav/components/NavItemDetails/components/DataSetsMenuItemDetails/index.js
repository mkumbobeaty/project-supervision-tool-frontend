import React, { useEffect, useState } from "react";
import { Spin } from 'antd';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from 'prop-types';
import API from '../../../../../../../../API';
import TopSection from "../TopSection";
import DataSet from "./components/DataSet";

import './styles.css'
import { mapDataSetsActions, mapDataSetsSelectors } from "../../../../../../../../redux/modules/map/dataSets";
import { Pagination } from "antd";
import CustomSearch from "../CustomSearch";
import { Link } from "react-router-dom";
import LayerCategory from "./components/DataSet";

function DataSetsMenuItemDetails({ getLayers, layers, addDataSet, removeDataSet, total, loading }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [layerCategories, setLayerCategories] = useState([]);
    useEffect(() => {
        // getLayers(0);
       API.getLayersCategories()
           .then(({objects}) => {
               const data = objects.filter(({count}) => count > 0);
               setLayerCategories(data);
           });
    }, []);

    const onChange = (page) => {
        // const offset = 10 * (page - 1);
        // getLayers(offset);
        // setCurrentPage(page)
    }


    // const layerData = [
    //     { 'title': 'Administratrive_Boundaries', 'name': 'Dar es Salaam boundary for all regions', },
    //     { 'title': 'Land_use', 'name': 'Dar es Salaam land us', },
    //     { 'title': 'Administratrive_Boundaries', 'name': 'Dar es Salaam boundary', },
    //     { 'title': 'Elevation', 'name': 'Msimbazi digital elevation modal ', },
    //     { 'title': 'Elevation', 'name': 'Msimbazi reference elevation', },
    //     { 'title': 'Drainage_sanitation', 'name': 'Dar es Salaam boundary', },
    //     { 'title': 'InLand_water', 'name': 'Dar es Salaam boundary', },
    //     { 'title': 'Infastructure', 'name': 'Dar es Salaam boundary', }
    //
    // ]



    return (
        <Spin spinning={loading}>
            <div className='DataSetsMenuItemDetails'>
                <TopSection searchPlaceHolder="Search Data " title={`MAP LAYERS (${total})`} />
                <hr />
                <div className="data-set-search" >
                    <CustomSearch placeholder='Search map layers' />
                </div>
                <hr />
                <div className='data-set-items'>
                    {
                        layerCategories.map((category) => <LayerCategory  category={category} />)
                    }
                </div>
                <div className="dataset-load_more">
                    <p>Load More</p>
                    <a href={'https://geonode.project-supervision-tool.ga/'} target="_blank" >  
                          <p>Open Geonode</p>
                    </a>
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
