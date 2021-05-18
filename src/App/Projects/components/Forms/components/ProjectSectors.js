import { Form, InputNumber, Modal, Select } from "antd";
import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from "react";
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

const ProjectSectorsForm = ({ visible, onCancel, sectors, project }) => {
    const [form] = Form.useForm();
    useResetFormOnCloseModal({
        form,
        visible,
    });

    //state for loading after click
    const [loading, setLoading] = useState(false)
    const onOk = () => {
        const sector_id = form.getFieldValue('sector_id') || null;
        const percent = form.getFieldValue('percent') || null;
        setLoading(true)
        const project_id = project.id;
        API.createProjectSectors({ sector_id, percent, project_id })
            .then(() => {
                form.submit();
            });
        setTimeout(() => {
            setLoading(false);
        }, 2000);

    };

    return (
        <Modal title="Add Project Sector" visible={visible} onOk={onOk} onCancel={onCancel} confirmLoading={loading}>
            <Form form={form} layout="vertical" name="projectSectorsForm">
                {/* start:sectors*/}
                <Form.Item
                    label="Sectors"
                    name="sector_id"
                    rules={[
                        {
                            required: true,
                            message: "Sector is required",
                        },
                    ]}
                >
                    <Select>
                        {sectors.map(({ id, name }) => (
                            <Select.Option value={id}>{name}</Select.Option>
                        ))}
                    </Select>
                </Form.Item>
                {/*    end:sectors*/}


                {/* start:percent */}
                <Form.Item
                    label="Percent"
                    name="percent"
                    rules={[
                        {
                            required: true,
                            message: "Project Sector percent is required",
                        },
                    ]}
                >
                    <InputNumber />
                </Form.Item>
                {/*    end:percent */}
            </Form>
        </Modal>
    );
};

export default ProjectSectorsForm;

ProjectSectorsForm.propTypes = {
    visible: PropTypes.bool.isRequired,
    onCancel: PropTypes.func.isRequired,
    sectors: PropTypes.array.isRequired,
    project: PropTypes.object
}

ProjectSectorsForm.defaultProps = {
    project: null
}
