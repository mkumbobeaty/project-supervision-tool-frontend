
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
    Form, Input, Button, Row, Col, Select,
    DatePicker,
} from 'antd';
import RegionLocationForm from "../../../../components/RegionLocationForm";
import { projectActions, projectSelectors } from "../../../../../redux/modules/projects";
import { bindActionCreators } from "redux";
import { projectDetailsActions, projectDetailsSelectors } from '../../ProjectsDetails/duck';

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
// get regions name  for displaying  on form
const getRegionsNameFromRegions = (regionsId, regions) => {
    const region = regions.find(({ id }) => id === regionsId);
    return region.name;
}

/**
 * @function
 * @name ProjectForm
 * @description renders form for creating project
 */
function ProjectForm({
    regions,
    createProject,
    next,
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
}) {
    const [visible, setVisible] = useState(false);
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        getProjectStatus();
        getBorrowers();
        getFundingOrgs();
        getAgencies();

        getEnvironmentalCategories();
    }, []);

    const showUserModal = () => {
        setVisible(true);
    };

    const hideUserModal = () => {
        setVisible(false);
    };

    const onFinish = (values) => {
        const { wb_project_id, code,
            name, country,
            description,
            project_status_id,
            environmental_category_id,
            approval_fy,
            approval_date,
            closing_date,
            borrower_id,
            implementing_agency_id,
            funding_organisation_id,
        } = values;

        const payload = { wb_project_id, code, name, country, description, project_status_id }
        const detailsPayload = {
            environmental_category_id,
            approval_fy,
            approval_date,
            closing_date,
            borrower_id,
            implementing_agency_id,
            funding_organisation_id,
        }
        localStorage.setItem("detailsPayload", JSON.stringify(detailsPayload));
        createProject(payload);
        next();
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

                    {/* start:type */}
                    <Row type="flex" justify="space-between">
                        <Col xxl={11} xl={11} lg={11} md={11} sm={24} xs={24}>
                            <Form.Item
                                label="Country"
                                name="country"
                                title="Country i.e Tanzania"
                                rules={[
                                    {
                                        required: false,
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={24} xs={24} span={12}>
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
                    </Row>
                    <Form.Item
                        label="Borrowers"
                        name="borrower_id"
                        title="Borrower e.g Ministry of Finance"
                    >
                        <Select
                            mode="multiple"

                        >
                            {borrowers.map((borrower) => (
                                <Select.Option value={borrower.id}>{borrower.name}</Select.Option>
                            ))}
                        </Select>
                    </Form.Item>
                    {/* end:borrower */}

                    {/* start:agencies */}
                    <Form.Item
                        label="Implementing Agency"
                        name="implementing_agency_id"
                        title="implementing agency e.g PO-LARG"
                    >
                        <Select
                            mode="multiple"
                        >
                            {agencies.map((agency) => (
                                <Select.Option value={agency.id}>{agency.name}</Select.Option>
                            ))}
                        </Select>
                    </Form.Item>
                    {/* end:agencies */}

                    {/* start:funding organisation  */}
                    <Form.Item
                        label="Funding Organizations"
                        name="funding_organisation_id"
                        title="funding organisation i.e The World Bank"
                    >
                        <Select showSearch>
                            {partiners.map((partiner) => (
                                <Select.Option value={partiner.id}>{partiner.name}</Select.Option>
                            ))}
                        </Select>
                    </Form.Item>
                    {/* end:funding organisation */}

                    {/* start:environmental category  */}
                    <Form.Item
                        label="Environmental Category"
                        name="environmental_category_id"
                        title="Environmental category i.e A"
                    >
                        <Select showSearch>
                            {environmentalCategories.map((environmentalCategory) => (
                                <Select.Option value={environmentalCategory.id}>{environmentalCategory.name}</Select.Option>
                            ))}
                        </Select>
                    </Form.Item>
                    {/* end:environmental category */}

                    {/* start: locations list */}
                    {/* <Form.Item
                        label="Project Locations"
                        shouldUpdate={(prevValues, curValues) => prevValues.users !== curValues.users}
                    >
                        {({ getFieldValue }) => {
                            const users = getFieldValue('users') || [];
                            return (
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'flex-start'
                                }}>
                                    {users.length ? (
                                        <ul>
                                            {users.map((user, index) => (
                                                <li key={index} className="user">
                                                    {getRegionsNameFromRegions(user.region, regions)}
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                            <div>
                                                <Typography.Text className="ant-form-text" type="secondary">
                                                    No location(s) yet, please add location(s)
                                        </Typography.Text>
                                            </div>
                                        )}
                                    <Button
                                        size="small"
                                        htmlType="button"
                                        style={{
                                            fontSize: '0.9em'
                                        }}
                                        onClick={showUserModal}
                                    >
                                        Add Location
                                </Button>
                                </div>
                            );
                        }}
                    </Form.Item> */}
                    {/* end: locations list */}


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
                    <Form.Item wrapperCol={{ span: 24 }} style={{ textAlign: "right" }}>
                        <Button
                            type="primary"
                            htmlType="submit"
                            style={{ marginLeft: 8 }}
                        >
                            Next
                    </Button>
                    </Form.Item>
                    {/* end:form actions */}

                </Form>
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

});

const mapDispatchToProps = (dispatch) => ({
    getRegions: bindActionCreators(projectActions.getRegionsStart, dispatch),
    createLocation: bindActionCreators(projectActions.createProjectLocationStart, dispatch),
    createProject: bindActionCreators(projectActions.createProjectStart, dispatch),
    getProjectStatus: bindActionCreators(projectActions.getProjectStatusStart, dispatch),
    getBorrowers: bindActionCreators(projectDetailsActions.getBorrowersStart, dispatch),
    getFundingOrgs: bindActionCreators(projectDetailsActions.getFundingOrgStart, dispatch),
    getAgencies: bindActionCreators(projectDetailsActions.getAgenciesStart, dispatch),
    getEnvironmentalCategories: bindActionCreators(projectActions.getEnvironmentalCategoriesStart, dispatch)
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

