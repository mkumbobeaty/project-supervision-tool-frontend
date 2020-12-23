import React from "react";
import { Steps, Button, message } from 'antd';
import ProjectForm from '../Form';
import ProjectSectorForm from '../../../ProjectsSectors/Form'
const { Step } = Steps;

const steps = [
    {
        title: 'First',
        content: <ProjectForm />
    },
    {
        title: 'Second',
        content: <ProjectSectorForm />
    },
    {
        title: 'Last',
        content: 'Last-content',
    },
];

const CommonProjectForm = () => {
    const [current, setCurrent] = React.useState(0);

    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };

    return (
        <>
            <Steps current={current}>
                {steps.map(item => (
                   <h4>Please fill the data</h4>
                ))}
            </Steps>
            <div className="steps-content">{steps[current].content}</div>
            <div className="steps-action">
            {current > 0 && (
                    <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                        Previous
                    </Button>
                )}
                {current < steps.length - 1 && (
                    <Button type="primary" onClick={() => next()}>
                        Next
                    </Button>
                )}
                {current === steps.length - 1 && (
                    <Button type="primary" onClick={() => message.success('Processing complete!')}>
                        Done
                    </Button>
                )}
               
            </div>
        </>
    );
};

export default CommonProjectForm