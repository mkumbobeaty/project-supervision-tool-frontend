
import { Popup, Marker } from "react-leaflet";
import { divIcon } from 'leaflet';
import React, { Component } from "react";
import PropTypes from 'prop-types';
import * as turf from '@turf/turf';
import FieldNotePoints from "./FieldNotePoints";
import SubProjectPopupDetail from "./SubProjectPopup";

class SubProjectPoints extends Component {

    static propTypes = {
        subProjects: PropTypes.array.isRequired,
        subProjectLoading: PropTypes.bool.isRequired,
        project:PropTypes.object.isRequired,
        subProject: PropTypes.object.isRequired,
        getSubproject:PropTypes.func.isRequired
    }

    render() {
        const { subProjects, getSubproject, project, subProject, subProjectLoading } = this.props;

        const handlePopup = (id) => {
            getSubproject(id);
        };

        return (
            <>
                { subProjects.map(({ districts, name, id }) => {
                    return districts.length > 0 ? districts.map((district) => {
                        const polygon = JSON.parse(district.geom);
                        const { geometry } = turf.pointOnFeature(polygon);

                        var customizedIcon = divIcon({
                            className: 'custom-div-icon',
                            html: `<div style='background-color:#4838cc;' 
                        class='marker-pin-sub'></div>
                        `,
                            iconSize: [30, 42]
                        });

                        return (
                            <div>
                                <Marker
                                    position={[geometry.coordinates[1], geometry.coordinates[0]]}
                                    title={name}
                                    key={id}
                                    icon={customizedIcon}
                                    eventHandlers={{ click: () => handlePopup(id) }}

                                >
                                    <Popup>
                                        <SubProjectPopupDetail subProject={subProject} project={project} subProjectLoading={subProjectLoading} />
                                    </Popup>
                                </Marker>
                                <FieldNotePoints />
                            </div>
                        );
                    }) : '';

                })}
            </>);
    }
}


export default SubProjectPoints;
