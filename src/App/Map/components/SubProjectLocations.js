import React, {Component} from 'react';
import {GeoJSON, Marker, Popup, withLeaflet} from "react-leaflet";
import L from "leaflet";
import Spiderfy from "./Spiderfy";
import {Button} from "antd";

/**
 * @function
 * @name mapSubProjectElementsToLocationPoints
 * @description generate points from su project elements
 */
const mapSubProjectElementsToLocationPoints = ({name, sub_project_locations}) => {
        return sub_project_locations.map(
            ({point, id, layer_name }) => ({coordinates: point.coordinates, id, name, layer_name }))
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

    handleShowLayer = layer_name => {
        this.props.getWfsLayerData(layer_name);
        localStorage.setItem('subProjectLayerName', layer_name);
    }


    renderSubProjectElements = (subProjectElements) => {
        const data = mapSubProjectElementsToLocationPoints(subProjectElements);
        return data.map(({coordinates, id, name, layer_name }) => (
                <Marker position={[coordinates[1], coordinates[0]]} key={id}>
                    <Popup>
                        <h3>Sub Project</h3>
                        <div> { name }</div>
                        {
                            layer_name ? <Button
                                type="primary"
                                onClick={() => this.handleShowLayer(layer_name)}
                            >
                                Show Sub project Layer
                            </Button> : ''
                        }
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
        console.log('sub projects', subProject);

        return subProject ? (
            <>
                {this.renderDistricts(subProject)}
                <Spiderfy>
                    {this.renderSubProjectElements(subProject)}
                </Spiderfy>
                </>
        ) : '';
    }
}

export default withLeaflet(SubProjectLocations);
