import React from 'react';
import { TileLayer,LayersControl } from 'react-leaflet';

const LayerControl = () => {
    return (
        <LayersControl position="topright">
            <LayersControl.BaseLayer name="OpenStreetMap Standard" checked>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </LayersControl.BaseLayer>
            <LayersControl.BaseLayer name="OpenStreetMap Black and White">
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
                />
            </LayersControl.BaseLayer>

            <LayersControl.BaseLayer name="Humanitarian">
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="http://b.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png	"
                />
            </LayersControl.BaseLayer>
            
        </LayersControl>
    )
}

export default LayerControl