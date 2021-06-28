
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
    Form, Button, Select, Input,
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

const { TextArea } = Input;


/**
 * @function
 * @name PackageForm
 * @description renders form for creating project
 */
function PackageForm({
    createPackage,
    isEditForm,
    selected,
    loading,
    updatePackage,
    procuringEntities,
    getProcuringEntities
}) {


    useEffect(() => {
        getProcuringEntities()
    }, [])


    const onFinish = (values) => {
        const payload = {
            ...values,
        };

        if (isEditForm) {
            updatePackage(payload, selected.id);
        }
        else {
            createPackage(values);
        }
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
                    className="PackageForm"
                >

                    {/* start: Agency */}
                    <Form.Item
                        label="Package name"
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: "name is required",
                            },
                        ]}
                        title="name e.g package 1"
                    initialValue={
                        selected?.name ? selected?.name : ''
                    }
                    >
                        <Input />
                    </Form.Item>
                    {/* end: Agency */}

                    {/* start: Description */}
                    <Form.Item
                        label="Description"
                        name="description"
                        title="descriptio e.g DMDP"
                        rules={[
                            {
                                required: true,
                                message: "Description is required",
                            },
                        ]}
                        initialValue={
                            selected?.description? selected?.description: ''
                        }
                    >
                        <TextArea autoSize={{ minRows: 2, maxRows: 6 }} />
                    </Form.Item>
                    {/* end of Description */}

                    {/* start:Procuring Entity */}
                    <Form.Item
                        label="Procuring Entity"
                        name="procuring_entity_id"
                        title="Procuring entity e.g Ilala"
                    // initialValue={
                    //     selected?.project_component_id
                    // }
                    >
                        <Select
                            showSearch
                            optionFilterProp="children"

                        >
                            {procuringEntities.map((procuringEntity) => (
                                <Select.Option value={procuringEntity.id}>{procuringEntity.agency.name}</Select.Option>
                            ))}
                        </Select>
                    </Form.Item>
                    {/* end:Procuring Entity  */}

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

PackageForm.propTypes = {
    createPackage: PropTypes.func.isRequired,
    getProcuringEntity: PropTypes.func.isRequired,
    updatePackage: PropTypes.func.isRequired,
    procuringEntity: PropTypes.array.isRequired,
    loading: PropTypes.bool,
    isEditForm: PropTypes.bool.isRequired,
    selected: PropTypes.object,

}

PackageForm.defaultProps = {
    selected: {},
    procuringEntity: [],

}

export default PackageForm;



