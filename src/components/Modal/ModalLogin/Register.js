import React, { useState } from 'react'
import {
  Form,
  Input,
  Select,
  Button,
} from 'antd';
import { customAxiosApi } from '../../reuse/CustomAxios'
import { REGEX, API_NAME } from '../../dataConst'
import { useSelector } from 'react-redux'
import './style.scss'

const Register = ({ setIslogin }) => {
  const [form] = Form.useForm()
  const [validEmail , setValidEmail] = useState('')
  const dataGender = useSelector(state => state.gender.list)

  const validatorEmail = (rules, value) => {
    const regex = REGEX.EMAIL
    const match = regex.test(value)

    if (validEmail) {
      return Promise.reject(validEmail)
    }

    if (!match) {
      return Promise.reject('Email không hợp lệ !')
    }

    return Promise.resolve()
  }

  const validatorPhone = (rules, value) => {
    const regex = REGEX.PHONE
    const match = regex.test(value)

    if (!match) {
      return Promise.reject('Đầu số 09|03|08|05|07 gồm 10 số !')
    }

    return Promise.resolve()
  }

  const validatorPassWord = (rules, value) => {
    const regex = REGEX.PASSWORD
    const match = regex.test(value)

    if (!match) {
      return Promise.reject('Tối thiểu 8 ký tự, ít nhất một chữ cái và một số!')
    }

    return Promise.resolve()
  }

  const onFinish = (values) => {
    const data = {
      ...values,
      role: 0
    }

    customAxiosApi.post(API_NAME.USERS, data)
      .then(resp => {
        const { data } = resp

        if (typeof data === 'string') {
          setValidEmail('Email đã tồn tại !')
        }
        setIslogin(true)
      })
  }

  return (
    <div className="box-register">
      <Form
        form={form}
        name="register"
        onFinish={onFinish}
      >
        <Form.Item
          name="name"
          label={
            <span>
              User Name
            </span>
          }
          rules={[
            {
              required: true,
              message: 'Hãy nhập User Name !',
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="email"
          label="Email"
          rules={[
            {
              validator: validatorEmail
            },
            {
              required: true,
              message: 'Hãy nhập Email !',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="genderID"
          label="Gender"
          rules={[
            {
              required: true,
              message: 'Hãy nhập giới tính !',
            },
          ]}
          initialValue={1}
        >
          <Select
          >
            {
              dataGender.map(item => (
                <Select.Option value={item.id} key={item.id}>
                  {item.name}
                </Select.Option>
              ))
            }
          </Select>
        </Form.Item>

        <Form.Item
          name="phone"
          label="Phone Number"
          rules={[
            {
              validator: validatorPhone
            },
            {
              required: true,
              message: 'Hãy nhập số điện thoại !',
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
          name="address"
          label="Address"
          rules={[
            {
              required: true,
              message: 'Hãy nhập địa chỉ !',
              whitespace: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              validator: validatorPassWord
            },
            {
              required: true,
              message: 'Hãy nhập mật khẩu !',
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
              message: 'Hãy nhập lại mật khẩu !',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }

                return Promise.reject('Nhập lại mật khẩu không hợp lệ !');
              },
            }),
          ]}
        >
          <Input.Password />
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
