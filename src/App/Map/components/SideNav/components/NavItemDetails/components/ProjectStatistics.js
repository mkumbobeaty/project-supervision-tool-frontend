import {Button} from "antd";
import React from "react";
import {moneyFormat} from "../../../../../../../Util";
import IntroSection from "./IntroSection";




/**
 * @function
 * @name ProjectStatistics
 * @description a function components that show summary statics info
 * about a all projects in a country
 */
function ProjectStatistics ({ projectsStatistics }) {
    const data = projectsStatistics ? [
        {title: 'Projects', value: projectsStatistics.projects},
        {title: 'Commitment Amount', value: `${projectsStatistics.commitment_amount.iso} ${moneyFormat(projectsStatistics.commitment_amount.total)}`},
        {title: 'Regions', value: projectsStatistics.regions},
    ] : [];


    return data.length > 0 ? (<IntroSection data={data} title="OverView"/>) : '';
}

export default ProjectStatistics;
