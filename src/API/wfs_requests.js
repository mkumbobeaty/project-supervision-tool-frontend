
import Axios from 'axios';

const baseUrl = 'https://geonode.project-supervision-tool.ga/geoserver/wfs';

const axiosGeoserver = Axios.create({
    headers: {
        Accept: "application/json",
    },
});

const geoserverUrl = 'https://geonode.project-supervision-tool.ga/geoserver';


/**
 * @function
 * @name getWfsLayerData
 *
 * @param {Object} layer_name
 * @returns {Promise}
 *
 * @version 0.1.0
 * @since 0.1.0
 */
const getWfsLayerData = (layer_name) =>
    Axios.get(`${baseUrl}?service=wfs&version=2.0.0&request=GetFeature&typeNames=${layer_name}&outputFormat=application/json`)
    .then((response) => response.data);

const getGeoserverLayers = (layer_name) =>
    axiosGeoserver.get(`${geoserverUrl}/rest/layers`)
    .then((response) => response.data);






export default {
    getWfsLayerData,
    getGeoserverLayers,
}
