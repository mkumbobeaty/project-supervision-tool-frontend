import React, { useEffect } from 'react';
import { Col, Layout, Row, Spin } from "antd";
import { ProcuringEntityActions, ProcuringEntitySelectors } from '../../../../redux/modules/ProcuringEntities';
import { connect } from "react-redux";
import { getIdFromUrlPath, isoDateToHumanReadableDate } from '../../../../Util'
import './styles.css';
import ProcuringEntityHomeNavMenu from "../../../navigation/ProcuringEntitiesHome";
import BaseLayout from '../../../layouts/BaseLayout';
import DynamicBreadcrumbs from '../../../components/DynamicBreadcrumbs';
const { Content } = Layout;

const projectIdSpan = { xxl: 6, xl: 6, lg: 6, md: 6, sm: 12, xs: 12 };
const commitmentSpan = { xxl: 6, xl: 6, lg: 6, md: 6, sm: 12, xs: 12 };
const projectLeadSpan = { xxl: 6, xl: 6, lg: 6, md: 6, sm: 12, xs: 12 };
const projectCoordinatorSpan = { xxl: 6, xl: 6, lg: 6, md: 0, sm: 12, xs: 12 };
const projectsLocationSpan = { xxl: 6, xl: 6, lg: 6, md: 6, sm: 12, xs: 12 };
const lastUpdateSpan = { xxl: 6, xl: 6, lg: 6, md: 0, sm: 12, xs: 12 };


const ProcuringEntityDetails = ({ match, procuringEntity, getProcuringEntity }) => {

    useEffect(() => {
        const id = getIdFromUrlPath(match.path, 4);
        getProcuringEntity(id);
    }, []);

    const breadcrumbs = procuringEntity ? [
        {
            title: 'Projects',
            url: '/projects',
            name: 'Projects'
        },
        {
            title: procuringEntity.project.code,
            url: `/projects/${procuringEntity.project.id}/`,
            name: procuringEntity.project.name
        },
        {
            title: `Procuring Entities`,
            url: `/projects/${procuringEntity.project.id}/procuring_entities`,
            name: `Procuring Entities under ${procuringEntity.project.name}(${procuringEntity.project.code})`
        },
        {
            title: `${procuringEntity.agency.name}`,
            url: match.url,
            name: `${procuringEntity.agency.name}`
        }
    ] : [];

    return procuringEntity ? (
        <BaseLayout breadcrumbs={<DynamicBreadcrumbs breadcrumbs={breadcrumbs} />}>
            <Layout className="project-layout">
                <Spin spinning={false} tip="Loading..." >
                    <Content className="contents">
                        <h3>{procuringEntity.agency.name}</h3>
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
                                                <Col {...commitmentSpan}>
                                                    <h4>Procuring Entity</h4>
                                                    <p>{procuringEntity.agency?.name ? procuringEntity.agency?.name : 'N/A'}</p>
                                                </Col>

                                                <Col {...projectLeadSpan}>
                                                    <h4>Packages</h4>
                                                    <p>{procuringEntity.packages.length}</p>

                                                </Col>

                                                <Col {...projectCoordinatorSpan}>
                                                    <h4>Contract</h4>
                                                    <p>{procuringEntity?.contract.name}</p>

                                                </Col>
                                                <Col {...projectsLocationSpan}>
                                                    <h4>Supervising Consultants</h4>
                                                    {procuringEntity?.contract.consultants.length}
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
        </BaseLayout>
    ) : '';
}

const mapStateToProps = state => ({
    procuringEntity: ProcuringEntitySelectors.getProcuringEntitySelector(state)
});

const mapDispatchToProps = {
    getProcuringEntity: ProcuringEntityActions.getProcuringEntityStart
};

export default connect(mapStateToProps, mapDispatchToProps)(ProcuringEntityDetails);
