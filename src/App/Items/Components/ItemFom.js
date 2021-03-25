import React from "react";
import { Form, Input, Button } from "antd";
import { itemsActions } from "../../../redux/modules/items";
import { connect } from "react-redux";

const ItemForm = (props) => {

  const [form] = Form.useForm();

  const onFinish = (values) => {
    const item = {
      ...values,
      password: "password",
      created_at: "",
      updated_at: ""
    }

    if(props.editMode === true ) {
      props.editItem(item)
    } else {
      props.createItem(item)
    }

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
          name='item_id'
          label='Item ID'
          rules={[
            {
              required: true,
              message: "Please input item id!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name='name'
          label='Item Name'
          rules={[
            {
              required: false,
              message: "Please input item name!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name='description'
          label='Description'
          rules={[
            {
              required: true,
              message: "Please input item description",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name='capacity'
          label='Capacity'
          rules={[
            {
              required: true,
              message: "Please input item capacity!",
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
    // item: itemSelectors.getItemSelector(state)
  };
};

const mapDispatchToProps = {
  createItem: itemsActions.createItemStart,
  editItem: itemsActions.editItemStart,
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemForm);


