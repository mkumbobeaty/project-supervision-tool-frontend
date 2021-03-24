
import { Form, Input, InputNumber, Modal, Select } from "antd";
import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from "react";
import API from '../../../../API';


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

const SubProjectItemsForm = ({ visible, onCancel, items, subProject, progress }) => {
    const [form] = Form.useForm();
    useResetFormOnCloseModal({
        form,
        visible,
    });

    //state for loading after click
    const [loading, setLoading] = useState(false)
    const onOk = () => {
        const item_id = form.getFieldValue('item_id') || null;
        const quantity = form.getFieldValue('quantity') || null;
        const progress_id = form.getFieldValue('progress_id') || null;

        setLoading(true)
        const sub_project_id = subProject?.data.id;
        API.createItems({ item_id, quantity, sub_project_id, progress_id, })
            .then(() => {
                form.submit();
            });
        setTimeout(() => {
            setLoading(false);
        }, 2000);

    };

    return (
        <Modal title="Add Project Items" visible={visible} onOk={onOk} onCancel={onCancel} confirmLoading={loading} destroyOnClose={true}>
            <Form form={form} layout="vertical" name="subProjectItemsForm">
                {/* start:items*/}
                <Form.Item
                    label="Items"
                    name="item_id"
                    rules={[
                        {
                            required: true,
                            message: "Items is required",
                        },
                    ]}
                >
                    <Select>
                        {items.map(({ id, name }) => (
                            <Select.Option value={id}>{name}</Select.Option>
                        ))}
                    </Select>
                </Form.Item>
                {/*    end:items*/}

                {/* start:quantity */}
                <Form.Item
                    label="Quantity"
                    name="quantity"
                    rules={[
                        {
                            required: true,
                            message: "sub project quantity is required",
                        },
                    ]}
                >
                    <InputNumber />
                </Form.Item>
                {/*    end:quantity */}
            </Form>
        </Modal>
    );
};

export default SubProjectItemsForm;

SubProjectItemsForm.propTypes = {
    visible: PropTypes.bool.isRequired,
    onCancel: PropTypes.func.isRequired,
    sectors: PropTypes.array.isRequired,
    project: PropTypes.object
}

SubProjectItemsForm.defaultProps = {
    project: null
}
