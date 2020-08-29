

import React, {Component} from 'react';
import {GeoJSON} from 'react-leaflet';
import {getGeoJsonFromLocation} from '../../Util';
import "./styles.css";
import BaseMap from "./BaseMap";
import SideMenu from "./components/SideMenu";


class MapDashboard extends  Component {
    state = {
        lat: -6.161184,
        lng: 35.745426,
        zoom: 7,
    }

    constructor(props) {
        super(props);
        this.map = React.createRef();
    }

    render() {

        return (
            <div className="MapDashboard">
                <SideMenu/>
                <BaseMap ref={this.map} zoomControl={false}>
                </BaseMap>
            </div>

        )
    }
}


export default MapDashboard;

