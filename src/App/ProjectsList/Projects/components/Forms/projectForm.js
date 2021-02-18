
import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Form, Input, Button, Typography } from 'antd';
import RegionLocationForm from "../../../../components/RegionLocationForm";
import {projectActions, projectSelectors} from "../../../../../redux/modules/projects";
import {bindActionCreators} from "redux";

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
 * @name ProjectForm
 * @description renders form for creating project
 */
function ProjectForm ({ getRegions, regions, createProject, next })  {
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
      createProject({...values, locations });
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
            >
                <h4>Please Fill the form correctly</h4>

                {/* start:type */}
                <Form.Item
                    label="Project Id"
                    name="id"
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
                    <Input />
                </Form.Item>
                {/* end:Description */}


                {/* start: locations list */}
                <Form.Item
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
});

const mapDispatchToProps = (dispatch) => ({
    getRegions: bindActionCreators(projectActions.getRegionsStart, dispatch),
    createLocation: bindActionCreators(projectActions.createProjectLocationStart, dispatch),
    createProject: bindActionCreators(projectActions.createProjectStart, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectForm);

ProjectForm.propTypes = {
    regions: PropTypes.array,
    getRegions: PropTypes.func.isRequired,
    createProject: PropTypes.func.isRequired,
    next: PropTypes.func.isRequired,
}

ProjectForm.defaultProps = {
    regions: []
}
