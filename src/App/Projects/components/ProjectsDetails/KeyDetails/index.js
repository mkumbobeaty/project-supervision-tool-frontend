import { Col, Row } from "antd";
import React from "react";


const totalCostSpan = { xxl: 6, xl: 6, lg: 6, md: 6, sm: 12, xs: 12 };
const projectIdSpan = { xxl: 6, xl: 6, lg: 6, md: 6, sm: 12, xs: 12 };
const commitmentSpan = { xxl: 6, xl: 6, lg: 6, md: 6, sm: 12, xs: 12 };
const subProjectsSpan = { xxl: 6, xl: 6, lg: 6, md: 6, sm: 12, xs: 12 };
const projectLeadSpan = { xxl: 6, xl: 6, lg: 6, md: 6, sm: 12, xs: 12 };
const statusSpan = { xxl: 6, xl: 6, lg: 6, md: 6, sm: 12, xs: 12 };
const projectCoordinatorSpan = { xxl: 6, xl: 6, lg: 6, md: 0, sm: 12, xs: 12 };
const implementingAgencySpan = { xxl: 6, xl: 6, lg: 6, md: 6, sm: 12, xs: 12 };
const projectsLocationSpan = { xxl: 6, xl: 6, lg: 6, md: 6, sm: 12, xs: 12 };
const lastUpdateSpan = { xxl: 6, xl: 6, lg: 6, md: 0, sm: 12, xs: 12 };


const KeyDetailSection = ({ project, commitmentAmount, totalProjectCost }) => {

    return (
        <section className="container">
            <Row className="key-details">
                <Col {...projectIdSpan}>
                    <h4>World Bank Project ID</h4>
                    <p>{project ? project?.wb_project_id : 'N/A'}</p>
                </Col>
                <Col {...statusSpan}>
                    <h4>Status</h4>
                    <p>{project?.status ? project?.status : 'N/A'}</p>
                </Col>
                <Col {...totalCostSpan}>
                    <h4>Project Total Cost</h4>
                    <p>{totalProjectCost}</p>
                </Col>
                <Col {...commitmentSpan}>
                    <h4>Commitment Amount</h4>
                    <p>{commitmentAmount}</p>
                </Col>

                <Col {...projectLeadSpan}>
                    <h4>WB Task Team Leader</h4>
                    <p>{project?.leaders > 0 ? project?.leaders.map(({ first_name, last_name }, index) => { return (index ? ", " : "") + first_name + " " + last_name }) : 'N/A'}</p>

                </Col>
                <Col {...projectCoordinatorSpan}>
                    <h4>GOT WBCU Project Coordinator</h4>
                    <p>{project?.implementing_agency ? project?.implementing_agency?.focalPerson?.first_name + " " + project?.implementing_agency?.focalPerson?.last_name : 'N/A'}</p>

                </Col>
                <Col {...projectCoordinatorSpan}>
                    <h4>Funding organisation</h4>
                    <p>{project?.funding_organisation ? project?.funding_organisation?.name : 'N/A'}</p>

                </Col>

                <Col {...implementingAgencySpan}>
                    <h4>Implementing Agency</h4>
                    <p>{project?.implementing_agency ? project?.implementing_agency?.name : 'N/A'}</p>
                </Col>
                <Col {...subProjectsSpan}>
                    <h4>Sub Projects</h4>
                    <p>{project?.sub_projects ? project.sub_projects.length : 'N/A'}</p>
                </Col>
                <Col {...projectsLocationSpan}>
                    <h4>Project locations</h4>
                    {project?.regions ? project?.regions.map(({ name }) => <p>{name}</p>) : 'N/A'}
                </Col>
                <Col {...lastUpdateSpan} >
                    <h4>Last updated</h4>
                    <p>{project?.approval_date ? new Date(project?.approval_date).toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' }) : 'N/A'}</p>
                </Col>
            </Row>
        </section>

    )
}

export default KeyDetailSection;