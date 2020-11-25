
import React from 'react';
import {GeoJSON, Tooltip} from "react-leaflet";
import {generateColor, generateNumberRange} from "../../../Util";
import Legend from "./Legend";

function RegionsGeoJson({ getProjectsByRegion,projectsOverview }) {

    const getColor = (numberRange, projects_count) => {
        if (projects_count <= numberRange[1]) return generateColor(0);
        if (projects_count < numberRange[2] && projects_count > numberRange[1]) return generateColor(1);
        if (projects_count < numberRange[3] && projects_count > numberRange[2]) return generateColor(2);
        if (projects_count < numberRange[4] && projects_count > numberRange[3]) return generateColor(3);
        if (projects_count < numberRange[5] && projects_count > numberRange[4]) return generateColor(4);
        if (projects_count > numberRange[5] ) return generateColor(5);

    }

    const handleOnClickGeojson = ({properties}) => getProjectsByRegion(properties.id);

    const onEachFeature = (feature, layer) =>  layer.on({ click: () => handleOnClickGeojson(feature)});

    const renderProjectsOverview = (data) => data.map(({geometry,id, region_name, projects_count}) => {
        const geoJsonObject= {
            "type": "Feature",
            "geometry": {
                "type": geometry.type,
                "coordinates": geometry.coordinates
            },
            "properties": {
                "name": region_name,
                "id": id,
                "projects_count": projects_count
            }
        }
        const numberRange = generateNumberRange(9);
        const color = getColor(numberRange, projects_count)
        const generateStyle = () => ( {
            "fillColor": color,
            "fillOpacity": 0.8,
            "opacity": 0.2
        });

        return(
            <GeoJSON
                data={geoJsonObject}
                key={id}
                style={generateStyle}
                onEachFeature={onEachFeature}>
                <Tooltip sticky key={id}>
                    <div><b>Region:</b> {region_name}</div>
                    <div><b>total projects:</b> {projects_count}</div>
                </Tooltip>
            </GeoJSON>
        );
    });

    return (
        <>
            { renderProjectsOverview(projectsOverview) }
            {projectsOverview.length > 0 ? <Legend key="projects-legend"/> : ''}
            </>
    );
}

export default RegionsGeoJson;
