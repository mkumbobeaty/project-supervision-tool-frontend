import { withLeaflet, Popup, Marker } from "react-leaflet";
import { divIcon } from 'leaflet';
import React, { Component } from "react";
import PropTypes from 'prop-types';
import Spiderfy from "./Spiderfy";
import * as turf from '@turf/turf';
import MapPopupDetail from "./PopupDetails";
import randomColor from 'randomcolor';

    
class ProjectPoints extends Component {

    static propTypes = {
        projects: PropTypes.array.isRequired,
        project: PropTypes.object.isRequired,
        loading: PropTypes.bool.isRequired,
        getProject: PropTypes.func,
    }


    handleProjectPopup = (project_id) => {
        const { getProject } = this.props;
        getProject(project_id);
    };
    

    render() {

        const { projects, project, loading } = this.props;
        const size =  [
            {width: '80', height: '80', id: "P123134"},
            {width: '40', height: '40', id: "P171189"},
            {width: '20', height: '20', id: "P165128"}
    ]

        return (
            <Spiderfy
            >
                { projects.map(({ regions, id }) => {
                    return regions.length > 0 ? regions.map((region) => {
                        const polygon = JSON.parse(region.geom);
                        const { geometry } = turf.pointOnFeature(polygon);
                        console.log(projects)
                        
                        const customizedIcon = divIcon({
                            className: 'customizedIcon',
                            html: `<div 
                            style='background-color:${randomColor()}; 
                            width: ${size.width}px ;
                            height: ${size.height}px;' 
                            class='marker-pin'>
                            </div><h4> ${projects.length}</h4>`,
                            iconSize: [30, 42],
                            iconAnchor: [15, 42]
                        });

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
