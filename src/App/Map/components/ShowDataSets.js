import React, { useEffect, useState} from 'react';
import { connect } from 'react-redux';
import WMSCapabilities from 'wms-capabilities';
import PropTypes from 'prop-types';
import { useMap } from "react-leaflet";
import {mapDataSetsSelectors} from "../../../redux/modules/map/dataSets";
import L from "leaflet";
import Axios from "axios";


/**
 * @function
 * @name SubProjectLocations
 * @description component that renders sub project element on map
 */
function ShowDataSets({ addedDataSet, removedDataSet }) {
    const [mapLayers, setMapLayers] = useState({});
    const map = useMap();

    const addDataSet = (dataSet) => {
        Axios.get(`https://geonode.project-supervision-tool.ga/geoserver/wms?service=wms&version=1.1.1&request=GetCapabilities`)
            .then(res => {
                const capabilities = new WMSCapabilities().parse(res.data);
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
            });
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




export default connect(mapStateToProps)(ShowDataSets);

ShowDataSets.propTypes = {
    addedDataSet: PropTypes.object,
    removedDataSet: PropTypes.object,
}
ShowDataSets.defaultProps = {
    addedDataSet: null,
    removedDataSet: null,
}
