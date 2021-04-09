import PropTypes from 'prop-types';
import React from "react";
import MoneyForm from "../../../components/MoneyForm";

const CommitmentAmountForm = ({ visible, onCancel, currency,  setCommitmentAmountId }) => {

    return (
        <MoneyForm
            currency={currency}
            formName="commitmentAmountForm"
            formTitle="Add Commitment Amount"
            onCancel={onCancel}
            handleSetMoneyId={setCommitmentAmountId}
            visible={visible}
        />)
};

export default CommitmentAmountForm;

CommitmentAmountForm.propTypes = {
    visible: PropTypes.bool.isRequired,
    onCancel: PropTypes.func.isRequired,
    setCommitmentAmountId: PropTypes.func.isRequired,
    currency: PropTypes.array.isRequired,
}
