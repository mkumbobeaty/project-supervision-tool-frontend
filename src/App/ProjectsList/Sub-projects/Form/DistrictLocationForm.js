
import PropTypes from 'prop-types';
import React from "react";

import LocationForm from "../../../components/LocationForm";



const DistrictLocationForm = ({ visible, onCancel, locations, setLocations, regions, layers, selected }) => {


    return (
        <LocationForm
            locations={locations}
            setLocations={setLocations}
            onCancel={onCancel}
            visible={visible}
            regions={regions}
            layers={layers}
            selected={selected}
        />)
};

export default DistrictLocationForm;

DistrictLocationForm.propTypes = {
    visible: PropTypes.bool.isRequired,
    onCancel: PropTypes.func.isRequired,
    setLocations: PropTypes.func.isRequired,
    locations: PropTypes.array.isRequired,
    regions: PropTypes.array.isRequired,
    layers: PropTypes.array.isRequired,
}
