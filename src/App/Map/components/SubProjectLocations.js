import React from "react";
import PropTypes from 'prop-types';
import {GeoJSON} from 'react-leaflet';

function SubProjectLocations({ subProjects, getSubproject }) {

    return (
        <>
            {
                subProjects.map(({geo_json}) => <GeoJSON data={geo_json}/>)
            }
        </>

    );
}

export default SubProjectLocations;

SubProjectLocations.propTypes = {
    subProjects: PropTypes.array.isRequired,
    getSubproject: PropTypes.func.isRequired,
}
