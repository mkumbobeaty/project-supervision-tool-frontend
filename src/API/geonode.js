
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
 * @description get layers  from Geonode
 */
const getLayers = () =>
    axiosGeonode.get(`${baseUrl}/layers`, {params: { limit: 10}}).then((response) => response.data);


export default {
    getLayers,
}
