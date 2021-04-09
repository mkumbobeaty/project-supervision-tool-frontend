import React, {useEffect, useState} from 'react';
import {Form, Input, Button} from 'antd';
import API from '../../../API';

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
function SurveyForm({ selected }) {
    const [survey, setSurvey] = useState(null);

    useEffect(() => {
        const {surveys} = selected;
        const survey_id = surveys[0].survey_id;
        API.getAsset(survey_id)
            .then(res => setSurvey(res));
    }, []);
    return (
        <iframe
            src={survey?.deployment__links?.iframe_url}
            style={{width: '100%', height: '88vh', border: 'none'}}
        />
    );
}


export default SurveyForm;

SurveyForm.propTypes = {}

SurveyForm.defaultProps = {}
