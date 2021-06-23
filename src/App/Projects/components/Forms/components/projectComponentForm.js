
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
import { projectDetailsActions, projectDetailsSelectors } from '../../../../../redux/modules/projectDetails';
import { createDateFromString, generateDateString, generateYearString } from "../../../../../Util";
import CommitmentAmountForm from "./CommitmentAmountForm";
import TotalProjectCostForm from "./TotalProjectCostForm";
import { usersActions, usersSelectors } from '../../../../../redux/modules/users';
import TypographyComponent from '../../../../components/Typography';
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
 * @name ProjectComponentForm
 * @description renders form for creating project
 */
function ProjectComponentForm({
    selected,
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
    getUsers,
    isEditForm,
    updateProject,
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

    const setTotalProjectCostId = (id) => {
        setTotalProjetCost(id)
    };


    const onFinish = (values) => {
        const payload = {
            ...values,
        };
    
            debugger
            createProject(payload);
        handleConfirmButton();

    };
 
    return (
        <>
            <Form.Provider
                onFormFinish={(name, { values, forms }) => { }}
            >

                <Form
                    labelCol={labelCol}
                    wrapperCol={wrapperCol}
                    name="basicForm"
                    onFinish={onFinish}
                    initialValues={{
                        name: selected?.name,
                        description: selected?.description,
                    }}
                    autoComplete="off"
                    className="ProjectComponentForm"
                    marginBottom='0px'
                >
                    {/* start:project name */}
                    <Form.Item
                        label="Component Name"
                        name="name"
                        title="Project component name e.g priorty road"
                        rules={[
                            {
                                required: true,
                                message: "Project component name is required",
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
                        title="Project component Description e.g water recyle project"
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

                    {/* start:form actions */}
                    <Form.Item wrapperCol={{ span: 24 }} style={{ textAlign: "right", marginTop: "15px" }}>
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

            </Form.Provider>
        </>
    );
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = (dispatch) => ({
    createProject: bindActionCreators(projectActions.createProjectStart, dispatch),

});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectComponentForm);

ProjectComponentForm.propTypes = {
    createProject: PropTypes.func.isRequired,  
    selected:  PropTypes.object.isRequired,
}

ProjectComponentForm.defaultProps = {
    selected: {},
}

