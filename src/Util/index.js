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