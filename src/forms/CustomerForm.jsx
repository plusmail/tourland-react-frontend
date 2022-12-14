import React from 'react';
import { Button, Form, Input } from 'antd';

export default function CustomerForm({ isUpdateForm = false }) {
  return (
    <>
      <Form.Item
        label="고객성명"
        name="username"
        rules={[
          {
            required: true,
            message: '이름을 입력하세요.!',
          },
        ]}
      >
        <Input />
      </Form.Item>
        <Form.Item
            label="아이디"
            name="userid"
            rules={[
                {
                    required: true,
                    message: '아이디를 입력하세요.!',
                },
            ]}
        >
            <Input />
        </Form.Item>

      <Form.Item
        label="생년월일"
        name="userbirth"
        rules={[
          {
            required: true,
            message: '생년월일을 입력하세요.!',
          },
        ]}
        style={{
          display: 'inline-block',
          width: 'calc(50%)',
          paddingRight: '5px',
        }}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="연락처"
        name="usertel"
        rules={[
          {
            required: false,
            message: '연락처를 입력하세요.!',
          },
        ]}
        style={{
            display: 'inline-block',
            width: 'calc(50%)',
            paddingLeft: '5px',
        }}
      >
        <Input />
      </Form.Item>

        <Form.Item
            label="주소"
            name="useraddr"
            rules={[
                {
                    required: true,
                    message: '주소를 입력하세요.!',
                },
            ]}

        >
            <Input />
        </Form.Item>

        <Form.Item
            name="Passport"
            label="userpassport"
            rules={[
                {
                    required: false,
                    message: 'Passport번호를 입력하세요.!',
                },
            ]}
        >
            <Input />
        </Form.Item>

      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input />
      </Form.Item>
    </>
  );
}
