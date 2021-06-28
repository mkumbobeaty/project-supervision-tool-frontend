import React, {useEffect} from 'react';
import {Col, Layout, Row, Spin, Tabs} from "antd";
import { ProcuringEntityActions, ProcuringEntitySelectors } from '../../../../redux/modules/ProcuringEntities';
import { connect } from "react-redux";
import ProjectHome from "../../../navigation/ProjectHome";
import { isoDateToHumanReadableDate } from '../../../../Util'
import './styles.css';
import PackageHomeNavMenu from "../../../navigation/PackagesHome";
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


const PackageDetails = ({match, procuringEntityPackage, getProcuringEntityPackage}) => {

    useEffect(() => {
        console.log('inside use Effect');
        getProcuringEntityPackage(match.params?.id);
    }, []);

    return procuringEntityPackage ? (
        <Layout className="project-layout">
            <Spin spinning={false} tip="Loading..." >
                <Content className="contents">
                    <h3>{procuringEntityPackage.name || 'N/A'}</h3>
                    <Layout className="project-inner-layout" >
                        <Content className="project-contents">
                            <div className="card-container">
                                <div className="keyDetails grey-bgr">
                                    <h2 id="sider-title">Key Details</h2>
                                <section className="container">
                                    <Row className="key-details">
                                        <Col {...projectIdSpan}>
                                            <h4>Project</h4>
                                            <p>{`${procuringEntityPackage?.procuring_entity?.project?.name}(${procuringEntityPackage?.procuring_entity?.project?.code})`}</p>
                                        </Col>
                                        <Col {...statusSpan}>
                                            <h4>Project Component</h4>
                                            <p>{procuringEntityPackage?.procuring_entity?.project_component?.name || 'N/A'}</p>
                                        </Col>
                                        <Col {...totalCostSpan}>
                                            <h4>Project SubComponent</h4>
                                            <p>{procuringEntityPackage?.procuring_entity?.project_sub_component?.name || 'N/A'}</p>
                                        </Col>
                                        <Col {...commitmentSpan}>
                                            <h4>Entity</h4>
                                            <p>{procuringEntityPackage?.procuring_entity?.agency?.name || 'N/A'}</p>
                                        </Col>

                                        <Col {...projectLeadSpan}>
                                            <h4>Contract No.</h4>
                                            <p>{procuringEntityPackage?.contract?.name || 'N/A'}</p>

                                        </Col>

                                        <Col {...projectCoordinatorSpan}>
                                            <h4>Contractor</h4>
                                            <p>{procuringEntityPackage?.contract?.contractor.name || 'N/A'}</p>

                                        </Col>

                                        <Col {...implementingAgencySpan}>
                                            <h4>Construction Supervision Consultant</h4>
                                            <p>{procuringEntityPackage?.contract?.contractor.name || 'N/A'}</p>
                                        </Col>
                                        <Col {...projectsLocationSpan}>
                                            <h4>SubProjects</h4>
                                            {procuringEntityPackage?.sub_projects.length || 'N/A'}
                                        </Col>
                                        <Col {...lastUpdateSpan} >
                                            <h4>Last updated</h4>
                                            <p>{procuringEntityPackage?.updated_at ? isoDateToHumanReadableDate(procuringEntityPackage?.updated_at) : 'N/A'}</p>
                                        </Col>
                                    </Row>
                                </section>
                                </div>
                                <PackageHomeNavMenu match={match} />
                            </div>
                        </Content>
                    </Layout>
                </Content>
            </Spin>
        </Layout>
    ) : '';
}

const mapStateToProps = state => ({
    procuringEntityPackage: ProcuringEntitySelectors.getPackageSelector(state)
});

const mapDispatchToProps = {
    getProcuringEntityPackage: ProcuringEntityActions.getPackageStart
};

export default connect(mapStateToProps, mapDispatchToProps)(PackageDetails);
