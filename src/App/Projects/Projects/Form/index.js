import React, {Component} from "react";
import PropTypes from "prop-types";
import { generateDateString, createDateFromString } from "../../../../Util";
import {
  Button,
  Form,
  Row,
  Col,
  Select,
  DatePicker,
  InputNumber,
  Input,
} from "antd";

/* state actions */

/* ui */
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


const renderDistricts = (districts) => {
  return (
      <Form.Item
          label="District"
          name="district_id"
          title="humanResources District is required  e.g Ilala"
          rules={[
            {
              required: true,
              message: "humanResource district  is required",
            },
          ]}
      >
        <Select>
          { districts.map((district) => (
              <Select.Option value={district.id}>{district.name}</Select.Option>
          ))}
        </Select>
      </Form.Item>
  );
}

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
class HumanResourceForm extends Component{
  state = {showDistrictsSelect: false}
  // form finish(submit) handler
   onFinish = (values) => {
    const start_date = generateDateString(values.start_date);
    const end_date = generateDateString(values.end_date);
    const payload = { ...values, start_date, end_date };
    if (this.props.isEditForm) {
      this.props.updateHumanResource(payload, this.props.selected.id);
    } else {
      this.props.createHumanResource(payload);
    }
     this.props.handleAfterCloseForm();
  };

  componentDidMount() {
      const {selected, getDistricts} = this.props;
      if (selected && selected.location.level === 'district') {
          this.setState({showDistrictsSelect: true})
          getDistricts(selected?.location?.region.id);
      }
  }

    render() {

    const {
      posting,
      getDistricts,
      items,
      selected,
      agencies,
      regions,
      districts,
      onCancel,
    } = this.props;
    return (
        <Form
            labelCol={labelCol}
            wrapperCol={wrapperCol}
            onFinish={this.onFinish}
            initialValues={{
              hr_type_id: selected?.hr_type.id,
              level: selected?.location?.level,
              region_id: selected?.location?.region?.id,
              district_id: selected?.location?.district?.id,
              implementing_partners: selected?.implementing_partners.map(
                  (partner) => partner.id
              ),
              location_id: selected?.location.id,
              quantity: selected?.quantity,
              description: selected?.description,
              start_date: createDateFromString(selected?.start_date),
              end_date: createDateFromString(selected?.end_date),
            }}
            autoComplete="off"
            className="HumanResourceForm"
        >
          {/* start:type */}
          <Form.Item
              label="Type"
              name="hr_type_id"
              title="humanResource type e.g People"
              rules={[
                {
                  required: true,
                  message: "humanResource type is required",
                },
              ]}
          >
            <Select>
              {items.map((item) => (
                  <Select.Option value={item.id}>{item.name}</Select.Option>
              ))}
            </Select>
          </Form.Item>
          {/* end:type */}

          {/* start:Description */}
          <Form.Item
              label="Description"
              name="description"
              title="humanResource Description e.g doctor of heart"
              rules={[
                {
                  required: true,
                  message: "humanResource Description is required",
                },
              ]}
          >
            <Input />
          </Form.Item>
          {/* end:Description */}

          {/* start:implementing partner */}
          <Form.Item
              label="Implementing Partner"
              name="implementing_partners"
              title="humanResource Implementing Partner e.g Tanzania Red cross society"
              rules={[
                {
                  required: true,
                  message: "humanResource Implementing Partner is required",
                },
              ]}
          >
            <Select mode="multiple">
              {agencies.map((agency) => (
                  <Select.Option value={agency.id}>{agency.name}</Select.Option>
              ))}
            </Select>
          </Form.Item>
          {/* end:implementing partner */}

          {/* start:number */}
          <Form.Item
              label="Number"
              title=" available humanResources in number  e.g 30"
              name="quantity"
              rules={[
                {
                  required: true,
                  message: "humanResource number  is required",
                },
              ]}
          >
            <InputNumber />
          </Form.Item>
          {/* end:number */}



          {/* start:level */}
          <Form.Item
              label="Level"
              name="level"
              title="humanResources Level is required  e.g District"
              rules={[
                {
                  required: true,
                  message: "humanResource level  is required",
                },
              ]}
          >
            <Select
                onSelect={(value) => value === 'district' ? this.setState({showDistrictsSelect: true}) : this.setState({showDistrictsSelect: false})}
            >
              <Select.Option value="region">Region</Select.Option>
              <Select.Option value="district">District</Select.Option>
            </Select>
          </Form.Item>
          {/* end:level */}


          {/* start:region */}
          <Form.Item
              label="Region"
              name="region_id"
              title="humanResources Region is required  e.g Dar Es Salaam"
              rules={[
                {
                  required: true,
                  message: "humanResource region  is required",
                },
              ]}
          >
            <Select onSelect={(value) => getDistricts(value)}>
              { regions.map((region) => (
                  <Select.Option value={region.id}>{region.name}</Select.Option>
              ))}
            </Select>
          </Form.Item>
          {/* end:region */}


          {/* start:district */}
          { this.state.showDistrictsSelect ? renderDistricts(districts) : ''}
          {/* end:district */}

          {/* start: start date & end date */}
          <Row justify="space-between">
            {/* start:start date */}
            <Col span={11}>
              <Form.Item
                  label="Start Date"
                  name="start_date"
                  title="humanResource start date e.g 06-20-2020"
                  rules={[
                    {
                      required: true,
                      message: "humanResource start date is required",
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
                  title="humanResource end date e.g 07-30-2020"
                  name="end_date"
                  rules={[
                    {
                      required: true,
                      message: "humanResource end date is required",
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
  }

}

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
