import PropTypes from 'prop-types';
import React from "react";
import MoneyForm from "../../../../components/MoneyForm";

const TotalProjectCostForm = ({ visible, onCancel, currency,  setTotalProjectCostId }) => {

    return (
        <MoneyForm
            formName='totalProjectCostForm'
            formTitle='Add total Project Cost'
            currency={currency}
            onCancel={onCancel}
            handleSetMoneyId={setTotalProjectCostId}
            visible={visible}
        />)
};

export default TotalProjectCostForm;

TotalProjectCostForm.propTypes = {
    visible: PropTypes.bool.isRequired,
    onCancel: PropTypes.func.isRequired,
    setTotalProjectCostId: PropTypes.func.isRequired,
    currency: PropTypes.array.isRequired,
}
