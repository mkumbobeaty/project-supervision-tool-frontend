import React, {Component} from 'react';
import {GeoJSON, Marker, Popup, withLeaflet} from "react-leaflet";
import L from "leaflet";
import Spiderfy from "./Spiderfy";

/**
 * @function
 * @name mapSubProjectElementsToLocationPoints
 * @description generate points from su project elements
 */
const mapSubProjectElementsToLocationPoints = subProjectElements => {
    const pointsSubArray = subProjectElements.map(
        ({locations, name}) => locations.map(
            ({point, id}) => ({coordinates: point.coordinates, id, name})));
    return pointsSubArray.flat();
}

/**
 * @class
 * @name SubProjectLocations
 * @description component that renders sub project locations as polygons on map with
 *  sub project elements as marker points on top of those polygons
 */
class SubProjectLocations extends Component {

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (((prevProps.subProject !== this.props.subProject) && this.props.subProject)) {
            const {map} = this.props.leaflet;
            map.setView(L.latLng(-6.161184, 35.745426), 6);
        }
    }


    renderSubProjectElements = (subProjectElements) => {
        const data = mapSubProjectElementsToLocationPoints(subProjectElements);
        debugger;
        return data.map(({coordinates, id, name }) => (
                <Marker position={[coordinates[1], coordinates[0]]}>
                    <Popup>
                        <div> { name }</div>
                    </Popup>
                </Marker>
        ));
    }

    renderDistricts = (subProject) => subProject?.sub_project_locations.map(({district, id}) => {

        return (
            <GeoJSON key={id} data={district.geom}>
                <Popup>
                    <div><b>SubProject :</b> {subProject.name}</div>
                    <div><b>District :</b> {district.name}</div>
                </Popup>
            </GeoJSON>
        );
    })

    render() {
        const {subProject} = this.props;

        return subProject ? (
            <>
                {this.renderDistricts(subProject)}
                <Spiderfy>
                    {this.renderSubProjectElements(subProject.sub_project_items)}
                </Spiderfy>
                </>
        ) : '';
    }
}

export default withLeaflet(SubProjectLocations);
