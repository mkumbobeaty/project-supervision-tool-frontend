import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Button,
  Form,
  Select,
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

/**
 * @function ProjectForm
 * @name ProjectForm
 * @description Form for create and edit Project of measure
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
  state = {
    showDistrictsSelect: false,
    isEditForm: false,
  }

  /**
     * @function
     * @name handleAfterCloseForm
     * @description Perform post close form cleanups
     *
     * @version 0.1.0
     * @since 0.1.0
     */
  handleAfterCloseForm = () => {
    const { selectProject } = this.props;
    selectProject(null);
    this.setState({ isEditForm: false });
  };

  // form finish(submit) handler
  onFinish = (values) => {
    const { createTotalCost, submittedValues, project_location, handleNextButton} = this.props
    const { id: location_id } = project_location;
    const locations = [location_id]
    const { id, name, leaders,description,currency_id, amount } = values
    const payload = { id, name, leaders,description, locations };
    const costPayload = { amount, currency_id}
    if (this.props.isEditForm) {
      this.props.updateProject(payload, this.props.selected.id);
    } else {
      debugger
      submittedValues(payload);
      createTotalCost(costPayload);
      handleNextButton();
    }
  };

  componentDidMount() { }

  render() {
    const {
      selected,
      focalPeoples,
      posting,
      handleBackButton,
      currencies

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
          name="id"
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

        {/* start:Project cost */}
        <Form.Item
          label="Project total cost"
          name="amount"
          title="Project Total cost e.g 37282"
          rules={[
            {
              required: true,
              message: "Project Total cost is required",
            },
          ]}
        >
        <Input/>
        </Form.Item>
        {/* end:ptoject cost */}

        {/* start:currency */}
        <Form.Item
          label="Currency"
          name="currency_id"
          title="Currency cost e.g Dollar"
          rules={[
            {
              required: true,
              message: "Currency is required",
            },
          ]}
        >
             <Select >
            {currencies.map((currence) => (
              <Select.Option value={currence.id}>{currence.iso}</Select.Option>
            ))}
            </Select>
        </Form.Item>
        {/* end:currency */}

        {/* start:leader */}
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
        {/* end:leaders */}

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

ProjectForm.defaultProps = {
  Project: {},
};

ProjectForm.propTypes = {
  Project: PropTypes.shape({
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


export default ProjectForm
