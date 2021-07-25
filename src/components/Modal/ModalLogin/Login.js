import React, { useState } from 'react'
import { Form, Input, Button, Checkbox } from 'antd'
import { Link } from 'react-router-dom'
import {
  fetchLogin,
  setError,
  setToken,
  defaulrError,
} from '../../redux/loginSlice'
import { setStatusLogin } from '../../redux/statusLoginSlice'
import { fetchCartOfUser } from '../../redux/cartsSlice'
import { fetchOrderofCart } from '../../redux/ordersSlice'
import { fetchProductInCart } from '../../redux/productInCartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useHistory } from 'react-router-dom'
import GoogleLogin from 'react-google-login';
import { customAxiosApi } from '../../reuse/CustomAxios'
import { API_NAME } from '../../dataConst'
import FacebookLogin from 'react-facebook-login';
import './style.scss'

const Login = ({ setIslogin }) => {
  const location = useLocation()
  const history = useHistory()
  const dispatch = useDispatch()
  const dataLogin = useSelector((state) => state.login)
  const [valideEmailGoogle, setValideEmailGoogle] = useState('')

  const onFinish = (values) => {
    const title = 'client'
    const data = new FormData()
    dispatch(defaulrError())

    data.append('title', title)
    data.append('email', values.email)
    data.append('password', values.password)

    dispatch(fetchLogin(data)).then((data) => {
      const { payload } = data

      if (typeof payload === 'object') {
        dispatch(fetchCartOfUser(payload.id)).then((res) => {
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

  const responseGoogle = (response) => {
    console.log(response.profileObj);
    const { profileObj } = response

    const user = {
      email: profileObj.email,
      name: profileObj.name,
      avatar: profileObj.imageUrl,
      password: 'phonghd123',
      phone: '0337263377',
      role: 0,
      genderID: 1,
      address: 'Phú Thứ - Kinh Môn - Hải Dương',
    }

    customAxiosApi.post(API_NAME.USERS, user).then((resp) => {
      const { data } = resp

      if (typeof data === 'string') {
        setValideEmailGoogle('Email đã tồn tại !')
      } else {
        customAxiosApi.post(API_NAME.CART, {
          usersID: data.id,
          totalCount: 0
        })
        .then(respon => {
          const idCart = respon.data.id
            dispatch(fetchOrderofCart(idCart))
            dispatch(fetchProductInCart(idCart))
        })

        dispatch(setToken(data.id))
        sessionStorage.setItem('id', data.id)
        dispatch(setStatusLogin(false))
      }
    })
  }

  const responseFacebook = (response) => {
    const user = {
      email: response.email,
      name: response.name,
      avatar: response.picture.data.url,
      password: 'phonghd123',
      phone: '0337263377',
      role: 0,
      genderID: 1,
      address: 'Cổ Nhuế, Bắc Từ Liêm, Hà Nội',
    }

    customAxiosApi.post(API_NAME.USERS, user).then((resp) => {
      const { data } = resp

      if (typeof data === 'string') {
        setValideEmailGoogle('Email đã tồn tại !')
      } else {
        customAxiosApi.post(API_NAME.CART, {
          usersID: data.id,
          totalCount: 0
        })
        .then(respon => {
          const idCart = respon.data.id
            dispatch(fetchOrderofCart(idCart))
            dispatch(fetchProductInCart(idCart))
        })

        dispatch(setToken(data.id))
        sessionStorage.setItem('id', data.id)
        dispatch(setStatusLogin(false))
      }
    })
  }

  return (
    <div className="box-login">
    {
      valideEmailGoogle && <p className="err-login">{valideEmailGoogle}</p>
    }

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

        <p className="message-err">{dataLogin.error}</p>

        <Form.Item name="remember" valuePropName="checked" className="box-login__box">
          <div>
            <Checkbox>Nhớ mật khẩu.</Checkbox>

            <Link
              to="/quen-mat-khau"
              className="forgot-password"
              onClick={() => dispatch(setStatusLogin(false))}
            >
              Quên mật khẩu?
            </Link>
          </div>
        </Form.Item>

        <Form.Item className="box-login__box">
          <div className="box-login__btn">
            <Button type="primary" htmlType="submit">
              Đăng nhập
            </Button>

            <Button onClick={() => setIslogin(false)}>
              Đăng ký
            </Button>
          </div>
        </Form.Item>

        <p className="text-or">hoặc đăng nhập với:</p>

        <Form.Item>
          <div className="box-login__btn box-login__network ">

          <GoogleLogin
            clientId="921984529119-efq3cgp0kvs5th81q78u3vngpksk8kso.apps.googleusercontent.com"
            buttonText="Google"
            onSuccess={responseGoogle}
            // onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
          />

            <FacebookLogin
              appId="336352381303829"
              autoLoad={false}
              xfbml={true}
              textButton="Facebook"
              fields="name,email,picture"
              cookie={true}
              callback={responseFacebook}
              icon="fa-facebook" />
          </div>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Login
