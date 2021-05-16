import React, { useEffect, useState} from 'react';
import { connect } from 'react-redux';
import WMSCapabilities from 'wms-capabilities';
import PropTypes from 'prop-types';
import { useMap } from "react-leaflet";
import {mapDataSetsActions, mapDataSetsSelectors} from "../../../redux/modules/map/dataSets";
import API from '../../../API';
import L from "leaflet";
import {bindActionCreators} from "redux";


/**
 * @function
 * @name SubProjectLocations
 * @description component that renders sub project element on map
 */
function ShowDataSets({ addedDataSet, removedDataSet, removeDataLayer, addDataLayer }) {
    const [mapLayers, setMapLayers] = useState({});
    const [capabilities, setCapabilities] = useState({});
    const map = useMap();

    useEffect(() => {
        API.getCapabilities()
            .then( res => setCapabilities(new WMSCapabilities().parse(res)))

        return () => {
            removeDataLayer(null);
            addDataLayer(null);
        }

    }, []);

    const addDataSet = (dataSet) => {
        console.log('capabilities', capabilities);
        const myLayer = capabilities.Capability.Layer.Layer.find(l => l.Name === dataSet.typename );
        const {LatLonBoundingBox} = myLayer;
        console.log(myLayer);

        const geonodeLayer = L.tileLayer.wms("https://geonode.project-supervision-tool.ga/geoserver/ows", {
            layers: dataSet.typename,
            format: 'image/png',
            transparent: true,
        });

        mapLayers[dataSet.typename] = geonodeLayer;
        setMapLayers(mapLayers);
        map.addLayer(geonodeLayer);
        const corner1 = L.latLng(LatLonBoundingBox[1],LatLonBoundingBox[0]);
        const corner2 = L.latLng(LatLonBoundingBox[3],LatLonBoundingBox[2]);
        const bounds = L.latLngBounds(corner1, corner2);
        map.fitBounds(bounds);
    }


    const removeDataSet = (dataSet) => {
        map.removeLayer(mapLayers[dataSet.typename]);
        delete mapLayers[dataSet.typename] // delete property of removed layer
        setMapLayers(mapLayers);
    }

    useEffect(() => {
        if(addedDataSet) addDataSet(addedDataSet);
    }, [addedDataSet]);

    useEffect(() => {
        if(removedDataSet) removeDataSet(removedDataSet);
    }, [removedDataSet]);

    return '';
}

const mapStateToProps = (state) => ({
    addedDataSet: mapDataSetsSelectors.getAddedDataSetSelector(state),
    removedDataSet: mapDataSetsSelectors.getRemovedDataSetSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
    removeDataLayer: bindActionCreators(mapDataSetsActions.removeSelectedLayer, dispatch),
    addDataLayer: bindActionCreators(mapDataSetsActions.setSelectedLayer, dispatch),
});




export default connect(mapStateToProps, mapDispatchToProps)(ShowDataSets);

ShowDataSets.propTypes = {
    addedDataSet: PropTypes.object,
    removedDataSet: PropTypes.object,
    addDataLayer: PropTypes.func.isRequired,
    removeDataLayer: PropTypes.func.isRequired,
}
ShowDataSets.defaultProps = {
    addedDataSet: null,
    removedDataSet: null,
}
