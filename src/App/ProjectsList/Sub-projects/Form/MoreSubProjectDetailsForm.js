
import React, { Component } from "react";
import PropTypes from "prop-types";
import {
    Button,
    Form,
    Row,
    Col,
    Select,
    DatePicker,
    Typography,

} from "antd";
import { connect } from "react-redux";
import API from '../../../../API';
import {generateDateString} from "../../../../Util";
import {projectActions, projectSelectors} from "../../../../redux/modules/projects";

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


/**
 * @function
 * @name getSectorNameFromSectors
 * @description get sector name from sectors
 */
const getSectorNameFromSectors = (sectorId, sectors) => {
    const sector = sectors.find(({ id }) => id === sectorId );
    return sector.name;
}


class MoreSubProjectDetails extends Component {
    state = {
        showDistrictsSelect: false,
        isEditForm: false,
        visibleTotalProjectCost: false,
        visibleCommitmentAmount: false,
        visibleProjectSectors: false,
        commitment_amount_id: null,
        total_project_cost_id: null,
        supervising_agencies: [],
        actors: [],
        phases: [],
        contractors: [],
    }

    componentDidMount() {
        API.getSupervisingAgencies()
            .then(({ data }) => this.setState({supervising_agencies: data}));
        API.getActors()
            .then(({ data }) => this.setState({actors: data.data}));
        API.getPhases()
            .then(({ data }) => this.setState({phases: data}));
        API.getContractors()
            .then(({ data }) => this.setState({contractors: data}));
    }


    // form finish(submit) handler
    onFinish = (values) => {
        const start_date = generateDateString(values?.start_date);
        const end_date = generateDateString(values?.end_date);
        const { subProject, getSubProjects, closeForm} = this.props;
        const payload = { ...values, start_date, end_date, sub_project_id: subProject?.data.id };
        API.createSubProjectDetails(payload)
            .then( () => {
                getSubProjects();
                closeForm();
            });

    };


    render() {
        const { supervising_agencies, actors, phases, contractors } = this.state;
        return (
            <Form.Provider
                onFormFinish={(name, { values, forms }) => {}}>
                <Form
                    labelCol={labelCol}
                    wrapperCol={wrapperCol}
                    onFinish={this.onFinish}
                    autoComplete="off"
                    className="MoreSubProjectDetails"
                    name="MoreSubProjectDetails"
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
                                <Select.Option value={supervising_agency.id} style={{ textTransform: 'Capitalize'}}>{supervising_agency.name}</Select.Option>
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
                                <DatePicker/>
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
                        <Button type="default" onClick={() => {}} >
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



            </Form.Provider>
        );
    }

}


const mapStateToProps = (state) => {
    return {
        subProject: projectSelectors.getSubProjectSelector(state),
    };
};

const mapDispatchToProps = {
    closeForm: projectActions.closeSubProjectForm,
    getSubProjects: projectActions.getSubProjectsStart
}

export default connect(mapStateToProps, mapDispatchToProps)(MoreSubProjectDetails);


MoreSubProjectDetails.defaultProps = {
    subProject: null,
    sectors: [],
};

MoreSubProjectDetails.propTypes = {
    subProject: PropTypes.object.isRequired,
    closeForm: PropTypes.func.isRequired,
    getSubProjects: PropTypes.func.isRequired,
};


