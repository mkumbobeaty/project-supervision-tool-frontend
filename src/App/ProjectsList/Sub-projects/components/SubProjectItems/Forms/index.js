import React from 'react';

import { Form, Input, Button, InputNumber, Select, } from 'antd';
const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

const SubProjectItemForm = ({ items,createSubProjectItem, subProjects, progress }) => {
    const onFinish = (values) => {
        const payload = { ...values }
        createSubProjectItem(payload)
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
            {...layout}
            name="subProjectItem"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
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
            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    Submit
        </Button>
            </Form.Item>
        </Form>
    );
};

export default SubProjectItemForm