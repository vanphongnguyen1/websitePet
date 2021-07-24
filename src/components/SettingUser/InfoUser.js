import React, { useState, useEffect } from 'react'
import { Form, Input, Select, Button } from 'antd'
import { customAxiosApi } from '../reuse/CustomAxios'
import { REGEX, API_NAME } from '../dataConst'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser } from '../redux/loginSlice'
// import { fetchGender } from '../redux/genderSlice'
import './infoUser.scss'

const InfoUser = ({ dataOrder }) => {
  const dispatch = useDispatch()
  const [form] = Form.useForm()
  const [isDisabled, setIsDisable] = useState(true)
  const [infoUser, setInfoUser] = useState({})
  const dataGender = useSelector((state) => state.gender.list)
  const [validEmail, setValidEmail] = useState('')

  useEffect(() => {
    const id = sessionStorage.getItem('id')
    dispatch(fetchUser(id)).then((res) => {
      setInfoUser(res.payload)
    })
  }, [dispatch])

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

  const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 16 },
  }
  const tailLayout = {
    wrapperCol: { offset: 4, span: 16 },
  }

  const onFinish = (values) => {
    const id = sessionStorage.getItem('id')
    customAxiosApi.put(`${API_NAME.USERS}/${id}`, values).then((resp) => {
      const { data } = resp

      if (typeof data === 'string') {
        setValidEmail('Email đã tồn tại !')
        return
      }
      dispatch(fetchUser(id)).then((res) => {
        setInfoUser(res.payload)
      })
      setIsDisable(true)
    })
  }

  return (
    <>
      <div className="box-title">
        <h6 className="title-info">Thông tin tài khoản</h6>
        <p className="btn-edit-user" onClick={() => setIsDisable(false)}>
          <span className="btn-edit-user--icon fas fa-edit" />
          Cập nhật thông tin tài khoản
        </p>
      </div>

      {infoUser.name && (
        <Form form={form} name="register" onFinish={onFinish} {...layout}>
          <Form.Item
            name="name"
            label="Họ và tên"
            initialValue={infoUser.name}
            rules={[
              {
                required: true,
                message: 'Hãy nhập User Name !',
                whitespace: true,
              },
            ]}
          >
            <Input disabled={isDisabled} />
          </Form.Item>

          <Form.Item
            name="email"
            label="Email"
            initialValue={infoUser.email}
            rules={[
              {
                validator: validatorEmail,
              },
              {
                required: true,
                message: 'Hãy nhập Email !',
              },
            ]}
          >
            <Input disabled={isDisabled} />
          </Form.Item>

          <Form.Item
            name="genderID"
            label="Giới tính"
            initialValue={infoUser.genderID}
            rules={[
              {
                required: true,
                message: 'Hãy nhập giới tính !',
              },
            ]}
          >
            <Select disabled={isDisabled}>
              {dataGender.map((item) => (
                <Select.Option value={item.id} key={item.id}>
                  {item.name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            name="phone"
            label="Số điện thoại"
            initialValue={infoUser.phone}
            rules={[
              {
                validator: validatorPhone,
              },
              {
                required: true,
                message: 'Hãy nhập số điện thoại !',
              },
            ]}
          >
            <Input
              disabled={isDisabled}
              style={{
                width: '100%',
              }}
            />
          </Form.Item>

          <Form.Item
            name="address"
            label="Đại chỉ"
            initialValue={infoUser.address}
            rules={[
              {
                required: true,
                message: 'Hãy nhập địa chỉ !',
                whitespace: true,
              },
            ]}
          >
            <Input disabled={isDisabled} />
          </Form.Item>

          {!isDisabled && (
            <>
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

                      return Promise.reject('Nhập lại mật khẩu không hợp lệ !')
                    },
                  }),
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                  Lưu thay đổi
                </Button>

                <Button
                  type="primary"
                  danger
                  onClick={() => setIsDisable(true)}
                >
                  Hủy bỏ
                </Button>
              </Form.Item>
            </>
          )}
        </Form>
      )}

      <div className="box-title">
        <h6 className="title-info">Số lượng đơn hàng bạn đã mua</h6>
      </div>

      {dataOrder.length ? (
        <p className="info-user__text">
          {' '}
          Bạn đã mua {dataOrder.length} đơn hàng.{' '}
        </p>
      ) : (
        <p className="info-user__text"> Bạn chưa đặt mua sản phẩm. </p>
      )}
    </>
  )
}

export default InfoUser
