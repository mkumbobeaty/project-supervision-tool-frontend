import { withLeaflet, Popup, Marker } from "react-leaflet";
import { divIcon } from 'leaflet';
import React, { Component } from "react";
import PropTypes from 'prop-types';
import Spiderfy from "./Spiderfy";
import { Link } from "react-router-dom";
import * as turf from '@turf/turf';

import { isoDateToHumanReadableDate, moneyFormat } from "../../../Util";

class ProjectPoints extends Component {

    static propTypes = {
        projects: PropTypes.array.isRequired,
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
        const { projects } = this.props;

        return (
            <Spiderfy
                onClick={this.handleSpiderfyClick}
                onSpiderfy={this.handleSpiderfy}
                onUnspiderfy={this.handleUnspiderfy}
            >
                { projects.map(({ regions }) => {
                    return regions.length > 0 ? regions.map((region) => {
                        const polygon = JSON.parse(region.geom);
                        const { geometry } = turf.pointOnFeature(polygon);

                        var customizedIcon = divIcon({ className: 'customizedIcon' });

                        return (
                            <Marker
                                position={[geometry.coordinates[1], geometry.coordinates[0]]}
                                title={region.name}
                                key={region.id}
                                icon={customizedIcon}
                            >
                                <Popup>
                                    <section className="mapPopup">
                                        <div>                                        <h3>{region?.name}</h3>
                                        </div>
                                        <hr />
                                        <div className="projectDetail">
                                            <span>
                                                <h4>World Bank Project ID</h4>
                                                <p>{region ? region?.id : 'N/A'}</p>
                                            </span>
                                            <div className="timeFrame">
                                                <span>
                                                    <h4>Start Date</h4>
                                                    <p>{region?.details ? isoDateToHumanReadableDate(region?.details?.approval_date) : 'N/A'}</p>
                                                </span>
                                                <span>
                                                    <h4>Last updated</h4>
                                                    <p>{region?.details ? isoDateToHumanReadableDate(region?.details?.closing_date) : 'N/A'}</p>
                                                </span>
                                            </div>
                                            <span>
                                                <h4>Implementing Agency</h4>
                                                <p>{region?.details ? region?.details.implementing_agency.name : 'N/A'}</p>
                                            </span>
                                            {/* <span>
                                            <h4>region Total Cost</h4>
                                            <p>{totalProjectCost}</p>
                                        </span>
                                        <span>
                                            <h4>Commitment Amount</h4>
                                            <p>{commitmentAmount}</p>
                                        </span> */}
                                        </div>
                                    </section>
                                    <Link to="/app/map">View project</Link>
                                </Popup>
                            </Marker>
                        );
                    }) : '';

                })}
            </Spiderfy>);
    }
}


export default withLeaflet(ProjectPoints);
