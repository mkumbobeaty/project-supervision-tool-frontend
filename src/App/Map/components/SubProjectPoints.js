
import { Marker, useMapEvents, GeoJSON, Popup } from "react-leaflet";
import React, { useState } from "react";
import PropTypes from 'prop-types';
import {reproject} from 'reproject';
import epsg from 'epsg'
import * as turf from '@turf/turf';
import SubProjectPopupDetail from "./SubProjectPopup";

function SubProjectPoints({ subProjects, getSubproject, subProjectLoading, subProject, project }) {
    const [zoomLevel, setZoomLevel] = useState(0);

    const map = useMapEvents({
        zoom() {
            setZoomLevel(map.getZoom());
        }
    });
    const handlePopup = (id) => {
        getSubproject(id);
    };


    return (
        <>
            { subProjects.map((subProject) => {
                const { name, id } = subProject;
                const geo_json = subProject.geo_json.id === 'ref_roads_merge.18868' ? subProject.geo_json : reproject(subProject.geo_json, 'EPSG:21037', 'EPSG:4326', epsg);
                const polygon = geo_json.geometry;
                const { geometry } = turf.pointOnFeature(polygon);

                return (
                    <div>
                        {
                            zoomLevel < 12 ? <Marker
                                position={[geometry.coordinates[1], geometry.coordinates[0]]}
                                title={name}
                                key={`${id}-point`}
                                eventHandlers={{
                                    click: () => {
                                        map.setView([geometry.coordinates[1], geometry.coordinates[0]], 16);
                                    },
                                }}
                            /> : <GeoJSON
                                key={`${id}-polygon`}
                                style={{ weight: 10 }}
                                data={geo_json}
                                eventHandlers={{ click: () => handlePopup(id) }}
                            >
                                    <Popup>
                                        <SubProjectPopupDetail subProject={subProject} project={project} subProjectLoading={subProjectLoading} />
                                    </Popup>
                                </GeoJSON>
                        }
                    </div>
                );

            })}
        </>);

}


export default SubProjectPoints;

SubProjectPoints.propTypes = {
    subProjects: PropTypes.array.isRequired,
}
