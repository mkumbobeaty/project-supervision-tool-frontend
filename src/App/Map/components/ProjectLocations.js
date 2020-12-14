
import React, {Component} from 'react';
import * as turf from '@turf/turf'
import {Marker, Popup, withLeaflet} from "react-leaflet";
import L from "leaflet";

class ProjectLocations extends Component{

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (((prevProps.project !== this.props.project) && this.props.project)){
            const { map } = this.props.leaflet;
            map.setView(L.latLng(-6.161184, 35.745426), 6);
        }
    }

    renderRegions = (project) => project?.locations.map(({ region, id }) => {
        const pointOnRegion = turf.pointOnFeature({
            "type": "Feature",
            "geometry": region.geom,
        });
        console.log('looking at region', region);
        console.log('looking at poit on region', pointOnRegion);
        const geometry = pointOnRegion?.geometry;

        return '';
    })

    render () {
const { project } = this.props;

    return project ? (<>{this.renderRegions(project)}</>) : '';
}
}

export default withLeaflet(ProjectLocations);
