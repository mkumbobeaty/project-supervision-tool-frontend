import React, { useEffect } from 'react';
import { connect } from "react-redux";
import tickets from '../../API/tickets';
import { TicketActions } from '../../redux/modules/Tickets';
import PropTypes from 'prop-types';


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

const Tickets = ({ getTickets }) => {

    useEffect(() => {
        getTickets()
    }, [])

    return (
        <h4>Tickets</h4>
    )
}

const mapDispatchToProps = {
    getTickets: TicketActions.getTicketsStart,
}

tickets.propTypes = {
    getTickets: PropTypes.func.isRequired,
};

export default connect('', mapDispatchToProps)(Tickets);
