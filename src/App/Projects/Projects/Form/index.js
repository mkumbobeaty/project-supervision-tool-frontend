import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Button,
  Form,
  Select,
  Input,
} from "antd";
import { connect } from "react-redux";

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


const renderDistricts = (districts,loadingDistrict) => {
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
      <Select loading={loadingDistrict}>
        {districts.map((district) => (
          <Select.Option value={district.id}>{district.name}</Select.Option>
        ))}
      </Select>
    </Form.Item>
  );
}

/**
 * @function ProjectForm
 * @name ProjectForm
 * @description Form for create and edit humanResource of measure
 * @param {object} props Valid form properties
 * @param {boolean} props.isEditForm Flag whether form is on edit mode
 * @param {boolean} props.posting Flag whether form is posting data
 * @param {Function} props.onCancel Form cancel callback
 * @returns {object} ProjectForm component
 * @author lally elias <lallyelias87@gmail.com>
 * @license MIT
 * @since 0.1.0
 * @version 0.1.0
 * @static
 * @public
 *
 */
class ProjectForm extends Component {
  state = { showDistrictsSelect: false }
  // form finish(submit) handler
  onFinish = (values) => {
    const payload = { ...values };
    if (this.props.isEditForm) {
      this.props.updateHumanResource(payload, this.props.selected.id);
    } else {
      this.props.createProject(payload);
    }
    this.props.handleAfterCloseForm();
  };

  componentDidMount() {
    const { selected, getDistricts } = this.props;
    if (selected && selected.locations.map(location => location.level === 'district')) {
      this.setState({ showDistrictsSelect: true })
      const region_id = selected.locations.map(location => {
        return (
          location.region.id
        )
      })
      getDistricts(region_id)
    }
  }

  render() {
    const {
      posting,
      selected,
      onCancel,
      focalPeoples,
      regions,
      districts,
      getDistricts,
      loadingRegion,
      loadingDistrict,
    } = this.props;
    return (
      <Form
        labelCol={labelCol}
        wrapperCol={wrapperCol}
        onFinish={this.onFinish}
        projectsValues={{
          projects_id: selected?.projects_id,
          name: selected?.name,
          leaders: selected?.leaders,
          description: selected?.description,
        }}
        autoComplete="off"
        className="ProjectForm"
      >
        {/* start:type */}
        <Form.Item
          label="Project Id"
          name="project_id"
          title="Project id e.g 1236567"
          rules={[
            {
              required: true,
              message: "Project identity is required",
            },
          ]}
        >
          <Input />
        </Form.Item>
        {/* end:project id */}

        <Form.Item
          label="Project Name"
          name="name"
          title="Project name e.g DMDP"
          rules={[
            {
              required: true,
              message: "Project name is required",
            },
          ]}
        >
          <Input />
        </Form.Item>
        {/* end:project id */}

        {/* start:Description */}
        <Form.Item
          label="Description"
          name="description"
          title="Project Description e.g water recyle project"
          rules={[
            {
              required: true,
              message: "Project description is required",
            },
          ]}
        >
          <Input />
        </Form.Item>
        {/* end:Description */}


        <Form.Item
          label="Leaders"
          name="leaders"
          title="leaders/focal people e.g People"
          rules={[
            {
              required: true,
              message: "leaders/focal people required",
            },
          ]}
        >
          <Select mode="multiple"
          >
            {focalPeoples.map((focalPerson) => (
              <Select.Option value={focalPerson.id}>{focalPerson.first_name}</Select.Option>
            ))}
          </Select>
        </Form.Item>

        {/* start:level */}
        <Form.Item
          label="Level"
          name="level"
          title="Projects Level is required  e.g District"
          rules={[
            {
              required: true,
              message: "Projects level  is required",
            },
          ]}
        >
          <Select
            onSelect={(value) => value === 'district' ? this.setState({ showDistrictsSelect: true }) : this.setState({ showDistrictsSelect: false })}
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
          title="Projects Region is required  e.g Dar Es Salaam"
          rules={[
            {
              required: true,
              message: "Projects region  is required",
            },
          ]}
          loading={loadingRegion}
        >
          <Select onSelect={(value) => {
            getDistricts(value)
          }}>
            {regions.map((region) => (
              <Select.Option value={region.id}>{region.name}</Select.Option>
            ))}
          </Select>
        </Form.Item>
        {/* end:region */}


        {/* start:district */}
        { this.state.showDistrictsSelect ? renderDistricts(districts,loadingDistrict) : ''}
        {/* end:district */}


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

ProjectForm.defaultProps = {
  humanResource: {},
};

ProjectForm.propTypes = {
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

const mapStateToProps = (state) => {
  return {
    loadingDistrict: state.projects?.districts?.loading,
    loadingRegion: state.projects?.regions?.loading,
  };
};


export default connect(mapStateToProps)(ProjectForm);