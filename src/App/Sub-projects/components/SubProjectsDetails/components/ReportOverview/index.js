import React from "react";
import { Row, Col } from 'antd';
import IssueList from "../../../../../components/ListItemsComponent";
import randomColor from 'randomcolor';

const urgencySpan = { xxl: 3, xl: 3, lg: 3, md: 4, sm: 0, xs: 0, };
const submitedSpan = { xxl: 3, xl: 3, lg: 3, md: 4, sm: 0, xs: 0, offset: 1 };
const descriptionSpan = { xxl: 4, xl: 4, lg: 4, md: 4, sm: 20, xs: 20, offset: 1 };
const statusSpan = { xxl: 2, xl: 2, lg: 2, md: 2, sm: 0, xs: 0, offset: 1 };
const submitedBySpan = { xxl: 4, xl: 4, lg: 4, md: 4, sm: 0, xs: 0 };
const responsibleSpan = { xxl: 4, xl: 4, lg: 4, md: 4, sm: 0, xs: 0, offset: 1 };

const headerLayout = [
    { ...urgencySpan, header: "Urgency" },
    { ...descriptionSpan, header: "Description" },
    { ...statusSpan, header: "Status" },
    { ...submitedSpan, header: "Submited On" },
    { ...responsibleSpan, header: "Responsible" },
    { ...submitedBySpan, header: "Submited By" },
]
const ReportOverview = () => {

    const urgentColor = randomColor ();

    const issues = [
        {
            "id": 1,
            "urgency": "Urgent",
            "name": "Priority Infrastructure",
            "description": "Priority Infrastructure",
            "status": "Resolved",
            "submited_by": "M. James ",
            "submited_on": "23-3-2017"

        },
        {
            "id": 2,
            "urgency": "Critical",
            "name": "Upgrading in Low Income Communities",
            "description": "Upgrading in Low Income Communities",
            "status": "Follow up",
            "submited_by": "M. Malima",
            "submited_on": "23-10-2018"


        },
        {
            "id": 3,
            "urgency": "Urgent",
            "name": "Institutional Strengthening",
            "description": "Institutional Strengthening",
            "status": "Ongoing",
            "submited_by": "J. Kaisa ",
            "submited_on": "2-1-2019"


        },
        {
            "id": 4,
            "urgency": "Low",
            "name": "Implementation Support and Monitoring and Evaluation",
            "description": "Implementation Support and Monitoring and Evaluation",
            "status": "Closed",
            "submited_by": "S. Juma ",
            "submited_on": "12-5-2021"


        }
    ]

    return (
        <IssueList
            items={issues}
            headerLayout={headerLayout}
            renderListItem={({
                item,
            }) => (
                    <div className="ListItem">
                        <Row align="middle">
                            {/* eslint-disable react/jsx-props-no-spreading */}
                            <Col {...urgencySpan} className="contentEllipse" style={{ color: urgentColor }}>
                                {" "}
                                {item?.urgency ? item?.urgency : 'N/A'}
                            </Col>
                            <Col {...descriptionSpan}>
                                {item?.description ? item?.description : 'N/A'}
                            </Col>
                            <Col {...statusSpan} className="contentEllipse" >
                                {item?.status ? item?.status : 'N/A'}
                            </Col>
                            <Col {...submitedSpan} >{item?.submited_on ? item?.submited_on : 'N/A'}</Col>

                            <Col {...responsibleSpan}>
                                {item?.responsible ? item?.responsible : 'N/A'}
                            </Col>

                            <Col {...submitedBySpan} >
                                {item?.submited_by ? item?.submited_by : 'N/A'}
                            </Col>
                            {/* eslint-enable react/jsx-props-no-spreading */}
                        </Row>
                    </div>

                )}
        />
    )
}

export default ReportOverview