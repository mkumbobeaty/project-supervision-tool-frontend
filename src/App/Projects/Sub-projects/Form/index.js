import React, {Component} from "react";
import PropTypes from "prop-types";
import { fetchInitiativeTypes, fetchActorTypes, getFundingOrganisations, getRegions } from '../../../../API';
import { generateDateString, createDateFromString } from "../../../../Util";
import {
  Button,
  Form,
  Row,
  Col,
  Select,
  DatePicker,
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
          title="initiative District is required  e.g Ilala"
          rules={[
            {
              required: true,
              message: "initiative district  is required",
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
 * @function InitiativeForm
 * @name InitiativeForm
 * @description Form for create and edit initiative of measure
 * @param {object} props Valid form properties
 * @param {object} props.initiative Valid initiative object
 * @param {boolean} props.isEditForm Flag whether form is on edit mode
 * @param {boolean} props.posting Flag whether form is posting data
 * @param {Function} props.onCancel Form cancel callback
 * @returns {object} InitiativeForm component
 * @license MIT
 * @since 0.1.0
 * @version 0.1.0
 * @static
 * @public
 * @example
 *
 * <InitiativeForm
 *   initiative={initiative}
 *   isEditForm={isEditForm}
 *   posting={posting}
 *   onCancel={this.handleCloseinitiativeForm}
 * />
 *
 */
class InitiativeForm extends Component{
  state = {
      showDistrictsSelect: false,
      initiativeTypes: [],
      actorTypes: [],
      regions: [],
      fundingOrganisations: [],
  }
  // form finish(submit) handler
  onFinish = (values) => {
    const start_date = generateDateString(values.start_date);
    const end_date = generateDateString(values.end_date);
    const payload = { ...values, start_date, end_date };
    if (this.props.isEditForm) {
      this.props.updateInitiative(payload, this.props.selected.id);
    } else {
      this.props.createInitiative(payload);
    }
    this.props.handleAfterCloseForm();
  };

  componentDidMount() {
    const {selected, getDistricts} = this.props;
    if (selected && selected.location.level === 'district') {
      this.setState({showDistrictsSelect: true})
      getDistricts(selected?.location?.region.id);
    }
    fetchInitiativeTypes()
        .then(res => this.setState({initiativeTypes: res.data}));

      fetchActorTypes()
        .then(res => this.setState({actorTypes: res.data}));

      getFundingOrganisations()
        .then(res => this.setState({fundingOrganisations: res.data}));

      getRegions()
        .then(res => this.setState({regions: res.data}));

  }

  render() {
      const { initiativeTypes, actorTypes, fundingOrganisations, regions } = this.state;
    const {
      posting,
      getDistricts,
      selected,
      agencies,
      districts,
      onCancel,
    } = this.props;
    return (
        <Form
            labelCol={labelCol}
            wrapperCol={wrapperCol}
            onFinish={this.onFinish}
            initialValues={{
              actor_type_id: selected?.actor_type_id.id,
              level: selected?.location?.level,
              region_id: selected?.location?.region?.id,
              district_id: selected?.location?.district?.id,
              implementing_partners: selected?.implementing_partners.map(
                  (partner) => partner.id
              ),
              location_id: selected?.location.id,
              initiative_type: selected?.quantity,
              description: selected?.description,
              start_date: createDateFromString(selected?.start_date),
              end_date: createDateFromString(selected?.end_date),
            }}
            autoComplete="off"
            className="InitiativeForm"
        >
          {/* start:type */}
          <Form.Item
              label="Actor Type"
              name="actor_type_id"
              title="actor type e.g Donor"
              rules={[
                {
                  required: true,
                  message: "actor type is required",
                },
              ]}
          >
            <Select>
              {actorTypes.map((actorType) => (
                  <Select.Option value={actorType.id}>{actorType.name}</Select.Option>
              ))}
            </Select>
          </Form.Item>
          {/* end:type */}

          {/* start:type */}
          <Form.Item
              label="Initiative Type"
              name="initiative_type_id"
              title="initiative type e.g People"
              rules={[
                {
                  required: true,
                  message: "initiative type is required",
                },
              ]}
          >
            <Select>
                {initiativeTypes.map((initiativeType) => (
                    <Select.Option value={initiativeType.id}>{initiativeType.name}</Select.Option>
                ))}
            </Select>
          </Form.Item>
          {/* end:type */}

          {/* start:Description */}
          <Form.Item
              label="Title"
              name="title"
              title="initiative Title"
              rules={[
                {
                  required: true,
                  message: "initiative Title is required",
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
              title="initiative Implementing Partner e.g Tanzania Red cross society"
              rules={[
                {
                  required: true,
                  message: "initiative Implementing Partner is required",
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

          {/* start:funding organisation */}
          <Form.Item
              label="Funding Organisation"
              name="funding_organisations"
              title="initiative Funding Organisation e.g Tanzania Red cross society"
              rules={[
                {
                  required: true,
                  message: "initiative Funding Organisation is required",
                },
              ]}
          >
            <Select mode="multiple">
              {fundingOrganisations.map((fundingOrganisation) => (
                  <Select.Option value={fundingOrganisation.id}>{fundingOrganisation.name}</Select.Option>
              ))}
            </Select>
          </Form.Item>
          {/* end:implementing partner */}

          {/* start:level */}
          <Form.Item
              label="Level"
              name="level"
              title="initiative Level is required  e.g District"
              rules={[
                {
                  required: true,
                  message: "initiative level  is required",
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
              title="initiative Region is required  e.g Dar Es Salaam"
              rules={[
                {
                  required: true,
                  message: "initiative region  is required",
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
                  title="initiative start date e.g 06-20-2020"
                  rules={[
                    {
                      required: true,
                      message: "initiative start date is required",
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
                  title="initiative end date e.g 07-30-2020"
                  name="end_date"
                  rules={[
                    {
                      required: true,
                      message: "initiative end date is required",
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

InitiativeForm.defaultProps = {
  initiative: {},
};

InitiativeForm.propTypes = {
  initiative: PropTypes.shape({
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

export default InitiativeForm;
