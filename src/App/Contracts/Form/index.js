
import React, { Component } from "react";
import { Steps } from 'antd';
import { connect } from "react-redux";
import ContractForm from './ContractForm';
import { contractsAction, contractSelectors } from '../../../../../redux/modules/contracts';


const { Step } = Steps;

class CommonContractForm extends Component {
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

    getContractFormValue = (values) => {
        localStorage.setItem("contract_data", JSON.stringify(values));
        this.next()
    }

    handleSubmitContract = () => {
        const { createContract } = this.props
        const contract = JSON.parse(localStorage.getItem('contract_data'))
        const contractPayload = { ...contract };
        createContract(contractPayload)
        localStorage.removeItem('contract_data');
        this.setState({ current: this.state.current + 1 })
    }

    handleConfirmButton = () => {
        const {  handleAfterSubmit, getContracts } = this.props;
        handleAfterSubmit();
        getContracts()
    }

    render() {
        const { current } = this.state

        const steps = [
            {
                title: 'Step 1',
                content: <ContractForm
                    submittedValues={this.getContractFormValue}
                    next={this.next}
                />
            },
            {
                title: 'Step 2',
                content: null

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
        contract: contractSelectors.getCreatedContractSelector(state),
    };
};

const mapDispatchToProps = {
    createContract: contractsAction.createContractStart,
}

export default connect(mapStateToProps, mapDispatchToProps)(CommonContractForm);
