import React from 'react';

import { Form, Input, Button, InputNumber, Select, } from 'antd';
const labelCol = {
    xs: { span: 24 },
    sm: { span: 24 },
    md: { span: 24 },
    lg: { span: 24 },
    xl: { span: 24 },
    xxl: { span: 24 },
};
const wrapperCol = {
    xs: { span: 24 },
    sm: { span: 24 },
    md: { span: 24 },
    lg: { span: 24 },
    xl: { span: 24 },
    xxl: { span: 24 },
};

const SubProjectItemForm = ({ items, createSubProjectItem, subProjects, progress, loading }) => {
    const onFinish = (values) => {
        createSubProjectItem(values)
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
            labelCol={labelCol}
            wrapperCol={wrapperCol}
            name="subProjectItem"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            className="ProjectForm"

        >
            <Form.Item
                label="Item Name"
                name="name"
                rules={[
                    {
                        required: true,
                        message: 'Please input item name!',
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Description "
                name="description"
                rules={[
                    {
                        required: true,
                        message: 'Please input item description!',
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Sub Project "
                name="sub_project_id"
                rules={[
                    {
                        required: true,
                        message: 'Please input sub project!',
                    },
                ]}
            >
                <Select >
                    {subProjects.map((subproject) => (
                        <Select.Option value={subproject.id}>{subproject.name}</Select.Option>
                    ))}
                </Select>
            </Form.Item>
            <Form.Item
                label="Capacity "
                name="item_id"
                rules={[
                    {
                        required: true,
                        message: 'Please input item capacity!',
                    },
                ]}
            >
                <Select >
                    {items.map((item) => (
                        <Select.Option value={item.id}>{item.capacity}</Select.Option>
                    ))}
                </Select>
            </Form.Item>
            <Form.Item
                label="Progress "
                name="progress_id"
                rules={[
                    {
                        required: true,
                        message: 'Please input progress!',
                    },
                ]}
            >
                <Select >
                    {progress.map((data) => (
                        <Select.Option value={data.id}>{data.planned}</Select.Option>
                    ))}
                </Select>
            </Form.Item>
            <Form.Item
                label="Quantity"
                name="quantity"
                rules={[
                    {
                        required: true,
                        message: 'Please enter quantity of item!',
                    },
                ]}
            >
                <InputNumber />
            </Form.Item>
            <Form.Item wrapperCol={{ span: 24 }} style={{ textAlign: "right" }} >
                <Button
                    type="primary"
                    htmlType="submit"
                    loading={loading}
                    style={{
                        fontSize: '0.9em'
                    }}>
                    Submit
        </Button>
            </Form.Item>
        </Form>
    );
};

export default SubProjectItemForm