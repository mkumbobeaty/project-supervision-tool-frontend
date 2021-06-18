import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { TicketActions, TicketSelectors } from '../../redux/modules/Tickets';
import PropTypes from 'prop-types';
import { Col, } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import Topbar from "../components/Topbar";
import TicketsList from "../components/List";
import ListItem from "../components/ListItem";
import ListItemActions from "../components/ListItemActions";
import "./styles.css";
import { isoDateToHumanReadableDate } from '../../Util';


/* constants */
const urgencySpan = { xxl: 2, xl: 2, lg: 2, md: 2, sm: 0, xs: 0 };
const codeSpan = { xxl: 2, xl: 2, lg: 2, md: 4, sm: 2, xs: 2 };
const descriptionSpan = { xxl: 4, xl: 4, lg: 4, md: 4, sm: 19, xs: 19 };
const locationsSpan = { xxl: 3, xl: 3, lg: 3, md: 3, sm: 0, xs: 0 };
const packageSpan = { xxl: 2, xl: 2, lg: 2, md: 0, sm: 0, xs: 0 };
const submitedOnSpan = { xxl: 2, xl: 2, lg: 2, md: 2, sm: 0, xs: 0 };
const responsibleSpan = { xxl: 2, xl: 2, lg: 2, md: 2, sm: 0, xs: 0 };
const submitedBySpan = { xxl: 2, xl: 2, lg: 2, md: 2, sm: 0, xs: 0 };
const statusSpan = { xxl: 2, xl: 2, lg: 2, md: 2, sm: 0, xs: 0 };

const headerLayout = [
    { ...urgencySpan, header: "Urgent" },
    { ...codeSpan, header: "Code" },
    { ...descriptionSpan, header: "Description" },
    { ...locationsSpan, header: "Locations" },
    { ...packageSpan, header: "Package" },
    { ...submitedOnSpan, header: "Submited On" },
    { ...responsibleSpan, header: "Responsible" },
    { ...submitedBySpan, header: "Submited By" },
    { ...statusSpan, header: "Status" },

];


const Tickets = ({ getTickets, tickets, loading }) => {

    useEffect(() => {
        getTickets()
    }, [])

    return (
        <div>
            {/* Topbar */}
            <Topbar
                search={{
                    size: "large",
                    placeholder: "Search for Tickets here ...",
                    onSearch: '',
                }}
                actions={[
                    {
                        label: "New Ticket",
                        icon: <PlusOutlined />,
                        size: "large",
                        title: "Add New Ticket",
                        onClick: '',
                    },
                ]}
            />
            {/* end Topbar */}

            {/* list starts */}
            <TicketsList
                itemName="Tickets"
                items={tickets}
                page={1}
                itemCount={1}
                loading={loading}
                // onRefresh={this.handleRefreshSubProjects}
                headerLayout={headerLayout}
                renderListItem={({
                    item,
                }) => (
                        <ListItem
                            key={item.id} // eslint-disable-line
                            name={item.code}
                            item={item}
                            renderActions={() => (
                                <ListItemActions
                                    edit={{
                                        name: "Edit Ticket",
                                        title: "Update Ticket details",
                                        onClick: () => (item),
                                    }}
                                    archive={{
                                        name: "Archive Ticket",
                                        title:
                                            "Remove Sub project from list of active tickets",
                                        onClick: () => this.showArchiveConfirm(item),
                                    }}
                                    view={
                                        {
                                            name: "View Details",
                                            title: "View more detail of selected tickets",
                                            onClick: () => this.handleViewDetails(item.id)
                                        }
                                    }

                                />
                            )}
                        >
                            {/* eslint-disable react/jsx-props-no-spreading */}

                            <Col {...urgencySpan} >
                                {item?.urgent ? item?.urgent : 'N/A'}
                            </Col>
                            <Col {...codeSpan} className="contentEllipse">

                                {item?.code ? item?.code : "N/A"}
                            </Col>
                            <Col {...descriptionSpan} className="contentEllipse">
                                {item?.description ? item?.description : 'N/A'}
                            </Col>
                            <Col {...locationsSpan} className="contentEllipse">
                                {item?.address ? item?.address : 'N/A'}
                            </Col>
                            <Col {...packageSpan} className="contentEllipse">
                                {item.package ? item?.package?.name : "N/A"}</Col>
                            <Col {...submitedOnSpan} >{item?.created_at ? isoDateToHumanReadableDate(item?.created_at) : "N/A"}</Col>
                            <Col {...responsibleSpan} >  {item?.agency_responsible ? item?.agency_responsible.name : "N/A"} </Col>
                            <Col {...submitedBySpan} >
                                {item?.reporter ? item?.reporter?.name : "N/A"}
                            </Col>
                            <Col {...statusSpan}>
                                {item?.status ? item?.status.name : 'N/A'}
                            </Col>

                            {/* eslint-enable react/jsx-props-no-spreading */}
                        </ListItem>
                    )}
            />
            {/* end list */}


        </div>

    )
}


const mapStateToProps = (state) => {
    return {
        tickets: TicketSelectors.getTickets(state),
        loading: TicketSelectors.loading(state),
    }
}

const mapDispatchToProps = {
    getTickets: TicketActions.getTicketsStart,
}

Tickets.propTypes = {
    getTickets: PropTypes.func.isRequired,
    tickets: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
};

Tickets.defaultProps = {
    tickets: null,
    loading: null
}

export default connect(mapStateToProps, mapDispatchToProps)(Tickets);
