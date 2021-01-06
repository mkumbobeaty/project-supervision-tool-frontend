
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
    componentDidMount() {
        const { getBorrowers, getAgencies, getCurrencies,getFundingOrgs } = this.props;
        getBorrowers();
        getAgencies();
        getCurrencies();
        getFundingOrgs()
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
        const {
            focalPeoples,
            posting,
            showForm,
            getSectors,
            sectors,
            project,
            project_location,
            currencies,
            createTotalCost,
            partiners,
            agencies,
            borrowers,
            amount_cost,
            commitment_cost,
            createCommitmentCost
        } = this.props

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
                    project_location={project_location}
                    handleBackButton={this.prev}
                    currencies={currencies}
                    createTotalCost={createTotalCost}
                    createCommitmentCost={createCommitmentCost}
                />

            },
            {
                title: 'Third',
                content: <ProjectDetailsForm
                    submittedValues={this.getProjectDetailFormValue}
                    agencies={agencies}
                    partiners= {partiners}
                    borrowers={borrowers}
                    project={project}
                    handleBackButton={this.prev}
                    amount_cost={amount_cost}
                    commitment_cost={commitment_cost}
                />

            },
            {
                title: 'fouth',
                content: <ProjectSectorForm
                    handleConfirmButton={this.handleConfirmButton}
                    getSectors={getSectors}
                    sectors={sectors}
                    project={project}
                    showForm={showForm}
                    posting={posting}
                    handleBackButton={this.prev} />

            },

        ];
        return (
            <>
                <Steps current={this.current}>
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
        sectors: projectSectorsSelectors.getSectors(state),
        showForm:projectSectorsSelectors.getShowFormSelector(state),
        posting:projectSectorsSelectors.getLoadingSelector(state),
        project: projectSelectors.getCreatedProjectSelector(state),
        project_location: projectSelectors.getProjectLocationSelector(state),
        agencies:projectDetailsSelectors.getAgencies(state),
        borrowers: projectDetailsSelectors.getBorrowers(state),
        partiners:projectDetailsSelectors.getFundingOrgs(state),
        currencies: projectDetailsSelectors.getCurrencies(state),
        amount_cost:projectDetailsSelectors.getCreatedAmountCost(state),
        commitment_cost:projectDetailsSelectors.getCreatedCommitmentCost(state),
    };
};

const mapDispatchToProps = {
    selectProject: projectOperation.selectProject,
    createProject: projectOperation.createProjectStart,
    createProjectLocation: projectOperation.createProjectLocationStart,
    getSectors: projectSectorsOperator.getSectorsStart,
    createProjectSector: projectSectorsOperator.createProjectSectorsStart,
    createTotalCost: projectDetailsOperator.createTotalCostStart,
    createCommitmentCost:projectDetailsOperator.createCommitmentCostStart,
    createProjectDetail: projectDetailsOperator.createProjectDetailsStart,
    getBorrowers: projectDetailsOperator.getBorrowersStart,
    getFundingOrgs: projectDetailsOperator.getFundingOrgStart,
    getAgencies: projectDetailsOperator.getAgenciesStart,
    getCurrencies: projectDetailsOperator.getCurrenciesStart,
}

export default connect(mapStateToProps, mapDispatchToProps)(CommonProjectForm);
