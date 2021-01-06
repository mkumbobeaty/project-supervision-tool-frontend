
import React, { Component } from "react";
import { Steps } from 'antd';
import { connect } from "react-redux";
import ProjectForm from './projectForm';
import ProjectSectorForm from './projectSectorForm'
import { projectSectorsOperator, projectSectorsSelectors } from "../ProjectsSectors/duck";
import { projectOperation, projectSelectors } from '../../../duck';
import ProjectLocationForm from "./projectLocationForm";
import { projectDetailsOperator, projectDetailsSelectors } from "../ProjectsDetails/duck";
import ProjectDetailsForm from "./projectDetailsForm";

class CommonProjectForm extends Component {
    state = {
        current: 0
    }

    next = () => {
        this.setState({ current: this.state.current + 1 })
    };

    prev = () => {
        this.setState({ current: this.state.current - 1 })

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
        const {createProjectDetail} = this.props;
        createProjectDetail(values)
        this.next()
    }

    handleConfirmButton = (values) => {
        const { createProjectSector, handleAfterCloseForm,getProjects} = this.props;
        createProjectSector(values);
        handleAfterCloseForm();
        getProjects()
    }

    render() {
        const { current } = this.state
        const { focalPeoples,project } = this.props

        const steps = [

            {
                title: 'First',
                content: <ProjectLocationForm  submittedValues={this.getProjectLocationFormValue}  />
            },
            {
                title: 'Second',
                content: <ProjectForm
                    submittedValues={this.getProjectFormValue}
                    focalPeoples={focalPeoples}
                    handleBackButton={this.prev}
                />

            },
            {
                title: 'Third',
                content: <ProjectDetailsForm
                    submittedValues={this.getProjectDetailFormValue}
                    project={project}
                    handleBackButton={this.prev}
                />

            },
            {
                title: 'fouth',
                content: <ProjectSectorForm
                    handleConfirmButton={this.handleConfirmButton}
                    project={project}
                    handleBackButton={this.prev} />

            },

        ];
        return (
            <>
                <Steps current={this.current} key={steps.map(title => title)}>
                    {steps.map(item => (
                        <h4>Please fill the data</h4>
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
