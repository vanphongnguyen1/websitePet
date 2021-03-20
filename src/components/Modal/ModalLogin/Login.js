import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd'
import { Link } from 'react-router-dom'
import './style.scss'

const Login = props => {
  const { setIslogin } = props

  const onFinish = (values) => {
    console.log('Success:', values);
  }

  return (
    <div className="box-login">
      <Form
        name="login"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Vui lòng nhập tên đăng nhập',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Vui lòng nhập mật khẩu',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked">
          <div>
            <Checkbox>Nhớ mật khẩu.</Checkbox>

            <Link to="/chua-Setup" className="forgot-password">
              Quên mật khẩu?
            </Link>
          </div>
        </Form.Item>

        <Form.Item>
          <div className="box-login__btn">
            <Button type="primary" htmlType="submit">
              Đăng nhập
            </Button>

            <Button type="link" onClick={() => setIslogin(false)}>
              Đăng ký
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Login
