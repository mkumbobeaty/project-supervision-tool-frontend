import React from "react";
import { Row, Col } from 'antd';
import IssueList from "../ListItemsComponent";
import {  useHistory } from "react-router-dom";
import "./styles.css";

const urgencySpan = { xxl: 3, xl: 3, lg: 3, md: 4, sm: 0, xs: 0, };
const submitedSpan = { xxl: 3, xl: 3, lg: 3, md: 4, sm: 0, xs: 0, offset: 1 };
const descriptionSpan = { xxl: 4, xl: 4, lg: 4, md: 4, sm: 20, xs: 20, offset: 1 };
const statusSpan = { xxl: 2, xl: 2, lg: 2, md: 2, sm: 0, xs: 0, offset: 1 };
const submitedBySpan = { xxl: 2, xl: 2, lg: 2, md: 2, sm: 0, xs: 0 };
const responsibleSpan = { xxl: 3, xl: 3, lg: 3, md: 3, sm: 0, xs: 0, offset: 1 };
const addressSpan = { xxl: 3, xl: 3, lg: 3, md: 3, sm: 0, xs: 0 };

const headerLayout = [
    { ...urgencySpan, header: "Ticket Code" },
    { ...descriptionSpan, header: "Description" },
    { ...addressSpan, header: "Address" },
    { ...statusSpan, header: "Status" },
    { ...submitedSpan, header: "Submited On" },
    { ...responsibleSpan, header: "Responsible" },
    { ...submitedBySpan, header: "Submited By" },

]
const Tickets = ({ tickets }) => {

    const history = useHistory();

   const handleViewMore = () => {
        history.push('/app/tickets')
    }

    return (
        <section style={{ marginTop: '40px' }}>
            <div className="container issueOverview">
                <h4 className="text-blue">Issues</h4>
                <IssueList
                    items={tickets}
                    headerLayout={headerLayout}
                    renderListItem={({
                        item,
                    }) => (
                            <div className="ListItem">
                                <Row align="middle">
                                    {/* eslint-disable react/jsx-props-no-spreading */}
                                    <Col {...urgencySpan} className="contentEllipse" >
                                        {" "}
                                        {item?.code ? item?.code : 'N/A'}
                                    </Col>
                                    <Col {...descriptionSpan}>
                                        {item?.description ? item?.description : 'N/A'}
                                    </Col>
                                    <Col {...addressSpan} >
                                        {item?.address ? item?.address : 'N/A'}
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
                <p className="text-blue viewIssue" onClick={() => handleViewMore()}>View All Issues</p>
            </div>
        </section>
    )
}

export default Tickets