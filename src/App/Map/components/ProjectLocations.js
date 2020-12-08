
import React, {Component} from 'react';
import {GeoJSON, withLeaflet } from "react-leaflet";
import L from "leaflet";

class ProjectLocations extends Component{

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (((prevProps.project !== this.props.project) && this.props.project)){
            const { map } = this.props.leaflet;
            map.setView(L.latLng(-6.161184, 35.745426), 7);
        }
    }
    render () {
const { project } = this.props;

    const renderRegions = project?.locations.map(({ region, id }) => {
        console.log('region', region);
        return <GeoJSON key={id} data={{ type: 'Feature', geometry: region.geom}}/>
    })
    return project ? (<>{renderRegions}</>) : '';
}
}

export default withLeaflet(ProjectLocations);
