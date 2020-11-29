import {Button} from "antd";
import React from "react";
import {moneyFormat} from "../../../../../../../Util";
import IntroSection from "./IntroSection";


/**
 * @function
 * @name Statistics
 * @description a function components that show summary statics info
 * about a all projects in a country
 */
function Statistics({projectsStatistics, regionProjectsStatistics}) {
    const projectsStatisticsData = projectsStatistics ? [
        {title: 'Projects', value: projectsStatistics.projects},
        {
            title: 'Commitment Amount',
            value: `${projectsStatistics.commitment_amount.iso} ${moneyFormat(projectsStatistics.commitment_amount.total)}`
        },
        {title: 'Regions', value: projectsStatistics.regions},
    ] : [];

    const regionProjectStatisticsData = regionProjectsStatistics ? [
        {title: 'Projects', value: regionProjectsStatistics.projects},
        {
            title: 'Commitment Amount',
            value: ''
        },
        {title: 'Sub-projects', value: ''},
    ] : [];


    return (
        <>
            {projectsStatisticsData.length > 0 ?
                <IntroSection title="OverView" data={projectsStatisticsData}/> :
                regionProjectStatisticsData.length > 0 ?
                    <IntroSection title="Region Name" data={regionProjectStatisticsData}/> : ''
            }
        </>
    );
}

export default Statistics;
