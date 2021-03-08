
import React from 'react';
import { Form, Input, Button } from 'antd';

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
 * @name BasicSubProjectDetailsForm
 * @description renders form for creating sub project
 */
function SurveyForm() {

    const onFinish = (values) => console.log(values);


    return (
        <Form
            labelCol={labelCol}
            wrapperCol={wrapperCol}
            name="basicForm"
            onFinish={onFinish}
            autoComplete="off"
            className="ProjectForm"
        >
            <h4>Please Fill the form correctly</h4>

            {/* start: name */}
            <Form.Item
                label="Name"
                name="name"
                rules={[
                    {
                        required: true,
                        message: "Survey name is  required",
                    },
                ]}
            >
                <Input />
            </Form.Item>
            {/* end: name */}

            {/* start:Description */}
            <Form.Item
                label="Description"
                name="description"
                rules={[
                    {
                        required: true,
                        message: "Survey description is required",
                    },
                ]}
            >
                <Input />
            </Form.Item>
            {/* end:Description */}

            {/* start:form actions */}
            <Form.Item wrapperCol={{ span: 24 }} style={{ textAlign: "right" }}>
                <Button
                    type="primary"
                    htmlType="submit"
                    style={{ marginLeft: 8 }}
                >
                    Save
                </Button>
            </Form.Item>
            {/* end:form actions */}
        </Form>
    );
}


export default SurveyForm;

SurveyForm.propTypes = {}

SurveyForm.defaultProps = {}
