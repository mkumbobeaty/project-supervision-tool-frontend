
import React, { Component } from "react";
import { Steps } from 'antd';
import { connect } from "react-redux";
import ProjectForm from './projectForm';
import ProjectSectorForm from './projectSectorForm'
import { projectSectorsOperator, } from "../ProjectsSectors/duck";
import { projectOperation, projectSelectors } from '../../../duck';
import ProjectLocationForm from "./projectLocationForm";
import { projectDetailsOperator, } from "../ProjectsDetails/duck";
import ProjectDetailsForm from "./projectDetailsForm";


const { Step } = Steps;

class CommonProjectForm extends Component {
    state = {
        current: 0
    }

    onChange = current => {
        console.log('onChange:', current);
        this.setState({ current });
    };

    next = () => {
        this.setState({ current: this.state.current + 1 })
        this.onChange(this.state.current)
    };

    prev = () => {
        this.setState({ current: this.state.current - 1 });
        this.onChange(this.state.current-1)

    };

    getProjectFormValue = (values) => {
        const { createProject } = this.props
        createProject(values)
        this.next()
    }

    getProjectLocationFormValue = (values) => {
        const { createProjectLocation } = this.props
        createProjectLocation(values)
        this.next()

    }

    getProjectDetailFormValue = (values) => {
        const { createProjectDetail } = this.props;
        createProjectDetail(values)
        this.next()
    }

    handleConfirmButton = (values) => {
        const { createProjectSector, handleAfterCloseForm, getProjects } = this.props;
        createProjectSector(values);
        handleAfterCloseForm();
        getProjects()
    }

    render() {
        const { current } = this.state
        const { focalPeoples, project } = this.props

        const steps = [

            {
                title: 'Step 1',
                content: <ProjectLocationForm submittedValues={this.getProjectLocationFormValue} />
            },
            {
                title: 'Step 2',
                content: <ProjectForm
                    submittedValues={this.getProjectFormValue}
                    focalPeoples={focalPeoples}
                    handleBackButton={this.prev}
                />

            },
            {
                title: 'Step 3',
                content: <ProjectDetailsForm
                    submittedValues={this.getProjectDetailFormValue}
                    project={project}
                    handleBackButton={this.prev}
                />

            },
            {
                title: 'Final',
                content: <ProjectSectorForm
                    handleConfirmButton={this.handleConfirmButton}
                    project={project}
                    handleBackButton={this.prev} />

            },

        ];
        return (
            <>
                <Steps current={current} key={steps.map(title => title)} >
                    {steps.map(item => (
                        <Step title={item.title} />
                    ))}
                </Steps>
                <div className="steps-content">{steps[current].content}</div>

            </>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        project: projectSelectors.getCreatedProjectSelector(state),
    };
};

const mapDispatchToProps = {
    createProject: projectOperation.createProjectStart,
    createProjectLocation: projectOperation.createProjectLocationStart,
    createProjectSector: projectSectorsOperator.createProjectSectorsStart,
    createProjectDetail: projectDetailsOperator.createProjectDetailsStart,
}

export default connect(mapStateToProps, mapDispatchToProps)(CommonProjectForm);
