
import {Marker, useMapEvents, GeoJSON} from "react-leaflet";
import React, { useState } from "react";
import PropTypes from 'prop-types';
import * as turf from '@turf/turf';

function SubProjectPoints({ subProjects }) {
    const [zoomLevel, setZoomLevel ] = useState(0);

    const  map = useMapEvents({
        zoom(){
            setZoomLevel(map.getZoom());
        }
    });
    map.on('')


    return (
        <>
            { subProjects.map(({ geo_json, name, id }) =>  {
                const polygon = geo_json.geometry;
                const { geometry } = turf.pointOnFeature(polygon);

                return (
                    <div>
                        {
                            zoomLevel < 15 ? <Marker
                                position={[geometry.coordinates[1], geometry.coordinates[0]]}
                                title={name}
                                key={`${id}-point`}
                                eventHandlers={{
                                    click: () => {
                                        map.setView([geometry.coordinates[1], geometry.coordinates[0]], 16);
                                    },
                                }}
                            /> : <GeoJSON key={`${id}-polygon`} style={{ weight: 10}} data={geo_json} />
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
