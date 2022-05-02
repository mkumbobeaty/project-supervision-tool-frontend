import React, { useEffect } from 'react';
import { Col, Layout, Row, Spin } from "antd";
import { ProcuringEntityActions, ProcuringEntitySelectors } from '../../../../redux/modules/ProcuringEntities';
import { connect } from "react-redux";
import { getAmount, getIdFromUrlPath, isoDateToHumanReadableDate } from '../../../../Util'
import ProcuringEntityHomeNavMenu from "../../../navigation/ProcuringEntitiesHome";
import BaseLayout from '../../../layouts/BaseLayout';
import DynamicBreadcrumbs from '../../../components/DynamicBreadcrumbs';
import './styles.css';

const { Content } = Layout;

const columnSpan = { xxl: 6, xl: 6, lg: 6, md: 6, sm: 12, xs: 12 };

const ProcuringEntityDetails = ({ match, procuringEntity, getProcuringEntity, loading }) => {

    useEffect(() => {
        const id = getIdFromUrlPath(match.path, 4);
        getProcuringEntity(id);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

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
                <Spin spinning={loading} tip="Loading..." >
                    <Content className="contents">
                        <h3>{procuringEntity.agency.name}</h3>
                        <Layout className="project-inner-layout" >
                            <Content className="project-contents">
                                <div className="card-container">
                                    <div className="keyDetails grey-bgr">
                                        <h2 id="sider-title">Key Details</h2>
                                        <section className="container">
                                            <Row className="key-details">
                                                <Col {...columnSpan} className="contractName" >
                                                    <h4>Contract</h4>
                                                    <p>{procuringEntity?.contract?.name || 'N/A'}</p>
                                                </Col>
                                                <Col {...columnSpan}>
                                                    <h4>Contract Supervising Consultant</h4>
                                                    <p>{procuringEntity?.contract?.consortium_name || 'N/A'}</p>

                                                </Col>

                                                <Col {...columnSpan}>
                                                    <h4>Contract Number</h4>
                                                    {procuringEntity?.contract?.contract_no || "N/A"}
                                                </Col>
                                                <Col {...columnSpan}>
                                                    <h4>Total Packages</h4>
                                                    <p>{procuringEntity?.packages.length}</p>

                                                </Col>
                                                <Col {...columnSpan}>
                                                    <h4>Original Contract Sum </h4>
                                                    <p>{procuringEntity?.contract?.original_contract_sum ? getAmount(procuringEntity?.contract?.original_contract_sum) : "N/A"}</p>
                                                </Col>

                                                <Col {...columnSpan}>
                                                    <h4>Revised Contract Sum</h4>
                                                    <p>{procuringEntity?.contract?.revised_contract_sum ? getAmount(procuringEntity?.contract?.revised_contract_sum) : 'N/A'}</p>
                                                </Col>


                                                <Col {...columnSpan} >
                                                    <h4>Contract Signing Date</h4>
                                                    <p>{procuringEntity?.contract?.original_signing_date ? isoDateToHumanReadableDate(procuringEntity?.contract?.original_signing_date) : 'N/A'}</p>
                                                </Col>
                                                <Col {...columnSpan} >
                                                    <h4>Commencement Date</h4>
                                                    <p>{procuringEntity?.contract?.commencement_date ? isoDateToHumanReadableDate(procuringEntity?.contract?.commencement_date) : 'N/A'}</p>
                                                </Col>
                                                <Col {...columnSpan} >
                                                    <h4>End date of contract</h4>
                                                    <p>{procuringEntity?.contract?.end_date_of_contract ? isoDateToHumanReadableDate(procuringEntity?.contract?.end_date_of_contract) : 'N/A'}</p>
                                                </Col>
                                                <Col {...columnSpan} >
                                                    <h4> Contract period</h4>
                                                    <p>{procuringEntity?.contract?.contract_period ? `${procuringEntity?.contract?.contract_period} months` : 'N/A'} </p>
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
    procuringEntity: ProcuringEntitySelectors.getProcuringEntitySelector(state),
    loading: ProcuringEntitySelectors.loadProcuringEntitySelector(state)
});

const mapDispatchToProps = {
    getProcuringEntity: ProcuringEntityActions.getProcuringEntityStart
};

export default connect(mapStateToProps, mapDispatchToProps)(ProcuringEntityDetails);
