import {withLeaflet, Popup, Marker} from "react-leaflet";
import * as turf from '@turf/turf'
import React, {Component} from "react";
import PropTypes from 'prop-types';
import Spiderfy from "./Spiderfy";
import {Link} from "react-router-dom";

class ProjectPoints extends Component {

    static propTypes = {
        regionProjects: PropTypes.array.isRequired,
        regionDetails: PropTypes.object.isRequired,
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

    generateRegionProjectsGeojsonPoints = () => {
        const {regionProjects, regionDetails } = this.props;


        const regionLocations = regionProjects.map(({ locations, id, name}) => {

             return locations.map(({region, point}) => ({
                type: "Feature",
                properties: {
                    regionId: region.id,
                    regionName: region.name,
                    key: `${id}${region.id}`,
                    name
                },
                geometry: point
            }));
        }).flat();

        return regionLocations.filter(({properties}) => properties.regionId === regionDetails.id);

    }


    render() {

        const data = this.generateRegionProjectsGeojsonPoints();
        return (
            <Spiderfy
                onClick={this.handleSpiderfyClick}
                onSpiderfy={this.handleSpiderfy}
                onUnspiderfy={this.handleUnspiderfy}
            >
                { data.map( ({ geometry, properties }) => {
                    console.log(geometry.coordinates);
                    return (
                        <Marker
                            position={[geometry.coordinates[1], geometry.coordinates[0]]}
                            title={properties.regionName}
                            key={properties.key}
                        >
                            <Popup>
                                <div><b>Region name:</b> { properties.regionName}</div>
                                <div><b>Project name:</b> { properties.name}</div>
                                <Link to="/app/map">View project</Link>
                            </Popup>
                        </Marker>
                    );
                })}
            </Spiderfy>);
    }
}


export default withLeaflet(ProjectPoints);
