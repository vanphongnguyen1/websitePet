import React, { useEffect, useState } from 'react'
import { Form, Input, Button } from 'antd'
import ItemProduct from './itemProduct'
import { useSelector, useDispatch } from 'react-redux'
import { customAxiosApi } from '../../../reuse/CustomAxios'
import { API_NAME } from '../../../dataConst'
import { fetchOrderofCart } from '../../../redux/ordersSlice'
import { fetchProductDetailOrderAll } from '../../../redux/productDetailOrder'
import './style.scss'

const FormOrder = ({ products, setIsPopupPayOrder, handleRemoveAll }) => {
  const dispatch = useDispatch()
  const dataCart = useSelector((state) => state.cart.list)
  const dataUsers = dataCart.users
  const [totalPrice, setTotalPrice] = useState(0)
  const [totalCount, setTotalCount] = useState(0)

  useEffect(() => {
    let price = 0
    let count = 0

    products.forEach((item) => {
      count += item.count
      price += item.subtotal
    })

    setTotalCount(count)
    setTotalPrice(price)
  }, [products])

  const onFinish = (valuse) => {
    const dataDetailOrder = {
      count: totalCount,
      price: totalPrice,
    }

    customAxiosApi
      .post(`${API_NAME.DETAILORDER}`, dataDetailOrder)
      .then((res) => {
        const { data } = res.data

        products.forEach((item) => {
          customAxiosApi.post(`${API_NAME.PRODUCTDETAILORDER}`, {
            detailOrderID: data.id,
            productsID: item.productsID,
            count: item.count,
            price: item.subtotal,
          })
        })

        const dataOrders = {
          intoMeny: totalPrice,
          note: valuse.note,
          trasportID: 1,
          peymentID: 1,
          statusID: 1,
          detailOrderID: data.id,
          cartID: dataCart.id,
        }

        customAxiosApi.post(`${API_NAME.ORDERS}`, dataOrders).then(() => {
          handleRemoveAll()
          dispatch(fetchOrderofCart(dataCart.id))
          dispatch(fetchProductDetailOrderAll())
          setIsPopupPayOrder(false)
          window.scrollTo(0, 0)
        })
      })
  }

  const handleRemoveOrder = () => {
    setIsPopupPayOrder(false)
    window.scrollTo(0, 0)
  }

  return (
    <>
      <div className="form-order">
        <h1 className="form-order__title">Th??ng tin ????n h??ng</h1>
        {dataUsers.name && (
          <Form name="nest-messages" onFinish={onFinish}>
            <div className="row">
              <div className="col-xl-7">
                <div className="form-order__box">
                  <h2>Th??ng tin kh??ch h??ng:</h2>
                  <Form.Item
                    name="name"
                    initialValue={dataUsers.name}
                    rules={[
                      {
                        required: true,
                        message: 'Vui l??ng nh???p tr?????ng n??y',
                      },
                    ]}
                  >
                    <Input placeholder="H??? v?? T??n(*)" />
                  </Form.Item>

                  <Form.Item
                    name="phone"
                    initialValue={dataUsers.phone}
                    rules={[
                      {
                        required: true,
                        message: 'Vui l??ng nh???p tr?????ng n??y',
                      },
                      {
                        message: 'B???n ???? nh???p sai s??? ??i???n tho???i.',
                        pattern: /(09|03|08|05|07)+([0-9]{8})\b/,
                      },
                    ]}
                  >
                    <Input placeholder="S??? ??T(*)" maxLength={10} />
                  </Form.Item>

                  <Form.Item
                    name="email"
                    initialValue={dataUsers.email}
                    rules={[
                      {
                        required: true,
                        message: 'Vui l??ng nh???p tr?????ng n??y',
                      },
                      {
                        message: 'B???n ???? nh???p sai Email.',
                        pattern: /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/,
                      },
                    ]}
                  >
                    <Input placeholder="Email(*)" />
                  </Form.Item>

                  <Form.Item name="address" initialValue={dataUsers.address}>
                    <Input.TextArea placeholder="?????a ch???" />
                  </Form.Item>

                  <Form.Item name="note">
                    <Input.TextArea placeholder="Ch?? th??ch" />
                  </Form.Item>

                  <div>
                    <h2>S???n ph???m:</h2>

                    <div className="table">
                      <div className="table__item">
                        <div className="table__tr">
                          <p className="table__th--name">Name</p>
                          <p className="table__th--price">Price</p>
                          <p className="table__th--count">Count</p>
                          <p className="table__th--totalPrice">TotalPrice</p>
                        </div>

                        {products.map((product, index) => {
                          return <ItemProduct key={index} product={product} />
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-5">
                <div className="form-order__box">
                  {/* <SubHeading title="Totals" /> */}
                  <h2>Th??ng tin:</h2>

                  <div className="totals">
                    <div className="table">
                      <div className="table__tr">
                        <p className="table__td--name">T???ng ti???n:</p>
                        <p className="table__td--price">
                          {totalPrice.toLocaleString()} ??
                        </p>
                      </div>

                      <div className="table__tr">
                        <p className="table__td--name">S??? l?????ng:</p>
                        <p className="table__td--price">{totalCount}</p>
                      </div>

                      <div className="table__tr">
                        <p className="table__td--name">
                          Ph????ng th???c thanh to??n:
                        </p>
                        <p className="table__td--price">Nh???n h??ng thanh to??n</p>
                      </div>

                      <div className="table__tr">
                        <p className="table__td--name">Th??nh ti???n:</p>
                        <p className="table__td--price">
                          {totalPrice.toLocaleString()} ??
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="box-submit">
                    <Button type="primary" danger onClick={handleRemoveOrder}>
                      H???y b???
                    </Button>

                    <Button type="primary" htmlType="submit">
                      ?????t h??ng
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Form>
        )}
      </div>
    </>
  )
}

export default FormOrder
