import React from 'react';
import PropTypes from "prop-types";
import {Map, TileLayer} from 'react-leaflet';
import "./styles.css";
import 'leaflet/dist/leaflet.css';
import 'react-leaflet-fullscreen/dist/styles.css'

import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const state = {
    lat: -6.161184,
    lng: 35.745426,
    zoom: 6,
}
const position = [state.lat, state.lng]


const BaseMap = ({children, zoomControl}) => {

    return (
        <Map center={position} zoom={state.zoom} className="base-map"  zoomControl={zoomControl}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
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
