import React from 'react'
import { v4 as uuid } from 'uuid'
import { Form, Input, Button, message } from 'antd'
import { useDispatch } from 'react-redux'
import { addOrder as addOrderAction } from '../../redux/actions/addOrder'

const FormInfo = props => {
  const { item, setIsModal, count } = props
  const dispatch = useDispatch()

  const orderDetails = [
    {
      subTotal: item.price * count,
      orders: [{
        ...item,
        count,
      }]
    }
  ]

  const onFinish = values => {
    const data = {
      ...values,
      id: uuid(),
      orderDetails,
    }
    dispatch(addOrderAction(data))

    message.success('Đặt hàng thành công.')
    setIsModal(false)
  };

  return (
    <div className="my-modal__box">
      <h2 className="my-modal__box--infomation">
        Nhập thông tin
      </h2>

      <Form name="nest-messages" onFinish={onFinish}>
        <Form.Item
          name='name'
          rules={[
            {
              required: true,
              message: 'Vui lòng nhập trường này'
            }
          ]}
        >
          <Input placeholder="Họ và Tên(*)"/>
        </Form.Item>

        <Form.Item
          name='phone'
          rules={[
            {
              required: true,
              message: 'Vui lòng nhập trường này'
            },
            {
              message:'Bạn đã nhập sai số điện thoại.',
              pattern: /(09|03|08|05|07)+([0-9]{8})\b/
            },
          ]}
        >
          <Input placeholder="Số ĐT(*)" maxLength={10}/>
        </Form.Item>

        <Form.Item
          name='email'
          rules={[
            {
              required: true,
              message: 'Vui lòng nhập trường này'
            },
            {
              message:'Bạn đã nhập sai Email.',
              pattern: /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/
            },
          ]}
        >
          <Input placeholder="Email(*)"/>
        </Form.Item>

        <Form.Item name='address'>
          <Input.TextArea placeholder="Địa chỉ"/>
        </Form.Item>

        <Form.Item name='note'>
          <Input.TextArea placeholder="Chú thích"/>
        </Form.Item>

        <Form.Item>
          <Button htmlType="submit">
            Đặt hàng
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default FormInfo
