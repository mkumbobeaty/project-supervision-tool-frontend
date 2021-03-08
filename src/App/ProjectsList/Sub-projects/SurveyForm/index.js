import React, {useState} from 'react';
import {Form, Input, Button} from 'antd';
import API from '../../../../API';

/* ui */
const labelCol = {
    xs: {span: 24},
    sm: {span: 24},
    md: {span: 24},
    lg: {span: 24},
    xl: {span: 24},
    xxl: {span: 24},
};
const wrapperCol = {
    xs: {span: 24},
    sm: {span: 24},
    md: {span: 24},
    lg: {span: 24},
    xl: {span: 24},
    xxl: {span: 24},
};


/**
 * @function
 * @name BasicSubProjectDetailsForm
 * @description renders form for creating sub project
 */
function SurveyForm(
    {
        onCancel,
        closeSubProjectSurveyForm,
        selected
    }
) {

    const [showMessage, setShowMessage] = useState(false);
    const [loading, setLoading] = useState(false);

    const onFinish = (values) => {
        const payload = {
            name: values.name, asset_type: 'survey', settings: {
                description: values.description
            }
        };
        setLoading(true)
        API.createSurvey(payload)
            .then(res => API.createSubProjectSurvey({
                survey_id: res.uid,
                category_name: 'sub_project_survey',
                sub_project_id: selected.id,
            })
                .then(res => {
                    setShowMessage(true);
                    setLoading(false);
                }));
    };


    return showMessage ? (
        <div>
            <h3>Your Survey has been created successfully</h3>
            <p>Your survey has been created and linked with the SubProject.</p>
            <p>The Survey form is now Empty, click link below to open Kobotoolbox and fill the  survey with questions</p>
            <div><a href="https://kf.survey-project-supervision-tool.ga/">Kobotoolbox(https://kf.survey-project-supervision-tool.ga)</a></div>
        </div>
    ): (
        <Form
            labelCol={labelCol}
            wrapperCol={wrapperCol}
            name="surveyForm"
            onFinish={onFinish}
            autoComplete="off"
            className="surveyForm"
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
                <Input/>
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
                <Input/>
            </Form.Item>
            {/* end:Description */}

            {/* start:form actions */}
            <Form.Item wrapperCol={{span: 24}} style={{textAlign: "right"}}>
                <Button
                    type="primary"
                    style={{marginRight: 8}}
                    onClick={onCancel}
                >
                    Cancel
                </Button>
                <Button
                    type="primary"
                    htmlType="submit"
                    loading={loading}
                    style={{marginLeft: 8}}
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
