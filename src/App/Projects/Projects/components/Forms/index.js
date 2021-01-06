
import React, { Component } from "react";
import { Steps, Button, message } from 'antd';
import { connect } from "react-redux";
import ProjectForm from './projectForm';
import ProjectSectorForm from './projectSectorForm'
import { projectSectorsOperator, projectSectorsSelectors } from "../../../ProjectsSectors/duck";
import { projectOperation, projectSelectors } from '../../../duck';
import ProjectLocationForm from "./projectLocationForm";
import { projectDetailsOperator, projectDetailsSelectors } from "../../../ProjectsDetails/duck";
import ProjectDetailsForm from "./projectDetailsForm";
import agencies from "../../../../../API/agencies";

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
    }

    getProjectLocationFormValue = (values) => {
        const { createProjectLocation } = this.props
        createProjectLocation(values)
    }

    getProjectDetailFormValue = (values) => {
        const {createProjectDetail} = this.props;
        createProjectDetail(values)
    }

    handleConfirmButton = (values) => {
        const { createProjectSector, handleAfterCloseForm } = this.props;
        createProjectSector(values);
        handleAfterCloseForm();

    }


    render() {
        const { current } = this.state
        const {
            regions,
            getDistricts,
            focalPeoples,
            posting,
            districts,
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
        } = this.props

        const steps = [

            {
                title: 'First',
                content: <ProjectLocationForm
                    handleNextButton={this.next}
                    submittedValues={this.getProjectLocationFormValue}
                    regions={regions}
                    getDistricts={getDistricts}
                    posting={posting}
                    districts={districts}
                />
            },
            {
                title: 'Second',
                content: <ProjectForm
                    handleNextButton={this.next}
                    submittedValues={this.getProjectFormValue}
                    focalPeoples={focalPeoples}
                    project_location={project_location}
                    handleBackButton={this.prev}
                    currencies={currencies}
                    createTotalCost={createTotalCost}
                />

            },
            {
                title: 'Third',
                content: <ProjectDetailsForm
                    handleNextButton={this.next}
                    submittedValues={this.getProjectDetailFormValue}
                    agencies={agencies}
                    partiners= {partiners}
                    borrowers={borrowers}
                    project={project}
                    handleBackButton={this.prev}
                    currencies={currencies}
                    amount_cost={amount_cost}
                    createTotalCost={createTotalCost}
                />

            },
            {
                title: 'fouth',
                content: <ProjectSectorForm
                    handleConfirmButton={this.handleConfirmButton}
                    getSectors={getSectors}
                    sectors={sectors}
                    project={project}
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
        project: projectSelectors.getCreatedProjectSelector(state),
        project_location: projectSelectors.getProjectLocation(state),
        currencies: projectDetailsSelectors.getCurrencies(state),
        agencies:projectDetailsSelectors.getAgencies(state),
        borrowers: projectDetailsSelectors.getBorrowers(state),
        partiners:projectDetailsSelectors.getFundingOrgs(state),
        amount_cost:projectDetailsSelectors.getCreatedAmountCost(state)
    };
};

const mapDispatchToProps = {
    selectProject: projectOperation.selectProject,
    createProject: projectOperation.createProjectStart,
    createProjectLocation: projectOperation.createProjectLocationStart,
    getSectors: projectSectorsOperator.getSectorsStart,
    createProjectSector: projectSectorsOperator.createProjectSectorsStart,
    createTotalCost: projectDetailsOperator.createTotalCostStart,
    createProjectDetail: projectDetailsOperator.createProjectDetailsStart,
    getBorrowers: projectDetailsOperator.getBorrowersStart,
    getFundingOrgs: projectDetailsOperator.getFundingOrgStart,
    getAgencies: projectDetailsOperator.getAgenciesStart,
    getCurrencies: projectDetailsOperator.getCurrenciesStart,
}

export default connect(mapStateToProps, mapDispatchToProps)(CommonProjectForm);
