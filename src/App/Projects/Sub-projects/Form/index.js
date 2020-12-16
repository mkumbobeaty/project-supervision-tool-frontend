import React, { Component } from "react";
import {
  Button,
  Form,
  Select,
  Input,
} from "antd";
import { connect } from "react-redux";
import { projectSectorsOperator } from "../../ProjectsSectors/duck";
import { projectOperation } from "../../duck";

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


const renderDistricts = (districts, loadingDistrict) => {
  return (
    <Form.Item
      label="District"
      name="district_id"
      title="projects District is required  e.g Ilala"
      rules={[
        {
          required: true,
          message: "projects district  is required",
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


class ProjectSectorForm extends Component {
  state = { showDistrictsSelect: false }
  // form finish(submit) handler
  onFinish = (values) => {
    const payload = { ...values };
    debugger
    if (this.props.isEditForm) {
      this.props.updateprojects(payload, this.props.selected.id);
    } else {
      debugger
      this.props.createProject(payload);
    }
    this.props.handleAfterCloseForm();
  };

  componentDidMount() {
    const { selected, getDistricts, getSectors } = this.props;
    getSectors()
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
      regions,
      districts,
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
        className="ProjectSectorForm"
      >

        <Form.Item
          label="Sector"
          name="sector_id"
          title="Project Sector e.g water"
          rules={[
            {
              required: true,
              message: "Project sector is required",
            },
          ]}
        >
          <Input />
        </Form.Item>
        {/* end:project id */}

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
          title="initiative Region is required  e.g Dar Es Salaam"
          rules={[
            {
              required: true,
              message: "initiative region  is required",
            },
          ]}
        >
          <Select onSelect={(value) => getDistricts(value)}>
            {regions.map((region) => (
              <Select.Option value={region.id}>{region.name}</Select.Option>
            ))}
          </Select>
        </Form.Item>
        {/* end:region */}


        {/* start:district */}
        { this.state.showDistrictsSelect ? renderDistricts(districts) : ''}
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

const mapStateToProps = (state) => {
  return {
    regions: state.projects?.regions?.data,
  };
};

const mapDispatchToProps = {
  getSectors: projectSectorsOperator.getSectorsStart,
  getRegions: projectOperation.getRegionsStart,

}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectSectorForm);
