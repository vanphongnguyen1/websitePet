import React from 'react'
import {
  Form,
  Input,
  Checkbox,
  Button,
} from 'antd';
import './style.scss'

const Register = props => {
  const { setIslogin } = props
  const [form] = Form.useForm()

  const onFinish = (values) => {
    console.log('Received values of form: ', values)
    setIslogin(true)
  }

  return (
    <div className="box-register">
      <Form
        form={form}
        name="register"
        onFinish={onFinish}
        // initialValues={{
        //   prefix: '86',
        // }}
        // scrollToFirstError
      >
        <Form.Item
          name="nickname"
          label={
            <span>
              Nickname
            </span>
          }
          rules={[
            {
              required: true,
              message: 'Please input your nickname!',
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="phone"
          label="Phone Number"
          rules={[
            {
              required: true,
              message: 'Please input your phone number!',
            },
          ]}
        >
          <Input
            style={{
              width: '100%',
            }}
          />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="Confirm Password"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }

                return Promise.reject('The two passwords that you entered do not match!');
              },
            }),
          ]}
        >
          <Input.Password />
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

        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value ? Promise.resolve() : Promise.reject('Should accept agreement'),
            },
          ]}
        >
          <Checkbox>
            I have read the <a href="#sdf">agreement</a>
          </Checkbox>
        </Form.Item>

        <Form.Item >
          <Button type="primary" htmlType="submit">
            Đăng ký
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Register
