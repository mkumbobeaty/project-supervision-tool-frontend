
import Axios from 'axios';

const kfBaseurl = 'https://kf.survey-project-supervision-tool.ga/api/v2';
const kcBaseurl = 'https://kc.survey-project-supervision-tool.ga/api/v1';

const axiosKobotoolbox = Axios.create({
    headers: {
        Accept: "application/json",
        Authorization: 'Token 2c58bb5e7530d75231d196efe52af6560640ab8e'
    },
});

/**
 * @function
 * @name getAssets
 * @description get assets from kobotoolbox
 */
const getAssets = () =>
    axiosKobotoolbox.get(`${kfBaseurl}/assets`).then((response) => response.data);

/**
 * @function
 * @name getAsset
 * @description get assets from kobotoolbox
 */
const getAsset = (id) =>
    axiosKobotoolbox.get(`${kfBaseurl}/assets/${id}/`).then((response) => response.data);

/**
 * @function
 * @name createSurvey
 * @description create new survey
 */
const createSurvey = (survey) =>
    axiosKobotoolbox.post(`${kfBaseurl}/assets/`, survey).then((response) => response.data);

export default {
    getAssets,
    getAsset,
    createSurvey,
}
