import React, { useEffect, useState } from 'react'
import { Form, Input, Button, message } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser } from '../../redux/loginSlice'
import { fetchOrderofCart } from '../../redux/ordersSlice'
import { fetchProductDetailOrderAll } from '../../redux/productDetailOrder'
import { customAxiosApi } from '../../reuse/CustomAxios'
import { API_NAME } from '../../dataConst'

const FormInfo = (props) => {
  const { item, setIsModal, count } = props
  const dispatch = useDispatch()
  const [infoUser, setInfoUser] = useState({})
  const dataCart = useSelector((state) => state.cart.list)

  useEffect(() => {
    const id = sessionStorage.getItem('id')
    dispatch(fetchUser(id)).then((res) => {
      setInfoUser(res.payload)
    })
  }, [dispatch])

  const onFinish = (values) => {
    const dataDetailOrder = {
      count: count,
      price: item.priceSale * count,
    }

    customAxiosApi
      .post(`${API_NAME.DETAILORDER}`, dataDetailOrder)
      .then((res) => {
        const { data } = res.data

        customAxiosApi.post(`${API_NAME.PRODUCTDETAILORDER}`, {
          detailOrderID: data.id,
          productsID: item.id,
          count,
          price: item.priceSale * count,
        })

        const dataOrders = {
          intoMeny: item.priceSale * count,
          note: values.note,
          trasportID: 1,
          peymentID: 1,
          statusID: 1,
          detailOrderID: data.id,
          cartID: dataCart.id,
        }

        customAxiosApi.post(`${API_NAME.ORDERS}`, dataOrders).then(() => {
          dispatch(fetchOrderofCart(dataCart.id))
          dispatch(fetchProductDetailOrderAll())
          message.success('Đặt hàng thành công.')
          setIsModal(false)
        })
      })
  }

  return (
    <div className="my-modal__box">
      <h2 className="my-modal__box--infomation">Nhập thông tin</h2>

      {infoUser.name && (
        <Form name="nest-messages" onFinish={onFinish}>
          <Form.Item
            name="name"
            initialValue={infoUser.name}
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập trường này',
              },
            ]}
          >
            <Input placeholder="Họ và Tên(*)" />
          </Form.Item>

          <Form.Item
            name="phone"
            initialValue={infoUser.phone}
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập trường này',
              },
              {
                message: 'Bạn đã nhập sai số điện thoại.',
                pattern: /(09|03|08|05|07)+([0-9]{8})\b/,
              },
            ]}
          >
            <Input placeholder="Số ĐT(*)" maxLength={10} />
          </Form.Item>

          <Form.Item
            name="email"
            initialValue={infoUser.email}
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập trường này',
              },
              {
                message: 'Bạn đã nhập sai Email.',
                pattern: /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/,
              },
            ]}
          >
            <Input placeholder="Email(*)" />
          </Form.Item>

          <Form.Item name="address" initialValue={infoUser.address}>
            <Input.TextArea placeholder="Địa chỉ" />
          </Form.Item>

          <Form.Item name="note">
            <Input.TextArea placeholder="Chú thích" />
          </Form.Item>

          <Form.Item>
            <Button htmlType="submit">Đặt hàng</Button>
          </Form.Item>
        </Form>
      )}
    </div>
  )
}

export default FormInfo
