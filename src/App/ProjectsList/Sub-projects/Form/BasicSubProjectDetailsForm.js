
import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {Form, Input, Button, Typography, Select} from 'antd';
import RegionLocationForm from "../../../components/RegionLocationForm";
import {projectActions, projectSelectors} from '../../../../redux/modules/projects';
import {bindActionCreators} from "redux";
import DistrictLocationForm from "./DistrictLocationForm";

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
    const region = regions.find(({ id }) => id === regionsId );
    return region.name;
}

/**
 * @function
 * @name BasicSubProjectDetailsForm
 * @description renders form for creating sub project
 */
function BasicSubProjectDetailsForm ({ getRegions, regions, createSubProject, next, projects, layers })  {
    const [visible, setVisible] = useState(false);
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        getRegions();
    }, []);

    const showUserModal = () => {
        setVisible(true);
    };

    const hideUserModal = () => {
        setVisible(false);
    };

    const onFinish = (values) => {
        console.log('onFinish called');
        console.log('create sub project values',{...values, locations });
        createSubProject({...values, locations });
        next();
    };

    const selected = null;

    return (
        <>
            <Form.Provider
                onFormFinish={(name, { values, forms }) => {
                    if (name === 'locationForm') {
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
                    autoComplete="off"
                    className="ProjectForm"
                >
                    <h4>Please Fill the form correctly</h4>

                    {/* start:sub project name */}
                    <Form.Item
                        label="Sub project Name"
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: "Sub Project name is required",
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    {/* end:sub project name */}

                    {/* start:Description */}
                    <Form.Item
                        label="Description"
                        name="description"
                        rules={[
                            {
                                required: true,
                                message: "Project description is required",
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    {/* end:Description */}


                    {/*start: project id */}
                    <Form.Item
                        label="Project"
                        name="project_id"
                        rules={[
                            {
                                required: true,
                                message: "Project is required",
                            },
                        ]}
                    >
                        <Select>
                            { projects.map(({ id, name}) => (
                                <Select.Option value={id}>{ name }</Select.Option>
                            ))}
                        </Select>
                    </Form.Item>
                    {/*end: project id */}

                    {/* start: locations list */}
                    <Form.Item
                        label=" Sub Project Project Locations"
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
                                    ): (
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
                    </Form.Item>
                    {/* end: locations list */}


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
                <DistrictLocationForm
                    visible={visible}
                    onCancel={hideUserModal}
                    locations={locations}
                    regions={regions}
                    layers={layers}
                    setLocations={setLocations}
                />
            </Form.Provider>
        </>
    );
}

const mapStateToProps = state => ({
    regions: projectSelectors.getRegionsSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
    getRegions: bindActionCreators(projectActions.getRegionsStart, dispatch),
    createSubProject: bindActionCreators(projectActions.createSubProjectStart, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(BasicSubProjectDetailsForm);

BasicSubProjectDetailsForm.propTypes = {
    regions: PropTypes.array,
    layers: PropTypes.array,
    projects: PropTypes.array,
    getRegions: PropTypes.func.isRequired,
    createSubProject: PropTypes.func.isRequired,
    next: PropTypes.func.isRequired,
}

BasicSubProjectDetailsForm.defaultProps = {
    regions: []
}
