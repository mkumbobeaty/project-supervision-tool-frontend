
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
    Form, Input, Button, Row, Col, Select,
    DatePicker,
    Typography
} from 'antd';
import RegionLocationForm from "../../../../components/RegionLocationForm";
import { projectActions, projectSelectors } from "../../../../../redux/modules/projects";
import { bindActionCreators } from "redux";
import { projectDetailsActions, projectDetailsSelectors } from '../../../../../redux/modules/projectDetails';
import { generateDateString, generateYearString } from "../../../../../Util";
import CommitmentAmountForm from "./CommitmentAmountForm";
import TotalProjectCostForm from "./TotalProjectCostForm";
import { usersActions, usersSelectors } from '../../../../../redux/modules/users';
/* ui */
const labelCol = {
    xs: { span: 24 },
    sm: { span: 24 },
    md: { span: 24 },
    lg: { span: 24 },
    xl: { span: 24 },
    xxl: { span: 24 },
};
const wrapperCol = {
    xs: { span: 24 },
    sm: { span: 24 },
    md: { span: 24 },
    lg: { span: 24 },
    xl: { span: 24 },
    xxl: { span: 24 },
};


/**
 * @function
 * @name getCurrencyIsoFromCurrencies
 * @description gets currrency  iso from array of currencies
 */
const getCurrencyIsoFromCurrencies = (currency_id, currencies) => {
    const currency = currencies.find(({ id }) => id === currency_id);
    return currency.iso;
};

/**
 * @function
 * @name ProjectForm
 * @description renders form for creating project
 */
function ProjectForm({
    getRegions,
    regions,
    createProject,
    handleConfirmButton,
    getProjectStatus,
    statuses,
    getAgencies,
    getBorrowers,
    getEnvironmentalCategories,
    getFundingOrgs,
    borrowers,
    partiners,
    agencies,
    environmentalCategories,
    getLayers,
    layers,
    getCurrency,
    currency,
    users,
    getUsers
}) {
    const [visible, setVisible] = useState(false);
    const [locations, setLocations] = useState([]);
    const [visibleTotalProjectCost, setVisibleTotalProjectCost] = useState(false);
    const [VisibleCommitmentAmount, setVisibleCommitmentAmount] = useState(false);
    const [commitment_amount_id, setCommitmentAmount] = useState(null);
    const [total_project_cost_id, setTotalProjetCost] = useState(false);


    useEffect(() => {
        getProjectStatus();
        getBorrowers();
        getFundingOrgs();
        getAgencies();
        getRegions()
        getEnvironmentalCategories();
        getLayers();
        getCurrency();
        getUsers();
    }, []);

    const hideUserModal = () => {
        setVisible(false);
    };

    const showTotalProjectCostModal = () => {
        setVisibleTotalProjectCost(true);
    };

    const hideTotalProjectCostModal = () => {
        setVisibleTotalProjectCost(false);
    };


    const showCommitmentAmountModal = () => {
        setVisibleCommitmentAmount(true)
    };

    const hideCommitmentAmountModal = () => {
        setVisibleCommitmentAmount(false)
    };

    const setCommitmentAmountId = (id) => {
        setCommitmentAmount(id);
      };
    
    const  setTotalProjectCostId = (id) => {
        setTotalProjetCost(id)
      };

    const onFinish = (values) => {
        const approval_date = generateDateString(values.approval_date);
        const approval_fy = generateYearString(values.approval_fy);
        const closing_date = generateDateString(values.closing_date);
        const payload = {
            ...values,
            approval_date,
            approval_fy,
            closing_date,
            commitment_amount_id: commitment_amount_id,
            total_project_cost_id: total_project_cost_id,
        };
   
        createProject(payload);
        handleConfirmButton();
    };

    const selected = null;

    return (
        <>
            <Form.Provider
                onFormFinish={(name, { values, forms }) => {
                    if (name === 'userForm') {
                        const { basicForm } = forms;
                        const users = basicForm.getFieldValue('users') || [];
                        basicForm.setFieldsValue({
                            users: [...users, values],
                        });
                        setVisible(false);
                    }
                    // handling commitment amount form
                    if (name === 'commitmentAmountForm') {
                        const { basicForm } = forms;
                        basicForm.setFieldsValue({
                            commitmentAmountValue: values
                        });
                        setVisibleCommitmentAmount(false);
                    }

                    // handling total project cost form
                    if (name === 'totalProjectCostForm') {
                        const { basicForm } = forms;
                        basicForm.setFieldsValue({
                            totalProjectCostValue: values
                        });
                        setVisibleTotalProjectCost(false);
                    }


                }}
            >

                <Form
                    labelCol={labelCol}
                    wrapperCol={wrapperCol}
                    name="basicForm"
                    onFinish={onFinish}
                    projectsValues={{
                        projects_id: selected?.projects_id,
                        name: selected?.name,
                        leaders: selected?.leaders,
                        description: selected?.description,
                    }}
                    autoComplete="off"
                    className="ProjectForm"
                    marginBottom='0px'
                >
                    <h4>Please Fill the form correctly</h4>

                    {/* start:type */}
                    <Row type="flex" justify="space-between">
                        <Col xxl={11} xl={11} lg={11} md={11} sm={24} xs={24}>
                            <Form.Item
                                label="Project Id"
                                name="wb_project_id"
                                title="Project id e.g 1236567"
                                rules={[
                                    {
                                        required: true,
                                        message: "Project identity is required",
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24} span={12}>
                            {/* start:code */}
                            <Form.Item
                                label="Project Code"
                                name="code"
                                rules={[
                                    {
                                        required: true,
                                        message: "Project code is required",
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            {/* end:code */}
                        </Col>
                    </Row>


                    {/* end:project id */}

                    {/* start:project name */}
                    <Form.Item
                        label="Project Name"
                        name="name"
                        title="Project name e.g DMDP"
                        rules={[
                            {
                                required: true,
                                message: "Project name is required",
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    {/* end:project name */}

                    {/* start:Description */}
                    <Form.Item
                        label="Description"
                        name="description"
                        title="Project Description e.g water recyle project"
                        rules={[
                            {
                                required: true,
                                message: "Project description is required",
                            },
                        ]}
                    >
                        <Input.TextArea />
                    </Form.Item>
                    {/* end:Description */}

                    {/* start:shapefile */}
                    <Form.Item
                        label="Projects ShapeFIle"
                        name="shapefiles"
                        title="Shapefile"
                        rules={[
                            {
                                required: false,
                            },
                        ]}
                    >
                        <Select mode="multiple">
                            {layers.map(({ title, typename }) => (
                                <Select.Option value={typename}>{title}</Select.Option>
                            ))}
                        </Select>

                    </Form.Item>
                    {/* end:Shapefile */}


                    {/* start:funding organisation  */}
                    <Form.Item
                        label="Funding Organizations"
                        name="funding_organisation_id"
                        title="funding organisation i.e The World Bank"
                    >
                        <Select showSearch optionFilterProp="children">
                            {partiners.map((partiner) => (
                                <Select.Option value={partiner.id}>{partiner.name}</Select.Option>
                            ))}
                        </Select>
                    </Form.Item>
                    {/* end:funding organisation */}
                    <Form.Item
                        label="Implementing Agency"
                        name="implementing_agency_id"
                        title="implementing agency e.g PO-LARG"
                    >
                        <Select
                            showSearch
                            optionFilterProp="children"

                        >
                            {agencies.map((agency) => (
                                <Select.Option value={agency.id}>{agency.name}</Select.Option>
                            ))}
                        </Select>
                    </Form.Item>
                    {/* end:agencies */}

                    {/* start:users */}
                    <Form.Item
                        label="WB Leaders"
                        name="leaders"
                        title="WB team Leaders e.g Elis Adam"
                    >
                        <Select mode="multiple"  >
                            {users.map((user) => (
                                <Select.Option value={user.id}>{user.first_name} {user.last_name}</Select.Option>
                            ))}
                        </Select>
                    </Form.Item>
                    {/* end:agencies */}

                    <Row type="flex" justify="space-between">
                        <Col xxl={11} xl={11} lg={11} md={11} sm={24} xs={24}>
                            <Form.Item
                                label="Project Status"
                                name="project_status_id"
                                title="Project status e.g Active"
                                type="boolean"
                                rules={[
                                    {
                                        required: true,
                                        message: "Project status is required",
                                    },
                                ]}
                            >
                                <Select
                                    showSearch
                                    optionFilterProp="children"

                                >
                                    {statuses.map(({ name, id }) => (
                                        <Select.Option value={id} style={{ textTransform: 'Capitalize' }}>{name}</Select.Option>
                                    ))}
                                </Select>
                            </Form.Item>

                        </Col>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24} span={12}>

                            <Form.Item
                                label="Region"
                                name="regions"
                                rules={[
                                    {
                                        required: true,
                                        message: "Region is required",
                                    },
                                ]}
                            >
                                <Select mode="multiple">
                                    {regions.map(({ id, name }) => (
                                        <Select.Option value={id}>{name}</Select.Option>
                                    ))}
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row justify="space-between">
                        <Col xxl={11} xl={11} lg={11} md={11} sm={24} xs={24}>
                            {/* start: commitment amount */}
                            <Form.Item
                                label="Total Project Cost"
                                shouldUpdate={(prevValues, curValues) => prevValues.totalProjectCostValue !== curValues.totalProjectCostValue}
                            >
                                {({ getFieldValue }) => {
                                    const totalProjectCostValue = getFieldValue('totalProjectCostValue') || null;
                                    return (
                                        <div>
                                            {totalProjectCostValue ? (
                                                <Typography.Text className="ant-form-text" type="success" strong={true}>
                                                    {`${totalProjectCostValue.amount} ${getCurrencyIsoFromCurrencies(totalProjectCostValue.currency_id, currency)}`}
                                                </Typography.Text>
                                            ) : (
                                                    <Typography.Text className="ant-form-text" type="secondary">
                                                        Click Add to fill total project cost
                                                    </Typography.Text>
                                                )}
                                            <Button
                                                size="small"
                                                htmlType="button"
                                                style={{
                                                    fontSize: '0.9em'
                                                }}
                                                onClick={showTotalProjectCostModal}
                                            >
                                                Add
                                        </Button>
                                        </div>
                                    );
                                }}
                            </Form.Item>
                            {/* end: commitment amount */}
                        </Col>

                        <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24} span={12}>
                            {/* start: commitment amount */}
                            <Form.Item
                                label="Commitment Amount"
                                shouldUpdate={(prevValues, curValues) => prevValues.commitmentAmountValue !== curValues.commitmentAmountValue}
                            >
                                {({ getFieldValue }) => {
                                    const commitmentAmountValue = getFieldValue('commitmentAmountValue') || null;
                                    return (
                                        <div>
                                            {commitmentAmountValue ? (
                                                <Typography.Text className="ant-form-text" type="success" strong={true}>
                                                    {`${commitmentAmountValue.amount} ${getCurrencyIsoFromCurrencies(commitmentAmountValue.currency_id, currency)}`}
                                                </Typography.Text>
                                            ) : (
                                                    <Typography.Text className="ant-form-text" type="secondary">
                                                        Click Add to fill commitment amount
                                                    </Typography.Text>
                                                )}
                                            <Button
                                                size="small"
                                                htmlType="button"
                                                style={{
                                                    fontSize: '0.9em'
                                                }}
                                                onClick={showCommitmentAmountModal}
                                            >
                                                Add
                                            </Button>
                                        </div>
                                    );
                                }}
                            </Form.Item>
                            {/* end: commitment amount */}
                        </Col>
                    </Row>

                    {/* start:type */}
                    <Row type="flex" justify="space-between">
                        <Col xxl={11} xl={11} lg={11} md={11} sm={24} xs={24}>
                            {/* start:borrower */}
                            <Form.Item
                                label="Borrowers"
                                name="borrower_id"
                                title="Borrower e.g Ministry of Finance"
                            >
                                <Select>
                                    {borrowers.map((borrower) => (
                                        <Select.Option value={borrower.id}>{borrower.name}</Select.Option>
                                    ))}
                                </Select>
                            </Form.Item>
                            {/* end:borrower */}
                        </Col>

                        <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24} span={12}>
                            {/* start:environmental category  */}
                            <Form.Item
                                label="Environmental Category"
                                name="environmental_category_id"
                                title="Environmental category i.e A"
                            >
                                <Select showSearch
                                    optionFilterProp="children"

                                >
                                    {environmentalCategories.map((environmentalCategory) => (
                                        <Select.Option value={environmentalCategory.id}>{environmentalCategory.name}</Select.Option>
                                    ))}
                                </Select>
                            </Form.Item>
                            {/* end:environmental category */}
                        </Col>
                    </Row>

                    <Row justify="space-between">
                        <Col span={8}>
                            <Form.Item
                                label="Approval FY"
                                name="approval_fy"
                                title="project approval fiscal year date e.g 06-20-2020"
                                rules={[
                                    {
                                        required: true,
                                        message: "project approval fiscal year date is required",
                                    },
                                ]}
                            >
                                <DatePicker picker="year" />
                            </Form.Item>
                        </Col>

                        {/* end:project approval fiscal year */}
                        <Col span={8}>
                            <Form.Item
                                label="Approval Date"
                                name="approval_date"
                                title="project approval date e.g 06-20-2020"
                                rules={[
                                    {
                                        required: true,
                                        message: "project approval  date is required",
                                    },
                                ]}
                            >
                                <DatePicker />
                            </Form.Item>
                        </Col>
                        {/* end:project approval date */}

                        {/* start:end date */}
                        <Col span={8}>
                            <Form.Item
                                label="Closing Date"
                                title="project closing end date e.g 07-30-2020"
                                name="closing_date"
                                rules={[
                                    {
                                        required: true,
                                        message: "projects end date is required",
                                    },
                                ]}
                            >
                                <DatePicker />
                            </Form.Item>
                        </Col>
                        {/* end:end date */}
                    </Row>

                    {/* start:form actions */}
                    <Form.Item wrapperCol={{ span: 24 }} style={{ textAlign: "right", marginTop: "10px" }}>
                        <Button
                            type="primary"
                            htmlType="submit"
                            style={{ marginLeft: 8 }}
                        >
                            Submit
                    </Button>
                    </Form.Item>
                    {/* end:form actions */}
                </Form>

                <CommitmentAmountForm
                    visible={VisibleCommitmentAmount}
                    onCancel={hideCommitmentAmountModal}
                    setCommitmentAmountId={setCommitmentAmountId}
                    currency={currency}
                />
                <TotalProjectCostForm
                    visible={visibleTotalProjectCost}
                    onCancel={hideTotalProjectCostModal}
                    setTotalProjectCostId={setTotalProjectCostId}
                    currency={currency}
                />
                <RegionLocationForm
                    visible={visible}
                    onCancel={hideUserModal}
                    locations={locations}
                    regions={regions}
                    setLocations={setLocations}
                />
            </Form.Provider>
        </>
    );
}

const mapStateToProps = state => ({
    regions: projectSelectors.getRegionsSelector(state),
    statuses: projectSelectors.getProjectStatusSelector(state),
    borrowers: projectDetailsSelectors.getBorrowersSelector(state),
    environmentalCategories: projectSelectors.getEnvironmentalCategoriesSelector(state),
    partiners: projectDetailsSelectors.getFundingOrgsSelector(state),
    agencies: projectDetailsSelectors.getAgenciesSelector(state),
    layers: projectSelectors.getLayers(state),
    currency: projectDetailsSelectors.getCurrenciesSelector(state),
    users: usersSelectors.getUsersSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
    getRegions: bindActionCreators(projectActions.getRegionsStart, dispatch),
    createLocation: bindActionCreators(projectActions.createProjectLocationStart, dispatch),
    createProject: bindActionCreators(projectActions.createProjectStart, dispatch),
    getProjectStatus: bindActionCreators(projectActions.getProjectStatusStart, dispatch),
    getBorrowers: bindActionCreators(projectDetailsActions.getBorrowersStart, dispatch),
    getFundingOrgs: bindActionCreators(projectDetailsActions.getFundingOrgStart, dispatch),
    getAgencies: bindActionCreators(projectDetailsActions.getAgenciesStart, dispatch),
    getEnvironmentalCategories: bindActionCreators(projectActions.getEnvironmentalCategoriesStart, dispatch),
    getLayers: bindActionCreators(projectActions.getLayersStart, dispatch),
    getCurrency: bindActionCreators(projectDetailsActions.getCurrenciesStart, dispatch),
    getUsers: bindActionCreators(usersActions.getUsersStart, dispatch),

});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectForm);

ProjectForm.propTypes = {
    regions: PropTypes.array,
    getRegions: PropTypes.func.isRequired,
    createProject: PropTypes.func.isRequired,
    next: PropTypes.func.isRequired,
    getProjectStatus: PropTypes.func.isRequired,
    statuses: PropTypes.array,
    getEnvironmentalCategories: PropTypes.func.isRequired,
    environmentalCategories: PropTypes.array,
    getBorrowers: PropTypes.func.isRequired,
    borrowers: PropTypes.array,
    getFundingOrgs: PropTypes.func.isRequired,
    partiners: PropTypes.array,
    getAgencies: PropTypes.func.isRequired,
    agencies: PropTypes.array
}

ProjectForm.defaultProps = {
    regions: [],
    statuses: [],
    borrowers: [],
    partiners: [],
    agencies: [],
    environmentalCategories: []


}

