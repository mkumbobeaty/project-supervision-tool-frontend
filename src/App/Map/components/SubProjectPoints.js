
import { Popup, Marker } from "react-leaflet";
import { divIcon } from 'leaflet';
import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import * as turf from '@turf/turf';
import FieldNotePoints from "./FieldNotePoints";

class SubProjectPoints extends Component {

    static propTypes = {
        subProjects: PropTypes.array.isRequired,
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

    render() {
        const { subProjects } = this.props;
       
        return (
            <>
                { subProjects.map(({ districts,name,id }) => {
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
                            >
                                <Popup>
                                    <section className="mapPopup">
                                        <div><h3>{name}</h3></div>
                                        </section>
                                    <Link to="/app/map">View project</Link>
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
