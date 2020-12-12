import {withLeaflet, GeoJSON, Tooltip, Popup, Marker} from "react-leaflet";
import * as turf from '@turf/turf'
import React, {Component} from "react";
import PropTypes from 'prop-types';
import Spiderfy from "./Spiderfy";
import {Link} from "react-router-dom";

class ProjectPoints extends Component {

    static propTypes = {
        data: PropTypes.object.isRequired
    }

    componentDidMount() {
        console.log(' ProjectPoints mounted');
    }

    handleSpiderfyClick = marker => {
        console.log(marker);
    };

    handleSpiderfy = markers => {
        console.log(markers);
    };

    handleUnspiderfy = markers => {
        console.log(markers);
    };

    generateProjectMarkers = (regionProjects) => {
        const {regionDetails} = this.props;
        if (!regionDetails) return [];
        const regionId = regionDetails.id;
        return regionProjects.map(regionProject => {
            const {locations} = regionProject;
            return locations.map(location => {

                const pointOnDistrict = turf.pointOnFeature({
                    "type": "Feature",
                    "geometry": location?.district.geom,
                });


                return {
                    ...pointOnDistrict, "properties": {
                        "name": regionProject.name,
                        "description": regionProject.description,
                        "districtId": location?.district.id,
                        "key": `${regionProject.id}-${location?.district.id}`,
                        "regionId": location?.district.region_id,
                        "districtName": location?.district.name,
                        "projectId": regionProject.id,
                    }
                };
            });
        }).flat().filter(p => p.properties.regionId === regionId);
    }



    render() {
        const {regionProjects} = this.props;
        const data = regionProjects.length > 0 ? this.generateProjectMarkers(regionProjects) : '';
        return data.length > 0 ? (
            <Spiderfy
                onClick={this.handleSpiderfyClick}
                onSpiderfy={this.handleSpiderfy}
                onUnspiderfy={this.handleUnspiderfy}
            >
                { data.map( ({ geometry, properties }) => {
                    return (
                        <Marker
                            position={geometry.coordinates.reverse()}
                            title={properties.districtName}
                            key={properties.key}
                        >
                            <Popup>
                                <div><b>District name:</b> { properties.districtName}</div>
                                <div><b>Project name:</b> { properties.name}</div>
                                <Link to="/app/map">View project</Link>
                            </Popup>
                        </Marker>
                    );
                })}
            </Spiderfy>) : '';
    }
}


export default withLeaflet(ProjectPoints);
