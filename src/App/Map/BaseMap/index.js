import React from 'react';
import PropTypes from "prop-types";
import {Map, TileLayer} from 'react-leaflet';
import "./styles.css";
import 'leaflet/dist/leaflet.css';

import L from 'leaflet';
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const accessToken = 'pk.eyJ1IjoibWxvd2VlZGdhciIsImEiOiJjaWxqZXh4ZTAwMDl4dzhsend0a2cxY3JqIn0.KtlMeVuCRdoDod0giDBAdQ'
const state = {
    lat: -6.161184,
    lng: 35.745426,
    zoom: 7,
}
const position = [state.lat, state.lng]

const BaseMap = React.forwardRef((props, ref) => (

    <Map center={position} zoom={state.zoom} className="base-map" ref={ref} zoomControl={props.zoomControl}>
        <TileLayer
            attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
            url="https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}"
            maxZoom={18}
            id='mapbox/streets-v11'
            tileSize={512}
            zoomOffset={-1}
            accessToken={accessToken}
        />
        {props.children}
    </Map>
));

export default BaseMap;

BaseMap.propTypes = {
    zoomControl: PropTypes.bool
}

BaseMap.defaultProps = {
    zoomControl: true
}
