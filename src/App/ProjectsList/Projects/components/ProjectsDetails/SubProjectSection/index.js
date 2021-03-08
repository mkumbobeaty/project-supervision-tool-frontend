
import React, { Component } from "react";
import { Col } from "antd";
import { isoDateToHumanReadableDate } from '../../../../../../Util';
import ItemsList from "../../../../../components/List";
import ListItem from "../../../../../components/ListItem";
import { Link } from "react-router-dom";
import "./styles.css";


/* constants */
const nameSpan = { xxl: 5, xl: 5, lg: 5, md: 5, sm: 10, xs: 11 };
const locationSpan = { xxl: 3, xl: 3, lg: 3, md: 3, sm: 0, xs: 0 };
const agencySpan = { xxl: 4, xl: 4, lg: 3, md: 4, sm: 4, xs: 5 };
const startDateSpan = { xxl: 2, xl: 2, lg: 2, md: 2, sm: 0, xs: 0 };
const endDateSpan = { xxl: 2, xl: 2, lg: 2, md: 2, sm: 0, xs: 0 };
const phaseSpan = { xxl: 3, xl: 3, lg: 3, md: 3, sm: 4, xs: 3 };
const contractorSpan = { xxl: 4, xl: 4, lg: 4, md: 4, sm: 6, xs: 5 };

const headerLayout = [
    { ...nameSpan, header: "Name" },
    { ...locationSpan, header: "Location" },
    { ...phaseSpan, header: "Phase" },
    { ...agencySpan, header: "Supervision Agency" },
    { ...contractorSpan, header: "Contractor" },
    { ...startDateSpan, header: "Start Date" },
    { ...endDateSpan, header: "End Date" },
];


/**
 * @class
 * @name SubProjects
 * @description Render actions list which have search box, actions and Sub Projects list
 *
 * @version 0.1.0
 * @since 0.1.0
 */
class ProjectSubProjects extends Component {

    render() {
        const { project } = this.props;
        return (
            <div className="project-subproject">
                <h3>List of Sub-projects under {project ? project.name : 'N/A'}</h3>
                {/* list starts */}
                <ItemsList
                    itemName="Sub-project"
                    items={project?.sub_projects}
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
                                    {...nameSpan}
                                    className="contentEllipse"
                                    title={item.description}
                                >
                                    <Link
                                        to={{
                                            pathname: `/app//sub_projects/${item.id}`,
                                        }}
                                    >
                                        {item.name}

                                    </Link>
                                </Col>
                                <Col {...locationSpan}>
                                    {item.sub_project_locations.length <= 0 ? "N/A" : item.sub_project_locations.map(({ district }, index) => {
                                        return (index ? ", " : "") + district.name;
                                    })}
                                </Col>
                                <Col {...phaseSpan}>{item?.details ? item?.details?.phase.name : "N/A"}</Col>

                                <Col className="contentEllipse" {...agencySpan} title={item.details.supervising_agency.name}>{item?.details ? item.details.supervising_agency.name : "N/A"}</Col>
                                <Col className="contentEllipse" {...contractorSpan} title={item.details.contractor.name}>{item.details ? item.details.contractor.name : "N/A"}</Col>
                                <Col {...startDateSpan}>
                                    {isoDateToHumanReadableDate(item?.details ? item.details.start_date : 'Not set')}
                                </Col>
                                <Col {...endDateSpan}>
                                    {isoDateToHumanReadableDate(item?.details ? item.details.end_date : 'Not set')}
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

export default ProjectSubProjects;




