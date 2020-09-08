import React, {Component} from "react";
import PropTypes from "prop-types";
import {Input, Button, Form, Row, Col} from "antd";
import {LockOutlined, UserOutlined} from "@ant-design/icons";
import "./styles.css";
import {bindActionCreators} from "redux";
import {resourceOperations} from "../../../Resources/duck";
import {connect} from "react-redux";
import {appOperations} from "../../../duck";


/**
 * @class
 * @name SignIn
 * @description Sign In form  component
 * @version 0.1.0
 * @since 0.1.0
 */
class SignIn extends Component {

    onFinish = (values) => {
        console.log(values);
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
                <Row>
                    <Col span={13} offset={1} className="background">
                    </Col>
                    <Col span={10} className="SignInForm">
                        <div className="Logo">
                            <h1>Pamoja</h1>
                            <span>A platform for matching needs and resources</span>
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
                                    Sign In
                                </Button>
                                <div className="version-text">version: 1.0.0</div>
                            </Form.Item>
                            {/* end submit button */}
                        </Form>
                    </Col>
                </Row>
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
        loading: state.auth.isLogin,
        accessToken: state.auth.login?.data?.access_token,
        errorMsg: state.auth.login?.message,
    };
};

const mapDispatchToProps = (dispatch) => ({
    login: bindActionCreators(appOperations.login, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);


