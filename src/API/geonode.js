
import Axios from 'axios';

const baseUrl = 'https://geonode.project-supervision-tool.ga/api';

const axiosGeonode = Axios.create({
    headers: {
        Accept: "application/json",
    },
});

/**
 * @function
 * @name getLayers
 * @description get layers  fr  om Geonode
 */
const getLayers = ( params = {}) =>
    axiosGeonode.get(`${baseUrl}/layers`, { params: { ...params, limit: 10 } }).then((response) => response.data);

/**
 * @function
 * @name getLayers
 * @description get layers  from Geonode
 */
const getLayersCategories = (offset) =>
    axiosGeonode.get(`${baseUrl}/categories`, {params: { limit: 10, offset }}).then((response) => response.data);


export default {
    getLayers,
    getLayersCategories,
}
