
import React, { Component } from "react";
import { Steps, Button, message } from 'antd';
import { connect } from "react-redux";
import ProjectForm from './projectForm';
import ProjectSectorForm from './projectSectorForm'
import { projectSectorsOperator, projectSectorsSelectors } from "../../../ProjectsSectors/duck";
import { projectOperation, projectSelectors } from '../../../duck';
import { focalPeopleSelectors } from "../../../../FocalPeople/duck";

class CommonProjectForm extends Component {
    state = {
        current: 0
    }

    next = () => {
        this.setState({current:this.state.current + 1})
    };

    prev = () => {
        this.setState({current:this.state.current - 1})

    };

    handleConfirmButton = (values) => {
        const { createProjectSector } = this.props;
        createProjectSector(values)
    }

    getFinalStepValue = (values) => {
        const { createProjectSector } = this.props;
        createProjectSector(values)
    }

    getProjectFormValue = (values) => {
        const { createProject } = this.props
        createProject(values)
        localStorage.setItem("project_id", values.id);
    }


  steps = [
        {
            title: 'First',
            content: <ProjectForm handleNextButton={this.next} submittedValues={this.getProjectFormValue} />

        },
        {
            title: 'Second',
            content: <ProjectSectorForm handleConfirmButton={this.handleConfirmButton} handleBackButton={this.prev} submittedValues={this.getFinalStepValue} />

        },

    ];
    render() {
        const {current} = this.state
        return (
            <>
                <Steps current={this.current}>
                    {this.steps.map(item => (
                        <h4>Please fill the data</h4>
                    ))}
                </Steps>
                <div className="steps-content">{this.steps[current].content}</div>

            </>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        focalPeoples: focalPeopleSelectors.getFocalPeople(state),
        loading: projectSelectors.getProjectsLoadingSelector(state),
        sectors: projectSectorsSelectors.getSectors(state),
    };
};

const mapDispatchToProps = {
    selectProject: projectOperation.selectProject,
    createProject: projectOperation.createProjectStart,
    getSectors: projectSectorsOperator.getSectorsStart,
    createProjectSector: projectSectorsOperator.createProjectSectorsStart,
}

export default connect(mapStateToProps, mapDispatchToProps)(CommonProjectForm);
