import React, {useEffect} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import PropTypes from 'prop-types';
import TopSection from "../TopSection";
import DataSet from "./components/DataSet";

import './styles.css'
import {mapDataSetsActions, mapDataSetsSelectors} from "../../../../../../../../redux/modules/map/dataSets";

function DataSetsMenuItemDetails({ getLayers, layers}) {
    useEffect(() => {
      getLayers();
      console.log(layers);
    }, []);

    const renderLayers = (data) => data.map(layer => (<DataSet layer={layer}/>))

    return (
        <>
            <TopSection searchPlaceHolder="Search Data " title="DATA SETS (1434)" />
            <div className='data-set-items'>
                {layers.length > 0 ? renderLayers(layers) : ''}
            </div>
        </>
    )

}


const mapStateToProps = state => ({
    layers: mapDataSetsSelectors.getGeonodeLayersSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
    getLayers: bindActionCreators(mapDataSetsActions.getGeonodeLayersStart, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(DataSetsMenuItemDetails)


DataSetsMenuItemDetails.propTypes = {
    getLayers: PropTypes.func.isRequired,
    layers: PropTypes.func.isRequired,
}

DataSetsMenuItemDetails.defaultProps = {
    layers: []
}
