
import React, { useEffect } from 'react';
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
    getProjectSubComponent,
    handleAfterSubmit,
    createProcuringEntity,
    isEditForm,
    selected,
    loading,
    getAgencies,
    projectSubComponents,
    agencies,
    updateProcuringEntity
}) {
    ;

    useEffect(() => {
        getAgencies();
        getProjectSubComponent();
    }, [])


    const onFinish = (values) => {
        const payload = {
            ...values,
        };

        if (isEditForm) {
            debugger
            updateProcuringEntity(payload, selected.id);
        }
        else {
            createProcuringEntity(values);
        }
        handleAfterSubmit();
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
                    {/* start:Implementing Agency */}
                    <Form.Item
                        label="Agency"
                        name="agency_id"
                        title="agency e.g ilala"
                        initialValue={
                            selected?.agency?.id
                        }
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
                    {/* end:Implementing Agency */}

                    {/* start:Description */}
                    <Form.Item
                        label="Project Sub-Component"
                        name="project_sub_component_id"
                        title="Project sub-component Description e.g water recyle project"
                        rules={[
                            {
                                required: true,
                                message: "Project sub-component is required",
                            },
                        ]}
                        initialValue={
                            selected?.project_sub_component?.id
                        }
                    >
                        <Select showSearch optionFilterProp="children"   >
                            {projectSubComponents.map((sub_component) => (
                                <Select.Option value={sub_component.id}>{sub_component.name}</Select.Option>
                            ))}
                        </Select>
                    </Form.Item>
                    {/* end:Description */}

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
    getAgencies: PropTypes.func.isRequired,
    getProjectSubComponent: PropTypes.func.isRequired,
    updateProcuringEntity:PropTypes.func.isRequired,
    loading: PropTypes.bool,
    isEditForm: PropTypes.bool.isRequired,
    handleAfterSubmit: PropTypes.func.isRequired,
    selected: PropTypes.object.isRequired,
    projectSubComponents: PropTypes.array.isRequired,
    agencies: PropTypes.array.isRequired,
}

ProcuringEntityForm.defaultProps = {
    selected: {},
    projectSubComponents: [],
    agencies: []
}

export default ProcuringEntityForm;



