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

  const validatorEmail = () => {
    dispatch(setError(''))
    return Promise.resolve()
  }

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
    dispatch(setError(''))
    const { profileObj } = response

    const user = {
      email: profileObj.email,
      name: profileObj.name,
      avarta: profileObj.imageUrl,
      password: 'phonghd123',
      phone: '0337263377',
      role: 0,
      genderID: 1,
      address: 'Ph?? Th??? - Kinh M??n - H???i D????ng',
    }

    customAxiosApi.post(API_NAME.USERS, user).then((resp) => {
      const { data } = resp
      console.log(resp);

      if (typeof data === 'string') {
        dispatch(setError('Email ???? t???n t???i !'))
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
    dispatch(setError(''))
    const user = {
      email: response.email,
      name: response.name,
      avarta: response.picture.data.url,
      password: 'phonghd123',
      phone: '0337263377',
      role: 0,
      genderID: 1,
      address: 'C??? Nhu???, B???c T??? Li??m, H?? N???i',
    }

    customAxiosApi.post(API_NAME.USERS, user).then((resp) => {
      const { data } = resp

      if (typeof data === 'string') {
        dispatch(setError('Email ???? t???n t???i !'))
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
              validator: validatorEmail
            },
            {
              required: true,
              message: 'Vui l??ng nh???p t??n ????ng nh???p',
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
              validator: validatorEmail
            },
            {
              required: true,
              message: 'Vui l??ng nh???p m???t kh???u',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <p className="message-err">{dataLogin.error}</p>

        <Form.Item name="remember" valuePropName="checked" className="box-login__box">
          <div>
            <Checkbox>Nh??? m???t kh???u.</Checkbox>

            <Link
              to="/quen-mat-khau"
              className="forgot-password"
              onClick={() => dispatch(setStatusLogin(false))}
            >
              Qu??n m???t kh???u?
            </Link>
          </div>
        </Form.Item>

        <Form.Item className="box-login__box">
          <div className="box-login__btn">
            <Button type="primary" htmlType="submit">
              ????ng nh???p
            </Button>

            <Button onClick={() => setIslogin(false)}>
              ????ng k??
            </Button>
          </div>
        </Form.Item>

        <p className="text-or">ho???c ????ng nh???p v???i:</p>

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
              autoLoad={true}
              status={true}
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
