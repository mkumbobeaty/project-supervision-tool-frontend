
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
        this.setState({ current });
        console.log(current)
    };

    next = () => {
        this.setState({ current: this.state.current + 1 })
        this.onChange(this.state.current)
    };

    prev = () => {
        this.setState({ current: this.state.current - 1 });
        this.onChange(this.state.current - 1)

    };

    getProjectFormValue = (values) => {
        localStorage.setItem("project_data", JSON.stringify(values));
        this.next()
    }

    getProjectLocationFormValue = (values) => {
        const { createProjectLocation } = this.props
        createProjectLocation(values)
    }

    handleSubmitProject = () => {
        const { project_location, createProject } = this.props
        const { id: location_id } = project_location;
        const locations = [location_id]
        const project = JSON.parse(localStorage.getItem('project_data'))
        const projectPayload = { ...project, locations };
        createProject(projectPayload)
        this.setState({ current: this.state.current + 1 })
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
        const { focalPeoples, project, } = this.props

        const steps = [

            {
                title: 'Step 1',
                content: <ProjectForm
                    submittedValues={this.getProjectFormValue}
                    focalPeoples={focalPeoples}
                />
            },
            {
                title: 'Step 2',
                content: <ProjectLocationForm submittedValues={this.getProjectLocationFormValue}  handleBackButton={this.prev} handleSubmitProject={this.handleSubmitProject}
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
                <Steps current={current} key={steps.map(title => title)} onChange={this.onChange}>
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
        project_location: projectSelectors.getProjectLocationSelector(state),

    };
};

const mapDispatchToProps = {
    createProject: projectOperation.createProjectStart,
    createProjectLocation: projectOperation.createProjectLocationStart,
    createProjectSector: projectSectorsOperator.createProjectSectorsStart,
    createProjectDetail: projectDetailsOperator.createProjectDetailsStart,
}

export default connect(mapStateToProps, mapDispatchToProps)(CommonProjectForm);
