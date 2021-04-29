import { withLeaflet, Popup, Marker } from "react-leaflet";
import { divIcon } from 'leaflet';
import React, { Component } from "react";
import PropTypes from 'prop-types';
import Spiderfy from "./Spiderfy";
import * as turf from '@turf/turf';
import MapPopupDetail from "./PopupDetails";
import randomColor from 'randomcolor';
import { invertColor, moneyFormatWithApproximation } from "../../../Util";


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

    getMarkerDiameter = (amount, maxAmount, maxDiameter = 80, minDiameter = 40) => {
        const diameter = amount * maxDiameter / maxAmount;
        if (diameter > minDiameter ) return diameter;
        return minDiameter;
    }

    getMaxAmount = (projects) => {
        const commitment_amounts = projects.map(({ details: { commitment_amount } }) => commitment_amount.amount);
        return Math.max(...commitment_amounts);
    }

    render() {

        const { projects, project, loading } = this.props;

        return (
            <Spiderfy
            >
                { projects.map(({ regions, id, details }) => {

                    const { commitment_amount } = details;
                    const { amount } = commitment_amount;
                    const commitment_money = moneyFormatWithApproximation(amount)
                    // const total_money = moneyFormat(total_project_cost.amount)
                    const maxAmount = this.getMaxAmount(projects);
                    console.log("maximum value", maxAmount)
                    const dimension = this.getMarkerDiameter(amount, maxAmount);

                    return regions.length > 0 ? regions.map((region) => {
                        const polygon = JSON.parse(region.geom);
                        const { geometry } = turf.pointOnFeature(polygon);
                        const color = randomColor();
                        const invertedColor = invertColor(color);

                        const customizedIcon = divIcon({
                            className: 'customizedIcon',
                            html: `<div 
                            style='background-color:${color}; 
                            width: ${dimension}px ;
                            height: ${dimension}px;' 
                            class='marker-pin'>
                            </div>
                            <h4 style='color: ${invertedColor};
                            top: ${dimension / 2}px;
                            left: ${dimension / 2}px;
                            font-size: ${dimension/4}px
                            '
                            > 
                            ${commitment_money}
                            </h4>`,
                            iconSize: [dimension, 42],
                            iconAnchor: [0, 0]
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
