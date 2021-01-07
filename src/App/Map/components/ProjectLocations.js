
import React, {Component} from 'react';
import {GeoJSON, Marker, Popup, withLeaflet} from "react-leaflet";
import L from "leaflet";
import Spiderfy from "./Spiderfy";


/**
 * @function
 * @name mapSubProjectsToLocationPoints
 * @description generate points from su project elements
 */
const mapSubProjectsToLocationPoints = subProjects => {
    const pointsSubArray = subProjects.map(
        ({sub_project_locations, name}) => sub_project_locations.map(
            ({point, id}) => ({coordinates: point.coordinates, id, name})));
    return pointsSubArray.flat();
}

/**
 * @class
 * @name ProjectLocations
 * @description component that renders project polygons and on top of project polygons  it
 * renders sub projects as marker  points
 */
class ProjectLocations extends Component{

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (((prevProps.project !== this.props.project) && this.props.project)){
            const { map } = this.props.leaflet;
            map.setView(L.latLng(-6.161184, 35.745426), 6);
        }
    }


    renderSubProjects = (subProjects) => {
        const data = mapSubProjectsToLocationPoints(subProjects);
        return data.map(({coordinates, id, name }) => (
            <Marker position={[coordinates[1], coordinates[0]]} key={id}>
                <Popup>
                    <h3>Sub Project </h3>
                    <div> { name }</div>
                </Popup>
            </Marker>
        ));
    }

    renderRegions = (project) => project?.locations.map(({ region, id }) => {


        const geojsonFeature = {
            "type": "Feature",
            "geometry": JSON.parse(region.geom)
        };

        return (
            <GeoJSON key={id} data={geojsonFeature}>
                <Popup>
                    <div><b>Project :</b> { project.name}</div>
                    <div><b>Region :</b> { region.name}</div>
                </Popup>
            </GeoJSON>
        );
    })

    render () {
const { project } = this.props;

    return project ? (
        <>
            {this.renderRegions(project)}
            <Spiderfy>
                { this.renderSubProjects(project.sub_projects)}
            </Spiderfy>
        </>
    ) : '';
}
}

export default withLeaflet(ProjectLocations);
