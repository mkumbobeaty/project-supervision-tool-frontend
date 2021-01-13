import {Form, Modal, Select} from "antd";
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

const RegionLocationForm = ({ visible, onCancel, locations,  setLocations, regions }) => {
    const [form] = Form.useForm();
    useResetFormOnCloseModal({
        form,
        visible,
    });

    const onOk = () => {
        const region = form.getFieldValue('region') || null;
        API.createProjectLocation({ region_id: region, level: 'region'})
            .then( ({ data }) => {
                setLocations([ ...locations, data.id]);
                form.submit();
            });

    };

    return (
        <Modal title="Basic Drawer" visible={visible} onOk={onOk} onCancel={onCancel}>
            <Form form={form} layout="vertical" name="userForm">
                <Form.Item
                    label="Region"
                    name="region"
                    rules={[
                        {
                            required: true,
                            message: "Region is required",
                        },
                    ]}
                >
                    <Select>
                        { regions.map(({ id, name}) => (
                            <Select.Option value={id}>{ name }</Select.Option>
                        ))}
                    </Select>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default RegionLocationForm;

RegionLocationForm.propTypes = {
    visible: PropTypes.bool.isRequired,
    onCancel: PropTypes.func.isRequired,
    setLocations: PropTypes.func.isRequired,
    locations: PropTypes.array.isRequired,
    regions: PropTypes.array.isRequired,
}
