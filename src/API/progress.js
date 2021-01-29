
import axios from "./config";

/**
 * @function
 * @name getProgress
 * @description get progess
 * */
const getProgress = () =>
    axios.get(`/progress`).then((response) => response.data);



export default {
    getProgress,
}