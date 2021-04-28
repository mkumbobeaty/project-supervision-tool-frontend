import React from 'react';
import PropTypes from "prop-types";
import { Map } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'react-leaflet-fullscreen/dist/styles.css'
import L from 'leaflet';
import LayerControl from '../components/LayerControl';
import "./styles.css";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const state = {
    lat: -5.856,
    lng: 34.074,
    zoom: 7,
}
const position = [state.lat, state.lng]

const BaseMap = ({ children, zoomControl }) => {

    return (
        <Map center={position} zoom={state.zoom} className="base-map" zoomControl={zoomControl}>
            <LayerControl />
            {children}
        </Map>)
}

export default BaseMap;

BaseMap.propTypes = {
    zoomControl: PropTypes.bool
}

BaseMap.defaultProps = {
    zoomControl: true
}
