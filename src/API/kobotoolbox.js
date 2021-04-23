
import Axios from 'axios';

const kfBaseurl = 'https://kf.survey-project-supervision-tool.ga/api/v2';
const API_KEY = process.env.REACT_APP_KOBOTOOL_BOX_API_KEY || '713b0f15b7c73782206b0c1d2c3778bcb0b74de7';
const axiosKobotoolbox = Axios.create({
    headers: {
        Accept: "application/json",
        Authorization: `Token ${API_KEY}`
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
 * @description deploys an existing survey
 */
const activateDeployedAsset = (id) =>
    axiosKobotoolbox.patch(`${kfBaseurl}/assets/${id}/deployment/`, {active: true}).then((response) => response.data);

/**
 * @function
 * @name archiveDeployedAsset
 * @description archives a deployed survey
 */
const archiveDeployedAsset = (id) =>
    axiosKobotoolbox.patch(`${kfBaseurl}/assets/${id}/deployment/`, {active: false}).then((response) => response.data);



/**
 * @function
 * @name assignViewSubmissionsPermissions
 * @description assign view submissions permissions
 */
const assignViewSubmissionsPermissions = (id) =>
    axiosKobotoolbox.post(`${kfBaseurl}/assets/${id}/permission-assignments/`, {
        "user":`${kfBaseurl}/users/AnonymousUser/`,
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
    archiveDeployedAsset,
    assignViewSubmissionsPermissions,
}
