import React, {useEffect} from "react";
import L from 'leaflet';
import './L.Control.ZoomBar';
import './L.Control.ZoomBar.css';
import {useMap} from "react-leaflet";

function ControlBar() {
    const map = useMap();
    useEffect(() => {
        new L.Control.ZoomBar({position: 'topright'}).addTo(map);
    }, []);
    return null;
}

export default ControlBar;
