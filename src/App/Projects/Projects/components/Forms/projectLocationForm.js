import React, {Component} from "react";
import {
  Button,
  Form,
  Select,
  
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
          title="projectLocations District is required  e.g Ilala"
          rules={[
            {
              required: true,
              message: "projectLocation district  is required",
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
 * @function ProjectLocationForm
 * @name ProjectLocationForm
 * @description Form for create and edit projectLocation of measure
 * @param {object} props Valid form properties
 * @param {object} props.projectLocation Valid projectLocation object
 * @param {boolean} props.isEditForm Flag whether form is on edit mode
 * @param {boolean} props.posting Flag whether form is posting data
 * @param {Function} props.onCancel Form cancel callback
 * @returns {object} ProjectLocationForm component
 * @author lally elias <lallyelias87@gmail.com>
 * @license MIT
 * @since 0.1.0
 * @version 0.1.0
 * @static
 * @public
 * @example
 *
 * <ProjectLocationForm
 *   projectLocation={projectLocation}
 *   isEditForm={isEditForm}
 *   posting={posting}
 *   onCancel={this.handleCloseProjectLocationForm}
 * />
 *
 */
class ProjectLocationForm extends Component{
  state = {showDistrictsSelect: false}

  // form finish(submit) handler
   onFinish = (values) => {
    const { project} = this.props
    const { id } = project;
    const payload = { ...values, project_id: id };
    if (this.props.isEditForm) {
      this.props.updateprojectLocation(payload, this.props.selected.id);
    } else {
      debugger
      this.props.submittedValues(payload);
      this.props.handleNextButton(); 
       }
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
      getDistricts,
      selected,
      regions,
      districts,
      handleBackButton
    } = this.props;
    return (
        <Form
            labelCol={labelCol}
            wrapperCol={wrapperCol}
            onFinish={this.onFinish}
            initialValues={{
              level: selected?.location?.level,
              region_id: selected?.location?.region?.id,
              district_id: selected?.location?.district?.id,
            }}
            autoComplete="off"
            className="ProjectLocationForm"
        >

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
          title="Project's Region is required  e.g Dar Es Salaam"
          rules={[
            {
              required: true,
              message: "Project's region  is required",
            },
          ]}
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
        { this.state.showDistrictsSelect ? renderDistricts(districts) : ''}
        {/* end:district */}


          {/* start:form actions */}
          <Form.Item wrapperCol={{ span: 24 }} style={{ textAlign: "right" }}>
          <Button type="default" onClick={handleBackButton} >
            Back
           </Button>
            <Button
                type="primary"
                htmlType="submit"
                loading={posting}
            >
              Next
            </Button>
          </Form.Item>
          {/* end:form actions */}
        </Form>
    );
  }

}

export default ProjectLocationForm;
