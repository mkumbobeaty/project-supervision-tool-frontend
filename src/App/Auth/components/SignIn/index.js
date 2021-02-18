import React, {Component} from "react";
import PropTypes from "prop-types";
import {Input, Button, Form} from "antd";
import {LockOutlined, UserOutlined} from "@ant-design/icons";
import "./styles.css";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {authActions, authSelectors} from "../../../../redux/modules/auth";


/**
 * @class
 * @name SignIn
 * @description Sign In form  component
 * @version 0.1.0
 * @since 0.1.0
 */
class SignIn extends Component {

    /**
     * @function
     * @name onFinish
     * @description collects values submitted in form
     * and dispatches login start action
     * @param {Object} values
     */
    onFinish = (values) => {
        this.props.login(values)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.accessToken !== this.props.accessToken) {
            if (this.props.accessToken) {
                this.props.history.push('/app/map');
            }
        }
    }

    render() {
        const {loading, errorMsg} = this.props;
        return (
            <div className="SignIn">
                    <div className="SignInForm">
                        <div className="Logo">
                            <h2>Projects Supervison tool</h2>
                            <h5>Please Login to your account</h5>
                        </div>
                        <div style={{color: 'red'}}>{!loading && errorMsg ? errorMsg : ''}</div>
                        <Form autoComplete="off" onFinish={this.onFinish}>
                            {/* username field */}
                            <Form.Item
                                name="email"
                                rules={[
                                    {
                                        required: true,
                                        email: true,
                                        message: "Please input your username!",
                                    },
                                ]}
                            >
                                <Input
                                    prefix={<UserOutlined style={{color: "rgba(0,0,0,.25)"}}/>}
                                    placeholder="Email"
                                />
                            </Form.Item>
                            {/* end username field */}

                            {/* password field */}
                            <Form.Item
                                name="password"
                                rules={[
                                    {required: true, message: "Please input your Password!"},
                                ]}
                            >
                                <Input.Password
                                    prefix={<LockOutlined style={{color: "rgba(0,0,0,.25)"}}/>}
                                    placeholder="Password"
                                />
                            </Form.Item>
                            {/* end password field */}

                            {/* submit button */}
                            <Form.Item>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    className="signIn-form-button"
                                    loading={loading}
                                >
                                    Log In
                                </Button>
                            </Form.Item>
                            {/* end submit button */}
                        </Form>
                        </div>
            </div>
        );
    }
}

SignIn.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired,
    }).isRequired,
    loading: PropTypes.bool.isRequired,
};

SignIn.defaultProps = {
    loading: null
}

const mapStateToProps = (state) => {
    return {
        loading: authSelectors.isLoginSelector(state),
        accessToken: authSelectors.accessTokenSelector(state),
        errorMsg: authSelectors.loginErrorMessageSelector(state),
    };
};

const mapDispatchToProps = (dispatch) => ({
    login: bindActionCreators(authActions.loginStart, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);


