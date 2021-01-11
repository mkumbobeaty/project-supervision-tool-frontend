import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Button,
  Form,
  Row,
  Col,
  Select,
  DatePicker,
  Input, Typography,

} from "antd";
import { generateDateString, generateYearString } from "../../../../../Util";
import { connect } from "react-redux";
import { projectDetailsOperator, projectDetailsSelectors } from "../ProjectsDetails/duck";
import {projectActions, projectSelectors} from "../../../duck";
import RegionLocationForm from "../../../../components/RegionLocationForm";
import CommitmentAmountForm from "./CommitmentAmountForm";
import TotalProjectCostForm from "./TotalProjectCostForm";

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
 * @function
 * @name getCurrencyIsoFromCurrencies
 * @description gets currrency  iso from array of currencies
 */
const getCurrencyIsoFromCurrencies = (currency_id, currencies) => {
  const currency = currencies.find(({id }) => id === currency_id);
  return currency.iso;
};


class ProjectDetailsForm extends Component {
  state = {
    showDistrictsSelect: false,
    isEditForm: false,
    visibleTotalProjectCost: false,
    visibleCommitmentAmount: false,
    commitment_amount_id: null,
    total_project_cost_id: null,
  }

  componentDidMount() {
    const {
      getBorrowers,
      getAgencies,
      getCurrency,
      getFundingOrgs,
      getEnvironmentalCategories
    } = this.props;
    getBorrowers();
    getAgencies();
    getFundingOrgs();
    getCurrency();
    getEnvironmentalCategories();
  }


  showTotalProjectCostModal = () => {
    this.setState({ visibleTotalProjectCost: true});
  };

  hideTotalProjectCostModal = () => {
    this.setState({ visibleTotalProjectCost: false });
  };


  showCommitmentAmountModal = () => {
    this.setState({ visibleCommitmentAmount: true});
  };

  hideCommitmentAmountModal = () => {
    this.setState({ visibleCommitmentAmount: false });
  };

  setCommitmentAmountId = (id) => {
    this.setState({ commitment_amount_id: id });
  };

  setTotalProjectCostId = (id) => {
    this.setState({ total_project_cost_id: id });
  };


  // form finish(submit) handler
  onFinish = (values) => {
    const { commitment_amount_id, total_project_cost_id } = this.state;
    const approval_date = generateDateString(values.approval_date);
    const approval_fy = generateYearString(values.approval_fy);
    const closing_date = generateDateString(values.closing_date);
    console.log('inside onFinish', {
      ...values,
      approval_date,
      approval_fy,
      closing_date,
      commitment_amount_id,
      total_project_cost_id
    });
    // const { project, submittedValues, commitment_cost, amount_cost } = this.props
    // const { id } = project;
    // const total_project_cost_id = amount_cost.id;
    // const commitment_amount_id = commitment_cost.id
    //
    // const approval_date = generateDateString(values.approval_date);
    // const approval_fy = generateYearString(values.approval_fy);
    // const closing_date = generateDateString(values.closing_date);
    //
    // const payload = {
    //   ...values,
    //   project_id: id,
    //   project_region: 'Africa East',
    //   total_project_cost_id,
    //   approval_date,
    //   approval_fy,
    //   commitment_amount_id,
    //   closing_date
    // };
    //
    // if (this.props.isEditForm) {
    //   this.props.updateProject(payload, this.props.selected.id);
    // } else {
    //   submittedValues(payload);
    // }
  };


  render() {
    const {
      selected,
      handleBackButton,
      partiners,
      agencies,
      currency,
      borrowers,
      environmentalCategories,
    } = this.props;

    const { visibleCommitmentAmount, visibleTotalProjectCost } = this.state;

    const projectStatus = ['active', 'closed', 'dropped', 'pipeline'];
    return (
      <Form.Provider
          onFormFinish={(name, { values, forms }) => {

            // handling commitment amount form
            if (name === 'commitmentAmountForm') {
              const { projectDetailsForm } = forms;
              projectDetailsForm.setFieldsValue({
                commitmentAmountValue: values
              });
              this.setState({visibleCommitmentAmount: false});
            }

            // handling total project cost form
            if (name === 'totalProjectCostForm') {
              const { projectDetailsForm } = forms;
              projectDetailsForm.setFieldsValue({
                totalProjectCostValue: values
              });
              this.setState({visibleTotalProjectCost: false});
            }
          }}
      >
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
            name="projectDetailsForm"
        >
          <h4>Please provide project details</h4>

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
            <Select>
              {projectStatus.map((status) => (
                  <Select.Option value={status} style={{ textTransform: 'Capitalize'}}>{status}</Select.Option>
              ))}
            </Select>
          </Form.Item>
          {/* end:project status */}

          {/* start:borrower */}
          <Form.Item
              label="Borrowers"
              name="borrower_id"
              title="Borrower e.g Ministry of Finance"
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
              title="implementing agency e.g PO-LARG"
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
              title="funding organisation i.e The World Bank"
          >
            <Select>
              {partiners.map((partiner) => (
                  <Select.Option value={partiner.id}>{partiner.name}</Select.Option>
              ))}
            </Select>
          </Form.Item>
          {/* end:funding organisation */}

          {/* start:environmental category  */}
          <Form.Item
              label="Environmental Category"
              name="environmental_category_id"
              title="Environmental category i.e A"
          >
            <Select>
              {environmentalCategories.map((environmentalCategory) => (
                  <Select.Option value={environmentalCategory.id}>{environmentalCategory.name}</Select.Option>
              ))}
            </Select>
          </Form.Item>
          {/* end:environmental category */}

          <Row justify="space-between">
            <Col span={11}>
              {/* start: commitment amount */}
              <Form.Item
                  label="Total Project Cost"
                  shouldUpdate={(prevValues, curValues) => prevValues.totalProjectCostValue !== curValues.totalProjectCostValue }
              >
                {({ getFieldValue }) => {
                  const totalProjectCostValue = getFieldValue('totalProjectCostValue') || null;
                  return (
                      <div>
                        {totalProjectCostValue ? (
                            <Typography.Text className="ant-form-text" type="success" strong={true}>
                              {`${totalProjectCostValue.amount} ${getCurrencyIsoFromCurrencies(totalProjectCostValue.currency_id, currency)}`}
                            </Typography.Text>
                        ): (
                            <Typography.Text className="ant-form-text" type="secondary">
                              Click Add to fill total project cost
                            </Typography.Text>
                        )}
                        <Button
                            size="small"
                            htmlType="button"
                            style={{
                              fontSize: '0.9em'
                            }}
                            onClick={this.showTotalProjectCostModal}
                        >
                          Add
                        </Button>
                      </div>
                  );
                }}
              </Form.Item>
              {/* end: commitment amount */}
            </Col>
            <Col span={11}>
              {/* start: commitment amount */}
              <Form.Item
                  label="Commitment Amount"
                  shouldUpdate={(prevValues, curValues) => prevValues.commitmentAmountValue !== curValues.commitmentAmountValue }
              >
                {({ getFieldValue }) => {
                  const commitmentAmountValue = getFieldValue('commitmentAmountValue') || null;
                  return (
                      <div>
                        {commitmentAmountValue ? (
                            <Typography.Text className="ant-form-text" type="success" strong={true}>
                              {`${commitmentAmountValue.amount} ${getCurrencyIsoFromCurrencies(commitmentAmountValue.currency_id, currency)}`}
                            </Typography.Text>
                        ): (
                            <Typography.Text className="ant-form-text" type="secondary">
                              Click Add to fill commitment amount
                            </Typography.Text>
                        )}
                        <Button
                            size="small"
                            htmlType="button"
                            style={{
                              fontSize: '0.9em'
                            }}
                            onClick={this.showCommitmentAmountModal}
                        >
                          Add
                        </Button>
                      </div>
                  );
                }}
              </Form.Item>
              {/* end: commitment amount */}
            </Col>
          </Row>


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
                <DatePicker picker="year" />
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
        <CommitmentAmountForm
            visible={visibleCommitmentAmount}
            onCancel={this.hideCommitmentAmountModal}
            setCommitmentAmountId={this.setCommitmentAmountId}
            currency={currency}
        />
        <TotalProjectCostForm
            visible={visibleTotalProjectCost}
            onCancel={this.hideTotalProjectCostModal}
            setTotalProjectCostId={this.setTotalProjectCostId}
            currency={currency}
        />
      </Form.Provider>
    );
  }

}


const mapStateToProps = (state) => {
  return {
    agencies: projectDetailsSelectors.getAgenciesSelector(state),
    currency: projectDetailsSelectors.getCurrenciesSelector(state),
    borrowers: projectDetailsSelectors.getBorrowersSelector(state),
    environmentalCategories: projectSelectors.getEnvironmentalCategoriesSelector(state),
    partiners: projectDetailsSelectors.getFundingOrgsSelector(state),
    amount_cost: projectDetailsSelectors.getCreatedAmountCostSelector(state),
    commitment_cost: projectDetailsSelectors.getCreatedCommitmentCostSelector(state),
  };
};

const mapDispatchToProps = {
  getBorrowers: projectDetailsOperator.getBorrowersStart,
  getFundingOrgs: projectDetailsOperator.getFundingOrgStart,
  getAgencies: projectDetailsOperator.getAgenciesStart,
  getCurrency: projectDetailsOperator.getCurrenciesStart,
  getEnvironmentalCategories: projectActions.getEnvironmentalCategoriesStart,

}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetailsForm);


ProjectDetailsForm.defaultProps = {
  Project: null,
};

ProjectDetailsForm.propTypes = {
  Project: PropTypes.object,
  currency: PropTypes.array.isRequired,
  getEnvironmentalCategories: PropTypes.func,
  environmentalCategories: PropTypes.array.isRequired,
  isEditForm: PropTypes.bool.isRequired,
  posting: PropTypes.bool.isRequired,
  items: PropTypes.array,
  onCancel: PropTypes.func.isRequired,
};

