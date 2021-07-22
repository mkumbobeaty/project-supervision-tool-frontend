import React, {useEffect} from "react";
import PropTypes from "prop-types";
import L from 'leaflet';
import './L.Control.ZoomBar';
import './L.Control.ZoomBar.css';
import {useMap} from "react-leaflet";

function ControlBar({position}) {
    const map = useMap();
    useEffect(() => {
        new L.Control.ZoomBar({position}).addTo(map);
    }, []);
    return null;
}

export default ControlBar;

ControlBar.propTypes = {
    position: PropTypes.string.isRequired,
}
