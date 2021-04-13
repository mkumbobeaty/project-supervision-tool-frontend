import { withLeaflet, Popup, Marker } from "react-leaflet";
import { divIcon } from 'leaflet';
import React, { Component } from "react";
import PropTypes from 'prop-types';
import Spiderfy from "./Spiderfy";
import * as turf from '@turf/turf';
import MapPopupDetail from "./PopupDetails";

class ProjectPoints extends Component {

    static propTypes = {
        projects: PropTypes.array.isRequired,
        projects: PropTypes.object.isRequired,

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

    handleProjectPopup = (project_id) => {
        const { getProject } = this.props;
        getProject(project_id);
    };

    render() {

        const { projects, project, loading } = this.props;

        return (
            <Spiderfy
                onClick={this.handleSpiderfyClick}
                onSpiderfy={this.handleSpiderfy}
                onUnspiderfy={this.handleUnspiderfy}
            >
                { projects.map(({ regions, id }) => {
                    return regions.length > 0 ? regions.map((region) => {
                        const polygon = JSON.parse(region.geom);
                        const { geometry } = turf.pointOnFeature(polygon);

                        const customizedIcon = divIcon({ className: 'customizedIcon' });

                        return (
                            <Marker
                                position={[geometry.coordinates[1], geometry.coordinates[0]]}
                                title={region.name}
                                key={region.id}
                                icon={customizedIcon}
                                onClick={() => this.handleProjectPopup(id)}
                            >
                                <Popup>
                                    <MapPopupDetail project={project} loading={loading} />
                                    
                                </Popup>
                            </Marker>
                        );
                    }) : '';

                })}
            </Spiderfy>);
    }
}


export default withLeaflet(ProjectPoints);
