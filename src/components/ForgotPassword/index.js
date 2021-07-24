import React, { useState } from 'react'
import { Form, Input, Button } from 'antd'
import { customAxiosApi } from '../reuse/CustomAxios'
import { REGEX, API_NAME } from '../dataConst'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setStatusLogin } from '../redux/statusLoginSlice'
import './style.scss'

const ForgotPassword = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const [dataCode, setDateCode] = useState(null)
  const [validEmail, setValidEmail] = useState('')
  const [validCode, setValidCode] = useState('')
  const [isBoxChangePassword, setIsBoxChangePassword] = useState(null)

  const layout = {
    labelCol: {
      span: 6,
    },
    wrapperCol: {
      span: 16,
    },
  }
  const tailLayout = {
    wrapperCol: {
      offset: 6,
      span: 16,
    },
  }

  const validatorEmail = (rules, value) => {
    const regex = REGEX.EMAIL
    const match = regex.test(value)

    if (!value) return

    if (validEmail) {
      return Promise.reject(validEmail)
    }

    if (!match) {
      return Promise.reject('Email không hợp lệ !')
    }

    return Promise.resolve()
  }

  const validatorPassWord = (rules, value) => {
    const regex = REGEX.PASSWORD
    const match = regex.test(value)

    if (!value) return

    if (!match) {
      return Promise.reject('Tối thiểu 8 ký tự, ít nhất một chữ cái và một số!')
    }

    return Promise.resolve()
  }

  const onFinish = (values) => {
    setValidEmail('')
    customAxiosApi.post('auth/forgotPassword', values).then((res) => {
      const newData = res.data

      if (typeof newData === 'string') {
        setValidEmail(newData)
        return
      }

      if (typeof newData === 'object') {
        setDateCode(newData)
      }
    })
  }

  const handleSubmitCode = (values) => {
    setValidCode('')
    if (values.code === dataCode.code) {
      setIsBoxChangePassword(true)
      return
    }
    setValidCode('Bạn nhập sai mã Code!')
  }

  const handleSubmitChangePassword = (values) => {
    customAxiosApi
      .put(`${API_NAME.USERS}/${dataCode.id}`, { password: values.password })
      .then(() => {
        history.push('/')
        dispatch(setStatusLogin(true))
      })
  }

  return (
    <>
      <div className="forgot-password">
        <div className="container">
          <div className="row justify-center">
            <div className="col-xl-6">
              {isBoxChangePassword ? (
                <div className="forgot-password__box">
                  <h3 className="forgot-password__title">Nhập mật khẩu mới:</h3>

                  <p className="forgot-password__text">
                    Vui lòng nhập email hoặc số điện thoại để tìm kiếm tài khoản
                    của bạn. Tạo mật khẩu có ít nhất 8 ký tự. Mật khẩu mạnh là
                    sự kết hợp của các chữ cái và số.
                  </p>

                  <Form
                    name="change-password"
                    {...layout}
                    initialValues={{
                      remember: true,
                    }}
                    onFinish={handleSubmitChangePassword}
                  >
                    <Form.Item
                      name="password"
                      label="Password"
                      rules={[
                        {
                          validator: validatorPassWord,
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
                              return Promise.resolve()
                            }

                            return Promise.reject(
                              'Nhập lại mật khẩu không hợp lệ !',
                            )
                          },
                        }),
                      ]}
                    >
                      <Input.Password />
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                      <Button type="primary" htmlType="submit">
                        Submit
                      </Button>
                    </Form.Item>
                  </Form>
                </div>
              ) : !dataCode ? (
                <div className="forgot-password__box">
                  <h3 className="forgot-password__title">
                    Tìm kiếm tài khoản:
                  </h3>

                  <p className="forgot-password__text">
                    Vui lòng nhập email để tìm kiếm tài khoản của bạn.
                  </p>

                  <Form
                    name="submit-code"
                    initialValues={{
                      remember: true,
                    }}
                    onFinish={onFinish}
                  >
                    <Form.Item
                      label="Email"
                      name="email"
                      rules={[
                        {
                          required: true,
                          message: 'Vui lòng nhập email!',
                        },
                        {
                          validator: validatorEmail,
                        },
                      ]}
                      extra={validEmail}
                    >
                      <Input onChange={() => setValidEmail('')} />
                    </Form.Item>
                    <span
                      className="forgot-password__icon fas fa-paper-plane"
                      onClick={onFinish}
                    />
                  </Form>
                </div>
              ) : (
                <div className="forgot-password__box">
                  <h3 className="forgot-password__title">Nhập mã Code:</h3>
                  <p className="forgot-password__text">
                    Bạn đã nhận được một tin nhắn văn bản có mã code trong mail
                    của mình. Mã này chứa 6 ký tự.
                  </p>

                  <Form
                    initialValues={{
                      remember: true,
                    }}
                    onFinish={handleSubmitCode}
                  >
                    <Form.Item
                      label="Code"
                      name="code"
                      extra={validCode}
                      rules={[
                        {
                          required: true,
                          message: 'Vui lòng nhập mã code',
                        },
                      ]}
                    >
                      <Input onChange={() => setValidCode('')} />
                    </Form.Item>
                    <span
                      className="forgot-password__icon fas fa-paper-plane"
                      onClick={handleSubmitCode}
                    />
                  </Form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ForgotPassword
