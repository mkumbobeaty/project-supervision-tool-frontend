import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { usersActions } from "../../../redux/modules/users";
import { connect } from "react-redux";

const UserForm = (props) => {

  const [form] = Form.useForm();

  const onFinish = (values) => {

    if(props.editMode === true ) {
      const user = {
        ...props.formValues,
        ...values
      }
      props.editUser(user)
    } else {
      const user = {
        ...values,
        password: values.last_name
      }
      console.log(user)
      props.createUser(user)
    }
    form.resetFields()
    props.handleCancel();
  };

  return (
    <>
      {props.editMode ? form.setFieldsValue(props.formValues) : form.resetFields()}
      <Form
        form={form}
        name='register'
        className='registration-form'
        onFinish={onFinish}
        scrollToFirstError
        layout="vertical"
      >

        <Form.Item
          name='first_name'
          label='First Name'
          rules={[
            {
              required: true,
              message: "Please input user's first name!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name='middle_name'
          label='Middle Name'
          rules={[
            {
              required: false,
              message: "Please input user's middle name!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name='last_name'
          label='Last Name'
          rules={[
            {
              required: true,
              message: "Please input user's last name!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        {/* <Form.Item
          name='role'
          label='Role'
          rules={[
            {
              required: true,
              message: "Please input user's role!",
            },
          ]}
        >
          <Input />
        </Form.Item> */}

        {/* <Form.Item
          name='title'
          label='Title'
          rules={[
            {
              required: true,
              message: "Please input user's title!",
            },
          ]}
        >
          <Input />
        </Form.Item> */}

        {/* <Form.Item
          name='organisation'
          label='Organisation'
          rules={[
            {
              required: true,
              message: "Please input user's organisation!",
            },
          ]}
        >
          <Input />
        </Form.Item> */}

        <Form.Item
          name='phone'
          label='Phone Number'
          rules={[
            {
              required: true,
              message: "Please input user's phone number!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name='email'
          label='E-mail'
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: false,
              message: "Please input user's E-mail!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
        </Button>
        </Form.Item>
      </Form>
    </>
  )
}



const mapStateToProps = (state) => {
  return {
    // user: userSelectors.getUserSelector(state)
  };
};

const mapDispatchToProps = {
  createUser: usersActions.createUserStart,
  editUser: usersActions.editUserStart,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);


