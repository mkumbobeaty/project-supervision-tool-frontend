import {Form, Modal, Select, InputNumber } from "antd";
import PropTypes from 'prop-types';
import React, {useEffect, useRef, useState} from "react";
import API from '../../API';


// reset form fields when modal is form, closed
const useResetFormOnCloseModal = ({ form, visible }) => {
    const prevVisibleRef = useRef();
    useEffect(() => {
        prevVisibleRef.current = visible;
    }, [visible]);
    const prevVisible = prevVisibleRef.current;
    useEffect(() => {
        if (!visible && prevVisible) {
            form.resetFields();
        }
    }, [visible]);
};



const MoneyForm = ({ visible, onCancel, currency,  handleSetMoneyId, formName, formTitle }) => {
    const [form] = Form.useForm();
    useResetFormOnCloseModal({
        form,
        visible,
    });
 //state for loading after click
 const [loading, setLoading] = useState(false)
 
    const onOk = () => {
        const amount = form.getFieldValue('amount') || null;
        const currency_id = form.getFieldValue('currency_id') || null;
        setLoading(true)
        API.createMoney({ amount, currency_id })
            .then( ({ data }) => {
                handleSetMoneyId(data.id);
                form.submit();
            });
            setTimeout(() => {
                setLoading(false);
            }, 2000);

    };

    return (
        <Modal width={700} title={formTitle} visible={visible} onOk={onOk} onCancel={onCancel} confirmLoading={loading}>
            <Form form={form} layout="inline" name={formName}>
                <Form.Item name="amount" label="Amount" rules={[{ required: true }]}>
                    <InputNumber style={{ width: 180 }} />
                </Form.Item>
                <Form.Item
                    label="Currency"
                    name="currency_id"
                    rules={[
                        {
                            required: true,
                            message: "Currency is required",
                        },
                    ]}
                >
                    <Select style={{ width: 180 }}>
                        { currency.map(({ id, name}) => (
                            <Select.Option value={id}>{ name }</Select.Option>
                        ))}
                    </Select>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default MoneyForm;

MoneyForm.propTypes = {
    visible: PropTypes.bool.isRequired,
    formName: PropTypes.string.isRequired,
    formTitle: PropTypes.string.isRequired,
    onCancel: PropTypes.func.isRequired,
    handleSetMoneyId: PropTypes.func.isRequired,
    currency: PropTypes.array.isRequired,
}
