import React from 'react';
import PropTypes from "prop-types";
import {MapContainer, ZoomControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-fullscreen/dist/Leaflet.fullscreen.min';
import 'leaflet-fullscreen/dist/leaflet.fullscreen.css';
import 'leaflet-basemaps/L.Control.Basemaps-min';
import 'leaflet-basemaps/L.Control.Basemaps.css';
import L from 'leaflet';
import "./styles.css";
import BaseMapSwitcher from "./components/BaseMapSwitcher";
import LayerControl from "../LayerControl";
import ControlBar from "./components/ControlBar";

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



// const position = [state.lat, state.lng]

const BaseMap = ({children, position}) => {

    return (
        <MapContainer center={position} fullscreenControl={{ position: 'topright'}} zoom={state.zoom} className="base-map" zoomControl={false} >
            <LayerControl />
            <BaseMapSwitcher />
            <ControlBar />
            {children}
        </MapContainer>
    )
}

export default BaseMap;

BaseMap.propTypes = {
    zoomControl: PropTypes.bool,
    projects: PropTypes.array.isRequired
}

BaseMap.defaultProps = {
    zoomControl: true
}