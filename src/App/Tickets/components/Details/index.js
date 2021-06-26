import { Col, Layout, Row, } from 'antd';
import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { ticketActions, ticketSelectors } from '../../../../redux/modules/Tickets';
import './styles.css'
const { Content } = Layout;

const innerSpan = { xxl: 12, xl: 12, lg: 12, md: 12, sm: 24, xs: 24 };
const commonSpan = { xxl: 12, xl: 12, lg: 12, md: 12, sm: 24, xs: 24 };

const TicketDetails = ({ ticket, getTicket, match: { params } }) => {

    useEffect(() => {
        getTicket(params.id)
    }, [])

    return (
        <Layout className="project-layout">
            <Content className="contents">
                <h3>Issue #{ticket?.code}</h3>
                <div className="tickets grey-bgr">
                    <div className="container">
                        <h4 className="text-blue">Description</h4>
                        <p >{ticket.description}</p>
                    </div>
                </div>
                <div className="container">
                    <Row className="issues key-details">
                        <Col {...commonSpan}>
                            <Row>
                                <Col {...innerSpan}>
                                    <h4>urgency</h4>
                                    <p>{ticket?.urgency ? ticket?.urgency : 'N/A'}</p>
                                    <h4>Submitted On</h4>
                                    <p>{ticket?.urgency ? ticket?.urgency : 'N/A'}</p>
                                    <h4>Package</h4>
                                    <p>{ticket?.urgency ? ticket?.urgency : 'N/A'}</p>
                                    <h4>Responsible</h4>
                                    <p>{ticket?.urgency ? ticket?.urgency : 'N/A'}</p>
                                </Col>
                                <Col {...innerSpan}>
                                    <h4>status</h4>
                                    <p>{ticket?.status ? ticket?.status : 'N/A'}</p>
                                    <h4>Submitted By</h4>
                                    <p>{ticket?.status ? ticket?.status : 'N/A'}</p>
                                    <h4>Locations</h4>
                                    <p>{ticket?.status ? ticket?.status : 'N/A'}</p>
                                    <h4>LGA's</h4>
                                    <p>{ticket?.status ? ticket?.status : 'N/A'}</p>
                                    <h4>Photo</h4>
                                </Col>
                            </Row>
                        </Col>
                        <Col {...commonSpan} className="updatedIssue">
                            <div className="updatedIssueContents">
                            <h4>Updated on the Issue</h4>
                            </div>
                        </Col>

                    </Row>
                </div>
            </Content>
        </Layout>

    )
}

const mapStateToProps = (state) => {
    return {
        ticket: ticketSelectors.getTicket(state),
    }
}

const mapDispatchToProps = {
    getTicket: ticketActions.getTicketStart,
}


export default connect(mapStateToProps, mapDispatchToProps)(TicketDetails);
