
import React, { Component } from "react";
import { connect } from "react-redux";
import { projectOperation, projectSelectors } from '../../../../duck';
import { Col, Modal } from "antd";
import PropTypes from "prop-types";
import { isoDateToHumanReadableDate } from '../../../../../../Util';
import ItemsList from "../../../../../components/List";
import ListItem from "../../../../../components/ListItem";
import { Link } from "react-router-dom";
import "./styles.css";


/* constants */
const subProjectNameSpan = { xxl: 4, xl: 4, lg: 5, md: 8, sm: 10, xs: 11 };
const contractorSpan = { xxl: 4, xl: 5, lg: 4, md: 6, sm: 6, xs: 5 };
const phaseSpan = { xxl: 2, xl: 2, lg: 3, md: 4, sm: 4, xs: 3 };
const agencySpan = { xxl: 4, xl: 4, lg: 6, md: 4, sm: 4, xs: 5 };
const locationSpan = { xxl: 5, xl: 4, lg: 0, md: 0, sm: 0, xs: 0 };
const startDateSpan = { xxl: 2, xl: 2, lg: 4, md: 0, sm: 0, xs: 0 };



const headerLayout = [
    { ...subProjectNameSpan, header: "Sub-Project Name" },
    { ...contractorSpan, header: "Contractor" },
    { ...agencySpan, header: "Supervision Agency" },
    { ...phaseSpan, header: "Phase" },
    { ...locationSpan, header: "Location" },
    { ...startDateSpan, header: "Start Date" },
];


/**
 * @class
 * @name Sub  Projects
 * @description Render actions list which have search box, actions and Sub Projects list
 *
 * @version 0.1.0
 * @since 0.1.0
 */
class ProjectSubProjects extends Component {
   
    componentDidMount() {
        const { fetchSubProjects } = this.props;
        fetchSubProjects()
    }

    render() {
        const { subProjects} = this.props;
        return (
            <div className="project-subproject">
                <h3>List of Sub-projects under DMDP</h3>
                {/* list starts */}
                <ItemsList
                    itemName="Sub-project"
                    items={subProjects}
                    headerLayout={headerLayout}
                    renderListItem={({
                        item,
                    }) => (
                            <ListItem
                                key={item.id} // eslint-disable-line
                                name={item.name}
                                item={item}
                                renderActions={() => null}
                                className="itemList"
                            >
                                {/* eslint-disable react/jsx-props-no-spreading */}
    
                                <Col
                                    {...subProjectNameSpan}
                                    className="humanResourceEllipse"
                                    title={item.description}
                                >
                                    <Link
                                        to={{
                                            pathname: `/app/resources/initiatives/${item.project_id}`,
                                        }}
                                    >
                                        {item.name}

                                    </Link>
                                </Col>
                                <Col {...contractorSpan}>{item.details ? item.details.contractor.name : "N/A"}</Col>
                                <Col {...agencySpan}>{item.details ? item.details.supervising_agency.name : "N/A"}</Col>
                                <Col {...phaseSpan}>{item.details ? item.details.phase.name : "N/A"}</Col>
                                <Col {...locationSpan}>
                                    {item.sub_project_locations.length <= 0 ? "N/A" : item.sub_project_locations.map(({ quantity }, index) => {
                                        return (index ? ", " : "") + quantity;
                                    })}
                                </Col>
            
                                <Col {...startDateSpan}>
                                    {isoDateToHumanReadableDate(item.details ? item.details.start_date : 'Not set')}
                                </Col>

                                {/* eslint-enable react/jsx-props-no-spreading */}
                            </ListItem>
                        )}
                />
                {/* end list */}
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        subProjects: projectSelectors.getSubProjectsSelector(state)
    };
};

const mapDispatchToProps = {
    fetchSubProjects: projectOperation.getSubProjectsStart,
    deleteSubproject: projectOperation.deleteSubProjectStart,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectSubProjects);




