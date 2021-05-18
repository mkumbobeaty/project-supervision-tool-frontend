
import React, {useEffect} from 'react';

import L from "leaflet";
import {useMap} from "react-leaflet";



const BASE_MAPS = [

    L.tileLayer('//tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        label: 'OpenStreetMap Black and White'  // optional label used for tooltip
    }),
    L.tileLayer('//{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        label: 'OpenStreetMap Standard'  // optional label used for tooltip
    }),
    L.tileLayer('//mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
        label: 'Google Satellite'
    })
];

function BaseMapSwitcher() {

    const map = useMap();
    const renderBaseMapSwitcher = () => {
        map.addControl(L.control.basemaps({
            basemaps: BASE_MAPS,
            position: "bottomleft",
            tileX: 0,  // tile X coordinate
            tileY: 0,  // tile Y coordinate
            tileZ: 1 ,  // tile zoom level,
            basemap: [2]
        }));
    }
    useEffect(() => {
        renderBaseMapSwitcher();

        return () => {
            map.eachLayer(function (layer) {
                map.removeLayer(layer);
            });
        }

    }, []);

    return '';
}

export default BaseMapSwitcher;
