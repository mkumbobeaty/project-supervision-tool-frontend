
import React, {useEffect, useState} from 'react';
import API from '../../../../API';
import PropTypes from 'prop-types';
import {
    Form, Button, Select
} from 'antd';
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
 * @name ProcuringEntityForm
 * @description renders form for creating project
 */
function ProcuringEntityForm({
    handleAfterSubmit,
    createProcuringEntity,
    isEditForm,
    selected,
    loading,
    match,
    updateProcuringEntity,
}) {

    const [projects, setProjects] = useState([]);
    const [agencies, setAgencies] = useState([]);
    const [components, setComponents] = useState([]);
    const [subComponents, setSubComponents] = useState([]);

    useEffect(() => {
        API.getAllAgencies()
            .then(res => setAgencies(res.data.data));
        if (match.params?.id) {
            API.getProject(match.params?.id)
                .then(res => {
                    setProjects([res.data]);
                    if (selected) {
                        setComponents(res.data.components);
                        const component = res.data.components.find(({id}) => id === selected.project_component_id);
                        if(component) setSubComponents(component.sub_components);
                    }
                })
        }
        else {
            API.getProjects()
                .then(res => {
                    setProjects(res.data.data);
                    if (selected) {
                        const project = res.data.data.find(({id}) => selected.project_id === id);
                        setComponents(project.components);
                        const component = project.components.find(({id}) => id === selected.project_component_id);
                        setSubComponents(component.sub_components);
                    }
                })
        }
    }, [])


    const onFinish = (values) => {
        const payload = {
            ...values,
        };

        if (isEditForm) {
            updateProcuringEntity(payload, selected.id);
        }
        else {
            createProcuringEntity(values);
        }
        handleAfterSubmit();
    }

    const handleOnProjectChange = value => {
        const project = projects.find(({id}) => value === id);
        setComponents(project.components);
    }

    const handleOnComponentChange = value => {
        const component = components.find(({id}) => value === id);
        setSubComponents(component.sub_components);
    }

    return (
        <>
            <Form.Provider onFormFinish={(name, { values, forms }) => { }}>
                <Form
                    labelCol={labelCol}
                    wrapperCol={wrapperCol}
                    name="basicForm"
                    onFinish={onFinish}
                    autoComplete="off"
                    className="ProcuringEntityForm"
                >

                    {/* start: Agency */}
                    <Form.Item
                        label="Agency"
                        name="agency_id"
                        rules={[
                            {
                                required: true,
                                message: "Agency is required",
                            },
                        ]}
                        title="agency e.g ilala"
                        initialValue={
                            selected?.agency?.id ? selected?.agency?.id : ''
                        }
                    >
                        <Select
                            showSearch
                            optionFilterProp="children"

                        >
                            {
                                agencies?.map((agency) => (
                                    <Select.Option value={agency.id}>{agency.name}</Select.Option>
                                ))}
                        </Select>
                    </Form.Item>
                    {/* end: Agency */}

                      {/* start: Project */}
                      <Form.Item
                        label="Project"
                        name="project_id"
                        title="Project e.g DMDP"
                        rules={[
                            {
                                required: true,
                                message: "Project is required",
                            },
                        ]}
                        initialValue={
                            selected?.project_id ? selected?.project_id : ''
                        }
                    >
                        <Select
                            showSearch
                            optionFilterProp="children"
                            onChange={handleOnProjectChange}
                        >
                            {projects.map((project) => (
                                <Select.Option value={project.id}>{project.name}</Select.Option>
                            ))}
                        </Select>
                    </Form.Item>
                    {/* end of Project */}



                    {/* start:Component */}
                    <Form.Item
                        label="Project Component"
                        name="project_component_id"
                        title="Project component Description e.g water recycle project"
                        initialValue={
                            selected?.project_component_id
                        }
                    >
                        <Select
                            showSearch
                            optionFilterProp="children"
                            onChange={handleOnComponentChange}
                        >
                            {components.map((component) => (
                                <Select.Option value={component.id}>{component.name}</Select.Option>
                            ))}
                        </Select>
                    </Form.Item>
                    {/* end:Component */}

                    {/* start:SubComponent */}
                    <Form.Item
                        label="Project Sub-Component"
                        name="project_sub_component_id"
                        title="Project sub-component Description e.g water recyle project"
                        initialValue={
                            selected?.project_sub_component?.id
                        }
                    >
                        <Select showSearch optionFilterProp="children"   >
                            {subComponents.map((sub_component) => (
                                <Select.Option value={sub_component.id}>{sub_component.name}</Select.Option>
                            ))}
                        </Select>
                    </Form.Item>
                    {/* end:SubComponent */}

                    {/* start:form actions */}
                    <Form.Item wrapperCol={{ span: 24 }} className='formAction'>
                        <Button
                            type="primary"
                            htmlType="submit"
                            style={{ marginLeft: 8 }}
                            loading={loading}

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

ProcuringEntityForm.propTypes = {
    createProcuringEntity: PropTypes.func.isRequired,
    getAgenciesActors: PropTypes.func.isRequired,
    getProjectSubComponent: PropTypes.func.isRequired,
    updateProcuringEntity:PropTypes.func.isRequired,
    handleAfterSubmit: PropTypes.func.isRequired,
    getProjects: PropTypes.func.isRequired,
    loading: PropTypes.bool,
    isEditForm: PropTypes.bool.isRequired,
    selected: PropTypes.object,
    projectSubComponents: PropTypes.array.isRequired,
    projects: PropTypes.array.isRequired,
    agencies: PropTypes.array.isRequired,
}

ProcuringEntityForm.defaultProps = {
    selected: {},
    projectSubComponents: [],
    projects:[],
    agencies: []
}

export default ProcuringEntityForm;



