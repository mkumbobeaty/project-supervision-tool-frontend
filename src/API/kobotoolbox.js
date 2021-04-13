
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
 * @name getAssetData
 * @description get assets data from kobotoolbox
 */
const getAssetData = (id) =>
    axiosKobotoolbox.get(`${kfBaseurl}/assets/${id}/data/`).then((response) => response.data);


/**
 * @function
 * @name createAssetDeployment
 * @description Creates a new deployment, but only if a deployment does not exist already.
 */
const createAssetDeployment = (id) =>
    axiosKobotoolbox.post(`${kfBaseurl}/assets/${id}/deployment/`).then((response) => response.data);



/**
 * @function
 * @name activateDeployedAsset
 * @description Creates a new deployment, but only if a deployment does not exist already.
 */
const activateDeployedAsset = (id) =>
    axiosKobotoolbox.patch(`${kfBaseurl}/assets/${id}/deployment/`, {active: true, status: 'public'}).then((response) => response.data);



/**
 * @function
 * @name assignViewSubmissionsPermissions
 * @description assign view submissions permissions
 */
const assignViewSubmissionsPermissions = (id) =>
    axiosKobotoolbox.post(`${kfBaseurl}/assets/${id}/permission-assignments/`, {
        "user":`${kfBaseurl}/AnonymousUser/`,
        "permission":`${kfBaseurl}/permissions/view_submissions/`
    }).then((response) => response.data);

/**
 * @function
 * @name createAsset
 * @description create new survey
 */
const createAsset = (survey) =>
    axiosKobotoolbox.post(`${kfBaseurl}/assets/`, survey).then((response) => response.data);

export default {
    getAssets,
    getAsset,
    getAssetData,
    createAsset,
    activateDeployedAsset,
    createAssetDeployment,
    assignViewSubmissionsPermissions,
}
