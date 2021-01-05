
import React, {Component} from 'react';
import {GeoJSON, Popup, withLeaflet} from "react-leaflet";
import L from "leaflet";

class SubProjectLocations extends Component{

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (((prevProps.subProject !== this.props.subProject) && this.props.subProject)){
            const { map } = this.props.leaflet;
            map.setView(L.latLng(-6.161184, 35.745426), 6);
        }
    }

    renderDistricts = (subProject) => subProject?.sub_project_locations.map(({ district, id }) => {

        return (
            <GeoJSON key={id} data={district.geom}>
                <Popup>
                    <div><b>SubProject :</b> { subProject.name}</div>
                    <div><b>District :</b> { district.name}</div>
                </Popup>
            </GeoJSON>
        );
    })

    render () {
        const { subProject } = this.props;

        return subProject ? (<>{this.renderDistricts(subProject)}</>) : '';
    }
}

export default withLeaflet(SubProjectLocations);
