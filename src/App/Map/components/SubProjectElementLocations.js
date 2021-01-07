import React, {Component} from 'react';
import {Marker, Popup, withLeaflet} from "react-leaflet";
import L from "leaflet";
import Spiderfy from "./Spiderfy";

/**
 * @class
 * @name SubProjectLocations
 * @description component that renders sub project element on map
 */
class SubProjectElementLocations extends Component {

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (((prevProps.subProjectElement !== this.props.subProjectElement) && this.props.subProjectElement)) {
            const {map} = this.props.leaflet;
            map.setView(L.latLng(-6.161184, 35.745426), 6);
        }
    }


    renderSubProjectElements = ({ locations, name }) => {
        return locations.map(({point, id }) => (
            <Marker position={[point.coordinates[1], point.coordinates[0]]} key={id}>
                <Popup>
                    <h3>Sub Project Element</h3>
                    <div> { name }</div>
                </Popup>
            </Marker>
        ));
    }

    render() {
        const {subProjectElement} = this.props;

        return subProjectElement ? (
            <>
                <Spiderfy>
                    {this.renderSubProjectElements(subProjectElement)}
                </Spiderfy>
            </>
        ) : '';
    }
}

export default withLeaflet(SubProjectElementLocations);
