import React, {Component} from 'react';
import L from 'leaflet';
import {GeoJSON} from 'react-leaflet';
import "./styles.css";
import BaseMap from "../../../Map/BaseMap";
import {getGeoJsonFromLocation} from '../../../../Util';

class PreviewInitiativeOnMap extends  Component {
    state = {
        lat: -6.161184,
        lng: 35.745426,
        zoom: 7,
    }

    constructor(props) {
        super(props);
        this.map = React.createRef();
        this.geoJson = React.createRef();
    }

    zoomToSelectedInitiative() {
        const map = this.map.current.leafletElement;
        map.on('layeradd', ({layer}) => {
            if (layer instanceof L.GeoJSON){
                map.fitBounds(layer.getBounds());
            }
        });
    }

    componentDidMount() {
        this.zoomToSelectedInitiative();
    }

    render() {
        const { initiative } = this.props;
        const geo_json = getGeoJsonFromLocation(initiative);

        return (
        <BaseMap ref={this.map}>
            <GeoJSON ref={this.geoJson} data={geo_json}/>
        </BaseMap>
           )
    }
}


export default PreviewInitiativeOnMap;
