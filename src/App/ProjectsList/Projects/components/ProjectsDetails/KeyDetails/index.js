import { Col, Row } from "antd";
import React from "react";


const totalCostSpan = { xxl: 6, xl: 6, lg: 6, md: 6, sm: 6, xs: 6 };
const projectIdSpan = { xxl: 6, xl: 6, lg: 6, md: 6, sm: 6, xs: 6 };
const commitmentSpan = { xxl: 6, xl: 6, lg: 6, md: 6, sm: 6, xs: 6 };
const subProjectsSpan = { xxl: 6, xl: 6, lg: 6, md: 6, sm: 6, xs: 6 };
const projectLeadSpan = { xxl: 6, xl: 6, lg: 6, md: 6, sm: 6, xs: 6 };
const statusSpan = { xxl: 6, xl: 6, lg: 6, md: 6, sm: 6, xs: 6 };
const projectCoordinatorSpan = { xxl: 6, xl: 6, lg: 6, md: 0, sm: 0, xs: 0 };
const implementingAgencySpan = { xxl: 6, xl: 6, lg: 6, md: 6, sm: 6, xs: 6 };
const projectsLocationSpan = { xxl: 6, xl: 6, lg: 6, md: 6, sm: 6, xs: 6 };
const lastUpdateSpan = { xxl: 6, xl: 6, lg: 6, md: 0, sm: 0, xs: 0 };


const KeyDetailSection = ({ project, commitmentAmount, totalProjectCost }) => {

    return (
        <section className="container">
        <Row className="key-details">
            <Col {...projectIdSpan}>
                <h4>World Bank Project ID</h4>
                <p>{project ? project?.id : 'N/A'}</p>
            </Col>
            <Col {...statusSpan}>
                <h4>Status</h4>
                <p>{project?.details ? project?.details.status : 'N/A'}</p>
            </Col>
            <Col {...totalCostSpan}>
                <h4>Project Total Cost</h4>
                <p>{totalProjectCost}</p>
            </Col>
            <Col {...commitmentSpan}>
                <h4>Commitment Amount</h4>
                <p>{commitmentAmount}</p>
            </Col>
            <Col {...subProjectsSpan}>
                <h4>Sub Projects</h4>
                <p>{project?.sub_projects ? project.sub_projects.length : 'N/A'}</p>
            </Col>
            <Col {...projectLeadSpan}>
                <h4>Project Lead</h4>
                <p>{project?.leaders ? project.leaders.map(({ first_name, last_name }, index) => { return (index ? ", " : "") + first_name + " " + last_name }) : 'N/A'}</p>

            </Col>
            <Col {...projectCoordinatorSpan}>
                <h4>Project Coordinator</h4>
                <p>{project?.details ? project?.details.implementing_agency.focalPerson.first_name + " " + project?.details.implementing_agency.focalPerson.last_name : 'N/A'}</p>

            </Col>
            <Col {...implementingAgencySpan}>
                <h4>Implementing Agency</h4>
                <p>{project?.details ? project?.details.implementing_agency.name : 'N/A'}</p>
            </Col>

            <Col {...projectsLocationSpan}>
                <h4>Project locations</h4>
                {project?.locations ? project?.locations.map(location => {
                    if (location.level === 'district') {
                        return (
                            <p>{location.region.name},{location.district.name}</p>
                        )
                    }
                    else {
                        return <p>{location.region.name}</p>

                    }

                }) : 'N/A'}
            </Col>
            <Col {...lastUpdateSpan} >
                <h4>Last updated</h4>
                <p>{project?.details ? new Date(project?.details.approval_date).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' }) : 'N/A'}</p>
            </Col>
        </Row>
        </section>

    )
}

export default KeyDetailSection;