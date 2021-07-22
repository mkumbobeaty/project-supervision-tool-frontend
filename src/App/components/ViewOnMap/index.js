import L from "leaflet";
import { GeoJSON, useMap } from "react-leaflet";
import React from "react";
import PropTypes from 'prop-types';
import { Modal } from "antd";
import BaseMap from "../../Map/components/BaseMap";
import './styles.css';

function ShowFeature({ data }) {
    const map = useMap();

    const onEachFeature = (feature, layer) => {
        if (feature.geometry.type === 'Point') {
            const latLng = L.GeoJSON.coordsToLatLng(feature.geometry.coordinates)
            return map.setView(latLng, 18);
        }

        return map.fitBounds(layer.getBounds());
    }

    const randerGeoJson = (geoJsons) => geoJsons.map(({ geometry }) => {
        return <GeoJSON data={geometry} />

    });


    return data.length > 1 ? (<GeoJSON data={data[0]} onEachFeature={onEachFeature} />) : randerGeoJson(data);
}


function ViewOnMap({ data, showMApModal, handleOnCancel }) {
    const state = {
        lat: -5.856,
        lng: 34.074,
        zoom: 7,
    }
    return (
        <div>
            <Modal
                style={{ 'top': 0 }}
                bodyStyle={{ padding: 0, margin: 0 }}
                wrapClassName='map-modal-survey-results'
                width='100%'
                mask={false}
                footer={null}
                onCancel={() => handleOnCancel()}
                visible={showMApModal}
            >

            <BaseMap zoomControl={true} position={[state.lat, state.lng]}>
             <ShowFeature data={data} />
            </BaseMap>
            </Modal>
        </div>
    );

}

export default ViewOnMap;

ViewOnMap.propTypes = {
    data: PropTypes.array.isRequired,
    showMApModal: PropTypes.bool.isRequired,
    handleOnCancel: PropTypes.func.isRequired,
}
