
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
        const { geometry: { coordinates } } = pointOnRegion;

        return (
            <Marker key={id} position={coordinates.reverse()}>
                <Popup>
                    <div><b>Project :</b> { project.name}</div>
                    <div><b>Region :</b> { region.name}</div>
                </Popup>
            </Marker>
        );
    })

    render () {
const { project } = this.props;

    return project ? (<>{this.renderRegions(project)}</>) : '';
}
}

export default withLeaflet(ProjectLocations);
