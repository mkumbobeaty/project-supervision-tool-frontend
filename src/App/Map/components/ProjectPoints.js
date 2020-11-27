import { withLeaflet, GeoJSON } from "react-leaflet";
import * as turf from '@turf/turf'
import React, {Component} from "react";
import PropTypes from 'prop-types';

class ProjectPoints extends Component{

    static propTypes = {
        data: PropTypes.object.isRequired
    }

    generateProjectMarkers = () => {
        const {regionDetails} = this.props;
        if (regionDetails.geom) {
            console.log('look at geom', regionDetails.geom);
            const feature = {
                "type": "Feature",
                "geometry": regionDetails?.geom,
            }
            const point1 = turf.pointOnFeature(feature);
            const point2 = turf.pointOnFeature(feature);
            console.log('point1', point1);
            console.log('point2', point2);
        }
    }
    onEachFeature = (feature, layer) => {
        const { map } = this.props.leaflet;
        console.log('on each feature  inside ProjectPoints')
    }

    render() {
        const data = this.generateProjectMarkers();
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


export default withLeaflet(ProjectPoints);
