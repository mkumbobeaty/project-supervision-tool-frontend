import React, { Component } from "react";
import PropTypes from "prop-types";
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
import { generateDateString, generateYearString} from "../../../../../Util";
import { connect } from "react-redux";
import { projectDetailsOperator, projectDetailsSelectors } from "../ProjectsDetails/duck";

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


class ProjectDetailsForm extends Component {
  state = {
    showDistrictsSelect: false,
    isEditForm: false,
  }

 componentDidMount () {
  const { getBorrowers, getAgencies, getFundingOrgs } = this.props;
  getBorrowers();
  getAgencies();
  getFundingOrgs()
 }

 
  // form finish(submit) handler
  onFinish = (values) => {
    const {  project, submittedValues, commitment_cost, amount_cost } = this.props
    const { id } = project;
    const  total_project_cost_id = amount_cost.id;
    const commitment_amount_id = commitment_cost.id

    const approval_date = generateDateString(values.approval_date);
    const approval_fy = generateYearString(values.approval_fy);
    const closing_date = generateDateString(values.closing_date);

    const payload = { 
        ...values,
        project_id: id,
        total_project_cost_id, 
        approval_date,
        approval_fy,
        commitment_amount_id,
        closing_date
      };    
      
    if (this.props.isEditForm) {
      this.props.updateProject(payload, this.props.selected.id);
    } else {
      debugger
      submittedValues(payload);
    }
  };


  render() {
    const {
      selected,
      handleBackButton,
      partiners,
      agencies,
      borrowers
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
        className="ProjectDetailsForm"
      >
        {/* start:type */}
        <Form.Item
          label="Project Region"
          name="project_region"
          title="Project regions e.g East africa"
          rules={[
            {
              required: true,
              message: "Project region is required",
            },
          ]}
        >
          <Input />
        </Form.Item>
        {/* end:project id */}

        <Form.Item
          label="Project Status"
          name="status"
          title="Project status e.g Active"
          type="boolean"
          rules={[
            {
              required: true,
              message: "Project status is required",
            },
          ]}
        >
          <Input />
        </Form.Item>
        {/* end:project status */}

        {/* start:borrower */}
        <Form.Item
          label="Borrowers"
          name="borrower_id"
          title="Borrower e.g DMDP"
        >
          <Select >
            {borrowers.map((borrower) => (
              <Select.Option value={borrower.id}>{borrower.name}</Select.Option>
            ))}
          </Select>
        </Form.Item>
        {/* end:borrower */}

        {/* start:agencies */}
        <Form.Item
          label="Implementing Agency"
          name="implementing_agency_id"
          title="implementing agency e.g World bank"
        >
          <Select >
            {agencies.map((agency) => (
              <Select.Option value={agency.id}>{agency.name}</Select.Option>
            ))}
          </Select>
        </Form.Item>
        {/* end:agencies */}

        {/* start:funding organisation  */}
        <Form.Item
          label="Funding Organizations"
          name="funding_organisation_id"
          title="funding organisation i.e Worldbank group"
        >
          <Select>
            {partiners.map((partiner) => (
              <Select.Option value={partiner.id}>{partiner.name}</Select.Option>
            ))}
          </Select>
        </Form.Item>
        {/* end:funding organisation */}

        <Row justify="space-between">
          <Col span={8}>
            <Form.Item
              label="Approval FY"
              name="approval_fy"
              title="project approval fiscal year date e.g 06-20-2020"
              rules={[
                {
                  required: true,
                  message: "project approval fiscal year date is required",
                },
              ]}
            >
              <DatePicker picker="year"/>
            </Form.Item>
          </Col>
          {/* end:project approval fiscal year */}
          <Col span={8}>
            <Form.Item
              label="Approval Date"
              name="approval_date"
              title="project approval date e.g 06-20-2020"
              rules={[
                {
                  required: true,
                  message: "project approval  date is required",
                },
              ]}
            >
              <DatePicker />
            </Form.Item>
          </Col>
          {/* end:project approval date */}
          {/* start:end date */}
          <Col span={8}>
            <Form.Item
              label="Closing Date"
              title="project closing end date e.g 07-30-2020"
              name="closing_date"
              rules={[
                {
                  required: true,
                  message: "projects end date is required",
                },
              ]}
            >
              <DatePicker />
            </Form.Item>
          </Col>
          {/* end:end date */}
        </Row>

        {/* start:form actions */}
        <Form.Item wrapperCol={{ span: 24 }} style={{ textAlign: "right" }}>
          <Button type="default" onClick={handleBackButton} >
            Back
           </Button>
          <Button
            type="primary"
            htmlType="submit"
            style={{ marginLeft: 8 }}
          >
            Next
            </Button>
        </Form.Item>
        {/* end:form actions */}

      </Form>
    );
  }

}


const mapStateToProps = (state) => {
  return {   
    agencies:projectDetailsSelectors.getAgenciesSelector(state),
    borrowers: projectDetailsSelectors.getBorrowersSelector(state),
    partiners:projectDetailsSelectors.getFundingOrgsSelector(state),
    amount_cost:projectDetailsSelectors.getCreatedAmountCostSelector(state),
    commitment_cost:projectDetailsSelectors.getCreatedCommitmentCostSelector(state),
  };
};

const mapDispatchToProps = {
  getBorrowers: projectDetailsOperator.getBorrowersStart,
  getFundingOrgs: projectDetailsOperator.getFundingOrgStart,
  getAgencies: projectDetailsOperator.getAgenciesStart,

}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetailsForm);


ProjectDetailsForm.defaultProps = {
  Project: {},
};

ProjectDetailsForm.propTypes = {
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

