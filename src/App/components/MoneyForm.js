import {Form, Modal, Select, InputNumber } from "antd";
import PropTypes from 'prop-types';
import React, {useEffect, useRef} from "react";
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

    const onOk = () => {
        const amount = form.getFieldValue('amount') || null;
        const currency_id = form.getFieldValue('currency_id') || null;
        API.createMoney({ amount, currency_id })
            .then( ({ data }) => {
                handleSetMoneyId(data.id);
                form.submit();
            });

    };

    return (
        <Modal width={700} title={formTitle} visible={visible} onOk={onOk} onCancel={onCancel}>
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
