import {Form, Modal, Select, InputNumber } from "antd";
import PropTypes from 'prop-types';
import React, {useEffect, useRef} from "react";
import API from '../../../../../API';


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

const CommitmentAmountForm = ({ visible, onCancel, currency,  setCommitmentAmountId }) => {
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
                setCommitmentAmountId(data.id);
                form.submit();
            });

    };

    return (
        <Modal width={700} title="Add Commitment Amount" visible={visible} onOk={onOk} onCancel={onCancel}>
            <Form form={form} layout="inline" name="commitmentAmountForm">
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

export default CommitmentAmountForm;

CommitmentAmountForm.propTypes = {
    visible: PropTypes.bool.isRequired,
    onCancel: PropTypes.func.isRequired,
    setCommitmentAmountId: PropTypes.func.isRequired,
    currency: PropTypes.array.isRequired,
}
