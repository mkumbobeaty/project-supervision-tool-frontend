import { withLeaflet } from "react-leaflet";


import React, {Component} from "react";
import PropTypes from 'prop-types';
import {GeoJSON} from "react-leaflet";

class RegionDetailsGeoJson extends Component{

    static propTypes = {
        data: PropTypes.object.isRequired
    }

    onEachFeature = (feature, layer) => {
        const { map } = this.props.leaflet;
        map.fitBounds(layer.getBounds());
    }

    render() {
        const { data } = this.props;
        const geoJsonObject= {
            "type": "Feature",
            "geometry": data?.geom,
        }

        return data?.geom ? <GeoJSON
            data={geoJsonObject}
            style={{ "opacity": 0.5, "fillOpacity": 0.05, "weight": 1 }}
            onEachFeature={this.onEachFeature}
        /> : '';
    }
}


export default withLeaflet(RegionDetailsGeoJson);
