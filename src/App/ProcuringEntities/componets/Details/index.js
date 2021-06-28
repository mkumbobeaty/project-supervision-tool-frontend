import React, {useEffect} from 'react';
import {Col, Layout, Row, Spin, Tabs} from "antd";
import { ProcuringEntityActions, ProcuringEntitySelectors } from '../../../../redux/modules/ProcuringEntities';
import { connect } from "react-redux";
import ProjectHome from "../../../navigation/ProjectHome";
import { isoDateToHumanReadableDate } from '../../../../Util'
import './styles.css';
import ProcuringEntityHomeNavMenu from "../../../navigation/ProcuringEntitiesHome";
const { Content } = Layout;

const totalCostSpan = { xxl: 6, xl: 6, lg: 6, md: 6, sm: 12, xs: 12 };
const projectIdSpan = { xxl: 6, xl: 6, lg: 6, md: 6, sm: 12, xs: 12 };
const commitmentSpan = { xxl: 6, xl: 6, lg: 6, md: 6, sm: 12, xs: 12 };
const projectSpan = { xxl: 6, xl: 6, lg: 6, md: 6, sm: 12, xs: 12 };
const projectLeadSpan = { xxl: 6, xl: 6, lg: 6, md: 6, sm: 12, xs: 12 };
const statusSpan = { xxl: 6, xl: 6, lg: 6, md: 6, sm: 12, xs: 12 };
const projectCoordinatorSpan = { xxl: 6, xl: 6, lg: 6, md: 0, sm: 12, xs: 12 };
const implementingAgencySpan = { xxl: 6, xl: 6, lg: 6, md: 6, sm: 12, xs: 12 };
const projectsLocationSpan = { xxl: 6, xl: 6, lg: 6, md: 6, sm: 12, xs: 12 };
const lastUpdateSpan = { xxl: 6, xl: 6, lg: 6, md: 0, sm: 12, xs: 12 };


const ProcuringEntityDetails = ({match, procuringEntity, getProcuringEntity}) => {

    useEffect(() => {
        console.log('inside use Effect');
        getProcuringEntity(match.params?.id);
    }, []);

    return procuringEntity ? (
        <Layout className="project-layout">
            <Spin spinning={false} tip="Loading..." >
                <Content className="contents">
                    <h3>{`${procuringEntity.agency.name} - ${procuringEntity.project_sub_component.name}`}</h3>
                    <Layout className="project-inner-layout" >
                        <Content className="project-contents">
                            <div className="card-container">
                                <div className="keyDetails grey-bgr">
                                    <h2 id="sider-title">Key Details</h2>
                                <section className="container">
                                    <Row className="key-details">
                                        <Col {...projectIdSpan}>
                                            <h4>Project</h4>
                                            <p>{`${procuringEntity.project.name}(${procuringEntity.project.code})`}</p>
                                        </Col>
                                        <Col {...statusSpan}>
                                            <h4>Project Component</h4>
                                            <p>{procuringEntity.project_component?.name ? procuringEntity.project_component?.name : 'N/A'}</p>
                                        </Col>
                                        <Col {...totalCostSpan}>
                                            <h4>Project SubComponent</h4>
                                            <p>{procuringEntity.project_sub_component?.name ? procuringEntity.project_sub_component?.name : 'N/A'}</p>
                                        </Col>
                                        <Col {...commitmentSpan}>
                                            <h4>Entity</h4>
                                            <p>{procuringEntity.agency?.name ? procuringEntity.agency?.name : 'N/A'}</p>
                                        </Col>

                                        <Col {...projectLeadSpan}>
                                            <h4>Packages</h4>
                                            <p>{procuringEntity.packages.length}</p>

                                        </Col>

                                        <Col {...projectCoordinatorSpan}>
                                            <h4>Contracts</h4>
                                            <p>{procuringEntity.contracts.length}</p>

                                        </Col>

                                        <Col {...implementingAgencySpan}>
                                            <h4>Contractors</h4>
                                            <p>{procuringEntity.contractors.length}</p>
                                        </Col>
                                        <Col {...projectsLocationSpan}>
                                            <h4>Supervising Consultants</h4>
                                            {procuringEntity.supervisingConsultants.length}
                                        </Col>
                                        <Col {...projectCoordinatorSpan}>
                                            <h4>SubProjects</h4>
                                            <p>{procuringEntity.subProjects.length}</p>
                                        </Col>
                                        <Col {...lastUpdateSpan} >
                                            <h4>Last updated</h4>
                                            <p>{isoDateToHumanReadableDate(procuringEntity.updated_at)}</p>
                                        </Col>
                                    </Row>
                                </section>
                                </div>
                                <ProcuringEntityHomeNavMenu match={match} />
                            </div>
                        </Content>
                    </Layout>
                </Content>
            </Spin>
        </Layout>
    ) : '';
}

const mapStateToProps = state => ({
    procuringEntity: ProcuringEntitySelectors.getProcuringEntitySelector(state)
});

const mapDispatchToProps = {
    getProcuringEntity: ProcuringEntityActions.getProcuringEntityStart
};

export default connect(mapStateToProps, mapDispatchToProps)(ProcuringEntityDetails);
