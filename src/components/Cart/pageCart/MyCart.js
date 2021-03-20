import React, { useState, useEffect } from 'react'
import { Table, Space, Button, Popconfirm } from 'antd';
import CartNull from './CartNull';
import { difference } from 'lodash/array'
import { useSelector, useDispatch } from 'react-redux'
import { updataCart } from '../../redux/actions/addProduct'
import { addOrder } from '../../redux/actions/addOrder'
import { MobileSmallHiden, MobileSmall } from '../../responsive'


const MyCart = () => {
  const inti = useSelector(store => store.addProductCart)
  const order = useSelector(store => store.addOrder)
  const dispatch = useDispatch()

  const [data, setData] = useState(inti)
  const [selectedRowKeys, setSelectedRowKeys] = useState([])
  const [doneOrder, setDoneOrder] = useState({})
  console.log('-----------------đơn hàng đã đặt', order)

  useEffect(() => {
    setDoneOrder({
      total: subTotals(selectedRowKeys),
      order: selectedRowKeys
    })
  }, [selectedRowKeys])

  const selectorDisable = id => {
    return selectedRowKeys.find(item => item.id === id )
  }

  const subTotals = arr => {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i].subtotal
    }
    return sum
  }

  const columns = [
    {
      title: 'Hình Ảnh',
      dataIndex: 'src',
      render: text => {
        return (
          <div className="my-cart__box-img">
            <img src={text} alt="" className="my-cart__box-img--img"/>
          </div>
        )
      }
    },

    {
      title: 'Sản Phẩm',
      dataIndex: 'name',
      render: text => {
        return (
          <p className="my-cart--name">{text}</p>
        )
      }
    },

    {
      title: 'Đơn Giá',
      dataIndex: 'price',
      render: text => {
        return (
          <p className="my-cart--text">
            {text.toLocaleString()} VNĐ
          </p>
        )
      }
    },

    {
      title: 'Số Lượng',
      dataIndex: 'count',
      render: (text, record) => {
        return (
          <div className="box-count">
            <Button
              className="box-count--icon-minus"
              onClick={() => handleOnChangeCount(record.id, -1)}
              disabled={selectorDisable(record.id)}
            >
              <span className="far fa-minus"/>
            </Button>

            <MobileSmallHiden>
              <input
                type="number"
                name="count"
                className="my-cart--text box-count--input"
                onChange={(e) => handleInputCount(e, record.id)}
                value={text}
                disabled={selectorDisable(record.id)}
              />
            </MobileSmallHiden>

            <MobileSmall>
              <span>{text}</span>
            </MobileSmall>

            <Button
              className="box-count--icon-plus"
              onClick={() => handleOnChangeCount(record.id, 1)}
              disabled={selectorDisable(record.id)}
            >
              <span className="far fa-plus"/>
            </Button>
          </div>
        )
      },
      width: '15%'
    },

    {
      title: 'Thành Tiền',
      dataIndex: 'subtotal',
      render: (text, record) => {
        return (
          <p className="my-cart--text">
            {record.subtotal.toLocaleString()} VNĐ
          </p>
        )
      },
      responsive: ['md']
    },

    {
      title: 'Xóa',
      dataIndex: 'action',
      render: (text, record) => (
        <Popconfirm
          placement="top"
          title="Bạn có muốn xóa sản phẩm"
          onConfirm={() => handleRemoveProduct(record.id)}
          okText="Yes"
          cancelText="No"
        >
          <Space size="middle">
            <Button danger>Xóa</Button>
          </Space>
        </Popconfirm>
      ),
    },
  ]

  const handleOnChangeCount = (id, number) => {
    const newData = data.map(item => {
        if (item.id === id && number > 0 && item.count < 10 ) {
          return {
            ...item,
            count: item.count + number,
            subtotal: item.price * (item.count + number)
          }
        }

        if (item.id === id && number < 0 && 1 < item.count ) {
          return {
            ...item,
            count: item.count + number,
            subtotal: item.price * (item.count + number)
          }
        }
      return item
    })
    setData(newData)
    dispatch(updataCart(newData))
  }

  const handlePayOrder = () => {
    dispatch(addOrder(doneOrder))
    const newData = difference(data, selectedRowKeys)

    setData(newData)
    dispatch(updataCart(newData))
    setSelectedRowKeys([])

    window.scrollTo(0, 0)
  }

  const handleRemoveProduct = id => {
    const newData = data.filter(item => item.id !== id)

    setData(newData)
    dispatch(updataCart(newData))
  }

  const handleInputCount = (e, id) => {
    let value = Number(e.target.value)

    if (value > 10) {
      value = 10
    }
    if (value < 1 ) {
      value = 1
    }

    const newData = data.map(item => {
      if (item.id === id ) {
        return {
          ...item,
          count: value,
          subtotal: item.price * Number(value)
        }
      }
      return item
    })
    setData(newData)
    dispatch(updataCart(newData))
  }

  const onSelectChange = (index, item) => {
    setSelectedRowKeys(item)
  }

  const rowSelection = {
    onChange: onSelectChange
  };

  const handleRemoveAll = () => {
    const newData = difference(data, selectedRowKeys)
    setData(newData)
    dispatch(updataCart(newData))
    setSelectedRowKeys([])
  }

  const isDisabel = selectedRowKeys.length > 0
  const isCartNull = data.length > 0

  return (
    <>
      <div className="my-cart">
        <Table
          rowKey="id"
          rowSelection={{...rowSelection}}
          columns={columns}
          dataSource={data}
          pagination={false}
        />

        {
          isCartNull && (
            <div className="box-subtotal">
              <h3 className="box-subtotal--text">
                Tổng cộng: { subTotals(selectedRowKeys).toLocaleString() || 0 } VNĐ
              </h3>
            </div>
          )
        }

        <div className="my-cart__box-btn">
          <Popconfirm
            placement="top"
            title="Bạn có muốn xóa sản phẩm"
            onConfirm={handleRemoveAll}
            okText="Yes"
            cancelText="No"
          >
            <Button danger disabled={!isDisabel}>Xóa tất cả</Button>
          </Popconfirm>

          <Button
            type="primary"
            disabled={!isDisabel}
            onClick={handlePayOrder}
          >
            Đặt hàng
          </Button>
        </div>

        {
          !isCartNull && <CartNull />
        }
      </div>
    </>
  )
}

export default MyCart
