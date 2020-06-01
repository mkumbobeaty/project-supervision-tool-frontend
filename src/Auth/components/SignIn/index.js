import React from 'react';
import PropTypes from 'prop-types';
import { Input, Button, Form } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import './styles.css';

/**
 * @function
 * @name SignIn
 * @description Sign In form  component
 * @param {object} props props object
 * @param {boolean} props.loading Flag for showing login http request state
 * @param {object} props.history Browser history object
 * @returns {object} Sign In Form
 * @version 0.1.0
 * @since 0.1.0
 */
const SignIn = ({ loading, history }) => {

  return (
    <div className="SignIn">
      <Form autoComplete="off">
        {/* username field */}
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              email: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input
            prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Username"
          />
        </Form.Item>
        {/* end username field */}

        {/* password field */}
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input.Password
            prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
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
    </div>
  );
};

SignIn.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  loading: PropTypes.bool.isRequired,
};

export default SignIn
