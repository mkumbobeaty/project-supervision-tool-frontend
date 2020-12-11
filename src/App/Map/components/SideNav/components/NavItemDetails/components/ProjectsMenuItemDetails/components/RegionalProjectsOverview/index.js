import React, {useEffect} from "react";
import PropTypes from 'prop-types';
import SideNavItemOverview from "../../../SideNavItemOverview";
import {moneyFormat} from "../../../../../../../../../../Util";
import './styles.css';


/**
 * @function
 * @name RegionalProjectsOverview
 * @description renders project overview at regional level
 */
function RegionalProjectsOverview(
    {
        getRegionProjectStatistics,
    }
) {

    // get project overview when
    // a  component has mounted
    // useEffect(() => {
    //     getRegionProjectStatistics();
    // }, []);




    return (<div>inside Regional Project statistics</div>);

}

export default RegionalProjectsOverview;

RegionalProjectsOverview.propTypes = {
    projectsStatistics: PropTypes.object.isRequired,
    projectsCountByRegion: PropTypes.object.isRequired,
    getRegionProjectStatistics: PropTypes.func.isRequired
}
