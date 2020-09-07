import moment from "moment";

/**
 * converts ISO date string to human readable
 * date and time
 *
 * @function
 * @name isoDateToHumanReadableDate
 *
 * @param {string} isoFormattDate
 *
 * @returns {string} human readable date
 * @version 0.1.0
 * @since 0.1.0
 */
export const isoDateToHumanReadableDate = (isoFormattDate) => {
    return moment(isoFormattDate)
        .utc()
        .format('MMMM Do YYYY');
}

/**
 * converts moment date  object to date string
 *
 * @function
 * @name generateDateString
 *
 * @param {Object} dateObject
 *
 * @returns {string} date string
 * @version 0.1.0
 * @since 0.1.0
 */
export const generateDateString = (dateObject) => {
    return moment(dateObject)
        .utc()
        .format('YYYY-MM-DD');
}

/**
 * create moment date  object from ISO string
 *
 * @function
 * @name createDateFromString
 *
 * @param {String} dateString
 *
 * @returns {Object} date
 * @version 0.1.0
 * @since 0.1.0
 */
export const createDateFromString = (dateString) => {
    return moment(dateString);
}

/**
 * get Geojson Object from an  location object
 *
 * @function
 * @name getGeoJsonFromLocation
 *
 * @param {Object} data
 *
 * @returns {Object}
 * @version 0.1.0
 * @since 0.1.0
 */
export const getGeoJsonFromLocation = (data) => {
    const { location } = data;
    const notAllowed = ['location'];

    const filtered = Object.keys(data)
        .filter(key => !notAllowed.includes(key))
        .reduce((obj, key) => {
            obj[key] = data[key];
            return obj;
        }, {});
    if(location.level === 'district') {
        const districtGeo = location?.district?.geo_json;
        const property = { level: location.level, id: location?.district.id }
        return {...districtGeo, property};
    }
    else {
        const regionGeo = location?.region?.geo_json;
        const property = { level: location.level, id: location?.region.id }
        return {...regionGeo, property};
    }
}

/**
 * get selected resources by level and geospatial id
 *
 * @function
 * @name getSelectedResources
 *
 * @param {string} level
 * @param {string} id
 * @param {Array} resources
 *
 * @returns {Object}
 * @version 0.1.0
 * @since 0.1.0
 */
export const getSelectedResources = (level, id, resources) => {
    if(level === 'district') {
        return resources.filter(({location}) => location?.district.id === id);
    }
    else {
        return resources.filter(({location}) => location?.region.id === id);

    }
}
