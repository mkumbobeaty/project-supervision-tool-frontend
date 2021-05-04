import { Popup, Marker } from "react-leaflet";
import { divIcon } from 'leaflet';
import React from "react";
import PropTypes from 'prop-types';
import * as turf from '@turf/turf';
import MapPopupDetail from "./PopupDetails";
import randomColor from 'randomcolor';
import { invertColor, moneyFormatWithApproximation } from "../../../Util";


function ProjectPoints ({ projects, project, loading, getProject }) {

    const handleProjectPopup = (project_id) => {
        getProject(project_id);
    };

    const getMarkerDiameter = (amount, maxAmount, maxDiameter = 80, minDiameter = 40) => {
        const diameter = amount * maxDiameter / maxAmount;
        if (diameter > minDiameter) return diameter;
        return minDiameter;
    }

    const getMaxAmount = (projects) => {
        const commitment_amounts = projects.map(({ details: { commitment_amount } }) => commitment_amount.amount);
        return Math.max(...commitment_amounts);
    }

    return (
        <>
            { projects.map(({ regions, id, details }) => {

                // color generated for projects
                const color = randomColor();
                const invertedColor = invertColor(color);

                // dimesion required for displaying markers
                const { commitment_amount } = details;
                const { amount } = commitment_amount;
                const commitment_money = moneyFormatWithApproximation(amount)
                const maxAmount = getMaxAmount(projects);
                const dimension = getMarkerDiameter(amount, maxAmount);

                return regions.length > 0 ? regions.map((region) => {
                    const polygon = JSON.parse(region.geom);
                    const { geometry } = turf.pointOnFeature(polygon);

                    const customizedIcon = divIcon({
                        className: 'customizedIcon',
                        html: `<div  style='background-color:${color}; width: ${dimension}px ;height: ${dimension}px;' class='marker-pin'>
                            </div>
                            <h4 style='color: ${invertedColor}; top: ${dimension / 2}px; left: ${dimension / 2}px; font-size: ${dimension / 4}px'> 
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
                            onClick={() => handleProjectPopup(id)}
                        >
                            <Popup>
                                <MapPopupDetail project={project} loading={loading} />
                            </Popup>
                        </Marker>
                    );
                }) : '';

            })}
        </>);
}


export default ProjectPoints;

ProjectPoints.propTypes = {
    projects: PropTypes.array.isRequired,
    project: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    getProject: PropTypes.func,
}
