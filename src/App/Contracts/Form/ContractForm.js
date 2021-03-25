
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Form, Input, Button } from 'antd';
import { contractActions } from "../../../../../redux/modules/contracts";
import { bindActionCreators } from "redux";

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
 * @name ContractForm
 * @description renders form for creating contract
 */
function ContractForm({ createContract, next }) {

	const onFinish = (values) => {
		createContract({ ...values });
		next();
	};

	const selected = null;

	return (
		<>
			<Form.Provider
				onFormFinish={(name, { values, forms }) => {
				}}
			>

				<Form
					labelCol={labelCol}
					wrapperCol={wrapperCol}
					name="basicForm"
					onFinish={onFinish}
					contractsValues={{
						contracts_id: selected?.contracts_id,
						name: selected?.name,
						leaders: selected?.leaders,
						description: selected?.description,
					}}
					autoComplete="off"
					// className="ProjectForm"
					className="ContractForm"
				>
					<h4>Please Fill the form correctly</h4>

					{/* start:contractor */}
					<Form.Item
						label="Contractor"
						name="contractor"
						title="Contractor e.g Derms"
						rules={[
							{
								required: true,
								message: "Contractor is required",
							},
						]}
					>
						<Input />
					</Form.Item>
					{/* end:contractor */}

					{/* start:contract_value */}
					<Form.Item
						label="Contract Value"
						name="contract_value"
						title="Contract Value e.g USD 1000000.00"
						rules={[
							{
								required: true,
								message: "Contract Value is required",
							},
						]}
					>
						<Input />
					</Form.Item>
					{/* end:contract_value */}

					{/* start:Contract Period */}
					<Form.Item
						label="Contract Period"
						name="contract_period"
						title="Contract Period e.g 9 months"
						rules={[
							{
								required: true,
								message: "Contract Period is required",
							},
						]}
					>
						<Input />
					</Form.Item>
					{/* end:Contract Period */}

					{/* start:form actions */}
					<Form.Item wrapperCol={{ span: 24 }} style={{ textAlign: "right" }}>
						<Button
							type="primary"
							htmlType="submit"
							style={{ marginLeft: 8 }}
						>
							Submit
            </Button>
					</Form.Item>
					{/* end:form actions */}
				</Form>
			</Form.Provider>
		</>
	);
}

const mapStateToProps = state => ({
	// regions: contractSelectors.getRegionsSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
	createContract: bindActionCreators(contractActions.createContractStart, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContractForm);

ContractForm.propTypes = {
	createContract: PropTypes.func.isRequired,
	next: PropTypes.func.isRequired,
}

ContractForm.defaultProps = {
	// regions: []
}
