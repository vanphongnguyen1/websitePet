import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd'
import { Link } from 'react-router-dom'
import { fetchLogin, setError, setToken, defaulrError } from '../../redux/loginSlice'
import { setStatusLogin } from '../../redux/statusLoginSlice'
import { fetchCartOfUser } from '../../redux/cartsSlice'
import { fetchOrderofCart } from '../../redux/ordersSlice'
import { fetchProductInCart } from '../../redux/productInCartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useHistory } from 'react-router-dom'
import './style.scss'

const Login = ({ setIslogin }) => {
  const location = useLocation();
  const history = useHistory()
  const dispatch = useDispatch()
  const dataLogin = useSelector(state => state.login)

  const onFinish = values => {
    const title = "client"
    const data = new FormData()
    dispatch(defaulrError())

    data.append('title', title)
    data.append('email', values.email)
    data.append('password', values.password)

    dispatch(fetchLogin(data))
    .then(data => {
      const { payload } = data

      if (typeof payload === 'object') {
        dispatch(fetchCartOfUser(payload.id))
          .then(res => {
            const data = res.payload[0]

            dispatch(fetchOrderofCart(data.id))
            dispatch(fetchProductInCart(data.id))
          })

          if (location.pathname === '/quen-mat-khau') {
            history.push('/')
          }

        dispatch(setToken(payload.id))

        sessionStorage.setItem('id', payload.id)
        // history.replace("/dashboard")
        dispatch(setStatusLogin(false))
        return
      }
      dispatch(setError(payload))
    })
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
          label="Email"
          name="email"
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

        <p className="message-err">
          {dataLogin.error}
        </p>

        <Form.Item name="remember" valuePropName="checked">
          <div>
            <Checkbox>Nhớ mật khẩu.</Checkbox>

            <Link to="/quen-mat-khau" className="forgot-password" onClick={() => dispatch(setStatusLogin(false))}>
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
