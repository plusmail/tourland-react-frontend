import React from 'react';
import { Form, Input, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

export default function LoginForm() {
  return (
    <>
      <Form.Item
        name="userid"
        rules={[
          {
            required: true,
            message: 'Please input your ID!',
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="manager"
          size="large"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          placeholder="admin123"
          size="large"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>
    </>
  );
}
