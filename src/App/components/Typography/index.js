import React from  'react';
import {
     Button,
    Typography
} from 'antd';

 /**
     * @function
     * @name getCurrencyIsoFromCurrencies
     * @description gets currrency  iso from array of currencies
     */
    const getCurrencyIsoFromCurrencies = (currency_id, currencies) => {
        const currency = currencies.find(({ id }) => id === currency_id);
        return currency ? currency?.iso : ''
    };

const TypographyComponent = ({amountValue, editedAmountValue, showModal, isEditForm, currency}) => {
    return (
        <div>
            {isEditForm ? (
                <Typography.Text className="ant-form-text" type="success" strong={true}>
                    {`${editedAmountValue.amount} ${getCurrencyIsoFromCurrencies(editedAmountValue.currency_id, currency)}`}
                </Typography.Text>
            ) : (
                amountValue ? 
                    <Typography.Text className="ant-form-text" type="success" strong={true}>
                        {`${amountValue.amount} ${getCurrencyIsoFromCurrencies(amountValue.currency_id, currency)}`}
                    </Typography.Text> :
                    <Typography.Text className="ant-form-text" type="secondary">
                        Click Add to fill cost amount
                    </Typography.Text>
                )}
                <Button
                    size="small"
                    htmlType="button"
                    style={{
                        fontSize: '0.9em'
                    }}
                    onClick={showModal}
                >
                    {isEditForm ? 'Edit' : 'Add'}
                </Button>
        </div>
    );
}

export default TypographyComponent;