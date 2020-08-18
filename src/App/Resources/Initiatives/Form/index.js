import React from "react";
import PropTypes from "prop-types";
import { generateDateString, createDateFromString } from "../../../../Util";
import { Button, Form, Row, Col, Select, DatePicker, InputNumber, Input } from "antd";

/* state actions */

/* ui */
const labelCol = {
  xs: { span: 12 },
  sm: { span: 12 },
  md: { span: 12 },
  lg: { span: 12 },
  xl: { span: 12 },
  xxl: { span: 12 },
};
const wrapperCol = {
  xs: { span: 12 },
  sm: { span: 12 },
  md: { span: 12 },
  lg: { span: 12 },
  xl: { span: 12 },
  xxl: { span: 12 },
};

/**
 * @function HumanResourceForm
 * @name HumanResourceForm
 * @description Form for create and edit humanResource of measure
 * @param {object} props Valid form properties
 * @param {object} props.humanResource Valid humanResource object
 * @param {boolean} props.isEditForm Flag whether form is on edit mode
 * @param {boolean} props.posting Flag whether form is posting data
 * @param {Function} props.onCancel Form cancel callback
 * @returns {object} HumanResourceForm component
 * @author lally elias <lallyelias87@gmail.com>
 * @license MIT
 * @since 0.1.0
 * @version 0.1.0
 * @static
 * @public
 * @example
 *
 * <HumanResourceForm
 *   humanResource={humanResource}
 *   isEditForm={isEditForm}
 *   posting={posting}
 *   onCancel={this.handleClosehumanResourceForm}
 * />
 *
 */
const HumanResourceForm = ({
  isEditForm,
  posting,
  createHumanResource,
  updateHumanResource,
  items,
  selected,
  agencies,
  locations,
  onCancel,
}) => {
  // form finish(submit) handler
  const onFinish = (values) => {
    const start_date = generateDateString(values.start_date);
    const end_date = generateDateString(values.end_date);
    const payload = { ...values, start_date, end_date };

    if (isEditForm) {
      const updates = { ...selected, payload };
      updateHumanResource(updates);
    } else {
      createHumanResource(payload);

    }
  };
  return (
    <Form
      labelCol={labelCol}
      wrapperCol={wrapperCol}
      onFinish={onFinish}
      initialValues={{
        item_id: selected?.item.id,
        agency_id: selected?.agency.id,
        location_id: selected?.location.id,
        quantity: selected?.quantity,
        start_date: createDateFromString(selected?.start_date),
        end_date: createDateFromString(selected?.end_date),
      }}
      autoComplete="off"
      className='HumanResourceForm'
    >

      <Form.Item
        label="Title"
        title=" available initiative title  e.g 30"
        name="quantity"
        rules={[
          {
            required: true,
            message: "initiative title is required",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Action Types"
        title=" available Action Types   e.g 30"
        name="quantity"
        rules={[
          {
            required: true,
            message: "Action Types is required",
          },
        ]}
      >
        <Input />
      </Form.Item>

      {/* start:implementing partner */}
      <Form.Item
        label="Implementing Partner"
        name="agency_id"
        title="humanResource Implementing Partner e.g Tanzania Red cross society"
        rules={[
          {
            required: true,
            message: "humanResource Implementing Partner is required",
          },
        ]}
      >
        <Select>
          {agencies.map((agency) => (
            <Select.Option value={agency.id}>{agency.name}</Select.Option>
          ))}
        </Select>
      </Form.Item>
      {/* end:implementing partner */}

      {/* start:number */}
      <Form.Item
        label="Cost"
        title=" available initiative in cost  e.g 30"
        name="quantity"
        rules={[
          {
            required: true,
            message: "initiative cost is required",
          },
        ]}
      >
        <InputNumber />
      </Form.Item>
      {/* end:number */}

      {/* start:location */}
      <Form.Item
        label="Location"
        name="location_id"
        title="humanResources location is required  e.g Dar Es Salaam"
        rules={[
          {
            required: true,
            message: "humanResource number  is required",
          },
        ]}
      >
        <Select>
          {locations.map((location) => (
            <Select.Option value={location.id}>{location.name}</Select.Option>
          ))}
        </Select>

      </Form.Item>
      {/* end:location */}

      {/* start:location */}
      <Form.Item
        label="FocalPerson"
        name="location_id"
        title="initiative FocalPerson is required  e.g Dar Es Salaam"
        rules={[
          {
            required: true,
            message: "initiative FocalPerson is required",
          },
        ]}
      >
        <Select>
          {locations.map((location) => (
            <Select.Option value={location.id}>{location.name}</Select.Option>
          ))}
        </Select>

      </Form.Item>
      {/* end:location */}

      {/* start: start date & end date */}
      <Row justify="space-between">
        {/* start:start date */}
        <Col span={11}>
          <Form.Item
            label="Start Date"
            name="start_date"
            title="Initiative start date e.g 06-20-2020"
            rules={[
              {
                required: true,
                message: "Initiative start date is required",
              },
            ]}
          >
            <DatePicker />
          </Form.Item>
        </Col>
        {/* end:start date */}

        {/* start:end date */}
        <Col span={11}>
          <Form.Item
            label="End Date"
            title="Initiative end date e.g 07-30-2020"
            name="end_date"
            rules={[
              {
                required: true,
                message: "Initiative end date is required",
              },
            ]}
          >
            <DatePicker />
          </Form.Item>
        </Col>
        {/* end:end date */}
      </Row>
      {/* end: start date & end date */}

      {/* start:form actions */}
      <Form.Item wrapperCol={{ span: 24 }} style={{ textAlign: "right" }}>
        <Button onClick={onCancel}>Cancel</Button>
        <Button
          style={{ marginLeft: 8 }}
          type="primary"
          htmlType="submit"
          loading={posting}
        >
          Save
        </Button>
      </Form.Item>
      {/* end:form actions */}
    </Form>
  );
};

HumanResourceForm.defaultProps = {
  humanResource: {},
};

HumanResourceForm.propTypes = {
  humanResource: PropTypes.shape({
    _id: PropTypes.string,
    strings: PropTypes.shape({
      code: PropTypes.string.isRequired,
      name: PropTypes.shape({
        en: PropTypes.string.isRequired,
      }),
      description: PropTypes.shape({
        en: PropTypes.string.isRequired,
      }),
    }),
  }),
  isEditForm: PropTypes.bool.isRequired,
  posting: PropTypes.bool.isRequired,
  items: PropTypes.array,
  onCancel: PropTypes.func.isRequired,
};

export default HumanResourceForm;
