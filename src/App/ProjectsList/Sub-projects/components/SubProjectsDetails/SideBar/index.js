import React, {useEffect, useState} from "react";
import { Col, Row, } from 'antd';
import API from '../../../../../../API';
import { isoDateToHumanReadableDate } from "../../../../../../Util";


const SubProjectSurveys = ({ subProjectSurveys }) => {

    const [surveys, setSurveys] = useState([]);

    useEffect(() => {
        const surveyIds = subProjectSurveys.map(({survey_id}) => survey_id);
        API.getAssets()
            .then( res => {
                const results = res.results.filter(r => !surveyIds.includes(r));
                setSurveys(results);
            })
    }, [])

    return surveys.length > 0 ?(
        <>
            <h4>Sub project Surveys</h4>
            <ul>
                {surveys.map(survey => (<li>{survey.name}</li>))}
            </ul>
        </>
    ): 'N/A';
}

const SidebarSection = ({ sub_project }) => {

    return (
        <div>
            <span >
                <h4>Project Id </h4>
                <p>{sub_project ? sub_project?.project_id : 'N/A'}</p>                                                                                                                                                                                                                                                                                                       {/* <p>{sub_project.id}</p> */}
            </span>
            <span >
                <h4>Phase of the sub_project</h4>
                <p>{sub_project?.details ? sub_project?.details.phase.name : 'N/A'}</p>
            </span>

            <span >
                <h4>Supervision Agency</h4>
                <p>{sub_project?.details ? sub_project?.details.supervising_agency.name : "N/A"}</p>                                                                                                                                                                                                                                                                                                       {/* <p>{sub_project.id}</p> */}
            </span>

            <span >
                <h4>Contractors</h4>
                <p>{sub_project?.details ? sub_project?.details.contractor.name : "N/A"}</p>
            </span>
            <span >
                <h4>Local Government Authority</h4>
                <p>{sub_project?.details ? sub_project?.details.actor.name : "N/A"}</p>
            </span>
            <span >
                <h4>Sub project locations</h4>
                {sub_project?.sub_project_locations.length > 0 ? sub_project?.sub_project_locations.map(location => {
                    if (location.level === 'region') {
                        return (
                            <p>-{location.region.name},{location.district.name}</p>
                        )
                    }
                    else {
                        return <p> - {location.district.name}</p>

                    }

                }) : 'N/A'}
            </span>
            <span>
                { sub_project?.surveys && sub_project?.surveys.length > 0 ? <SubProjectSurveys subProjectSurveys={sub_project.surveys} />: 'N/A'}
            </span>
            <span >
                <h4>Start Date</h4>
                <p>{isoDateToHumanReadableDate(sub_project?.details ? sub_project?.details.start_date : 'N/A')}</p>

            </span>
            <span >
                <h4>End Date</h4>
               <p>{isoDateToHumanReadableDate(sub_project?.details ? sub_project?.details.END_date : 'N/A')}</p>

            </span>
            <span style={{ paddingTop: 24 }}><h4>Description</h4>
                <p>{sub_project ? sub_project?.description : 'N/A'}</p>

            </span>

        </div>

    )
}

export default SidebarSection;
