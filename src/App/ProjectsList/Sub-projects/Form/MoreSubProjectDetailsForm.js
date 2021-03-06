
import React, { Component } from "react";
import PropTypes from "prop-types";
import {
    Button,
    Form,
    Row,
    Col,
    Select,
    Typography,
    DatePicker,

} from "antd";
import { connect } from "react-redux";
import API from '../../../../API';
import { generateDateString, createDateFromString } from "../../../../Util";
import { projectActions, projectSelectors } from "../../../../redux/modules/projects";
import { subProjectsActions } from "../../../../redux/modules/subProjects";
import SubProjectItemsForm from "./SubProjectItems";

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
    const currency = currencies.find(({ id }) => id === currency_id);
    return currency.iso;
};


/**
 * @function
 * @name getItemFromItems
 * @description get item name from items
 */
const getItemFromItems = (itemId, items) => {
    const item = items.find(({ id }) => id === itemId);
    console.log(item)
    return item.name;
}


class MoreSubProjectDetails extends Component {
    state = {
        showDistrictsSelect: false,
        isEditForm: false,
        visibleTotalProjectCost: false,
        visibleCommitmentAmount: false,
        visibleSubProjectItems: false,
        commitment_amount_id: null,
        total_project_cost_id: null,
        supervising_agencies: [],
        actors: [],
        phases: [],
        contractors: [],
    }

    componentDidMount() {
        API.getSupervisingAgencies()
            .then(({ data }) => this.setState({ supervising_agencies: data }));
        API.getActors()
            .then(({ data }) => this.setState({ actors: data.data }));
        API.getPhases()
            .then(({ data }) => this.setState({ phases: data }));
        API.getContractors()
            .then(({ data }) => this.setState({ contractors: data }));
        const { getItems, getProgress } = this.props;
        getItems();
        getProgress();
    }

    showSubProjectItemsModal = () => {
        this.setState({ visibleSubProjectItems: true });
    };

    hideSubProjectItemsModal = () => {
        this.setState({ visibleSubProjectItems: false });
    };


    // form finish(submit) handler
    onFinish = (values) => {
        const start_date = generateDateString(values?.start_date);
        const end_date = generateDateString(values?.end_date);
        const { subProject, getSubProjects, closeSubProjectForm, isEditForm, updateSubProject, selected } = this.props;
        const payload = { ...values, start_date, end_date, sub_project_id: subProject?.data.id, };

        if (isEditForm) {
            const updates = JSON.parse(localStorage.getItem("updated"));
            const { name, project_id, description } = updates
            const updatedData = { ...values, start_date, end_date, name, project_id, description, sub_project_id: selected.id };
            updateSubProject(updatedData, selected.id);
            closeSubProjectForm()
        }
        else {
            API.createSubProjectDetails(payload)
                .then(() => {
                    getSubProjects();
                    closeSubProjectForm();
                });
        }

    };


    render() {
        const { supervising_agencies, actors, phases, contractors, visibleSubProjectItems, } = this.state;
        const { selected, items, subProject, progress } = this.props;
        return (
            <Form.Provider
                onFormFinish={(name, { values, forms }) => {
                    if (name === 'subProjectItemsForm') {
                        const { MoreSubProjectDetails } = forms;
                        const items = MoreSubProjectDetails.getFieldValue('items') || [];
                        MoreSubProjectDetails.setFieldsValue({
                            items: [...items, values],
                        });
                        this.setState({visibleSubProjectItems: false});
                      }

                 }}
                
                >
                <Form
                    labelCol={labelCol}
                    wrapperCol={wrapperCol}
                    onFinish={this.onFinish}
                    autoComplete="off"
                    className="MoreSubProjectDetails"
                    name="MoreSubProjectDetails"
                    initialValues={{
                        supervising_agency_id: selected?.details?.supervising_agency.name,
                        actor_id: selected?.details?.actor.name,
                        phase_id: selected?.details?.phase.name,
                        contractor_id: selected?.details?.contractor.name,
                        item_id: selected?.details.item.name,
                        start_date: createDateFromString(selected?.details?.start_date),
                        end_date: createDateFromString(selected?.details?.end_date),
                    }}
                >
                    <h4>Please provide sub project details</h4>

                    {/* start: supervising agency */}
                    <Form.Item
                        label="Supervising Agency"
                        name="supervising_agency_id"
                        rules={[
                            {
                                required: true,
                                message: "Supervising Agency is required",
                            },
                        ]}
                    >
                        <Select>
                            {supervising_agencies.map((supervising_agency) => (
                                <Select.Option value={supervising_agency.id} style={{ textTransform: 'Capitalize' }}>{supervising_agency.name}</Select.Option>
                            ))}
                        </Select>
                    </Form.Item>
                    {/* end:supervising agency */}

                    {/* start:LGA */}
                    <Form.Item
                        label="Local Government Authority"
                        name="actor_id"
                    >
                        <Select >
                            {actors.map((actor) => (
                                <Select.Option value={actor.id}>{actor.name}</Select.Option>
                            ))}
                        </Select>
                    </Form.Item>
                    {/* end:LGA */}

                    {/* start:agencies */}
                    <Form.Item
                        label="Phase"
                        name="phase_id"
                    >
                        <Select >
                            {phases.map((phase) => (
                                <Select.Option value={phase.id}>{phase.name}</Select.Option>
                            ))}
                        </Select>
                    </Form.Item>
                    {/* end:agencies */}

                    {/* start:contractors  */}
                    <Form.Item
                        label="Contractors"
                        name="contractor_id"
                    >
                        <Select>
                            {contractors.map((contractor) => (
                                <Select.Option value={contractor.id}>{contractor.name}</Select.Option>
                            ))}
                        </Select>
                    </Form.Item>
                    {/* end:contractors */}

                    {/* start: items list */}
                    <Form.Item
                        label="Sub Project Items"
                        shouldUpdate={(prevValues, curValues) => prevValues.items !== curValues.items}
                    >
                        {({ getFieldValue }) => {
                            const itemsData = getFieldValue('items') || [];
                            console.log(itemsData[0]);
                            return (
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'flex-start'
                                }}>
                                    {itemsData.length ? (
                                        <ul>
                                            {itemsData.map((item, index) => (
                                                <li key={index} className="user">
                                                    {`${getItemFromItems(item.item_id, items)} - (${item.quantity})`}
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                            <div>
                                                <Typography.Text className="ant-form-text" type="secondary">
                                                    No Item(s) yet, please add item(s)
                          </Typography.Text>
                                            </div>
                                        )}
                                    <Button
                                        size="small"
                                        htmlType="button"
                                        style={{
                                            fontSize: '0.9em'
                                        }}
                                        onClick={this.showSubProjectItemsModal}
                                    >
                                        Add
                    </Button>
                                </div>
                            );
                        }}
                    </Form.Item>
                    {/* end: project sectors list */}


                    <Row justify="space-between">
                        <Col span={8}>
                            {/* start: start date */}
                            <Form.Item
                                label="Start Date"
                                name="start_date"
                                rules={[
                                    {
                                        required: true,
                                        message: "start date is required",
                                    },
                                ]}
                            >
                                <DatePicker />
                            </Form.Item>
                        </Col>
                        {/* end: start date */}

                        {/* start:end date */}
                        <Col span={8}>
                            <Form.Item
                                label="End Date"
                                name="end_date"
                                rules={[
                                    {
                                        required: true,
                                        message: "end date is required",
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
                        <Button type="default" onClick={() => { }} >
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

                <SubProjectItemsForm
                    visible={visibleSubProjectItems}
                    onCancel={this.hideSubProjectItemsModal}
                    items={items}
                    subProject={subProject}
                    progress={progress}
                />


            </Form.Provider>
        );
    }

}


const mapStateToProps = (state) => {
    return {
        subProject: projectSelectors.getSubProjectSelector(state),
        items: projectSelectors.getItemsSelector(state),
        progress: projectSelectors.getProgressSelector(state)
    };
};

const mapDispatchToProps = {
    closeForm: projectActions.closeSubProjectForm,
    getSubProjects: subProjectsActions.getSubProjectsStart,
    getItems: projectActions.getItemsStart,
    getProgress: projectActions.getProgressStart,
}

export default connect(mapStateToProps, mapDispatchToProps)(MoreSubProjectDetails);


MoreSubProjectDetails.defaultProps = {
    subProject: null,
    items: [],
    progress: null
};

MoreSubProjectDetails.propTypes = {
    subProject: PropTypes.object.isRequired,
    items: PropTypes.object.isRequired,
    progress: PropTypes.object.isRequired,
    closeForm: PropTypes.func.isRequired,
    getSubProjects: PropTypes.func.isRequired,
    getProgress: PropTypes.func.isRequired,
    getItems: PropTypes.func.isRequired
};


