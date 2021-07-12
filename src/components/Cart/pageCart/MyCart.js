import React, { useState, useEffect } from 'react'
import { Table, Space, Button, Popconfirm } from 'antd';
import CartNull from './CartNull';
import { difference } from 'lodash/array'
import { useSelector, useDispatch } from 'react-redux'
// import { updataCart } from '../../redux/actions/addProduct'
import { addOrder } from '../../redux/actions/addOrder'
import { MobileSmallHiden, MobileSmall } from '../../responsive'
import { customAxiosApi } from '../../reuse/CustomAxios'
import { API_NAME } from '../../dataConst'

const MyCart = () => {
  const dataImages = useSelector(store => store.images.list)
  const order = useSelector(store => store.addOrder)
  const dataProduct = useSelector(store => store.productInCart.list)
  const dispatch = useDispatch()

  const [data, setData] = useState([])
  const [selectedRowKeys, setSelectedRowKeys] = useState([])
  const [doneOrder, setDoneOrder] = useState({})
  console.log('-----------------đơn hàng đã đặt', order)

  useEffect(() => {
    setDoneOrder({
      total: subTotals(selectedRowKeys),
      order: selectedRowKeys
    })
  }, [selectedRowKeys])

  useEffect(() => {
    const newData = []
    dataProduct.forEach(item => {
      const { id, count, price, productsID, products } = item
      const images = dataImages.find(img => img.id === products.imagesID)
      const newImage = images.url.split('|')[0]

      newData.push({
        id,
        count,
        name: products.name,
        price: products.price,
        subtotal: price,
        productsID,
        img: newImage
      })

      setData(newData)
    })
  }, [dataProduct, dataImages]);

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
      dataIndex: 'img',
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
          <p
            className="my-cart--name"
            title={text}
          >
            {text}
          </p>
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
      responsive: ['md'],
      width: '20%'
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
    const [...newData] = data
    const index = newData.findIndex(item => item.id === id)
    let newCount = newData[index].count
    let newSubtotal = newData[index].subtotal

    if ((number > 0 && newData[index].count < 10) || (number < 0 && 1 < newData[index].count)) {
      newCount = newData[index].count + number
      newSubtotal = newData[index].price * (newData[index].count + number)
    }

    const product = {
      ...newData[index],
      count: newCount,
      subtotal: newSubtotal
    }

    newData.splice(index, 1, product)
    setData(newData)

    const dataFormat = new FormData()
    dataFormat.append('count', newCount)
    dataFormat.append('subtotal', newSubtotal)
    customAxiosApi.put(`${API_NAME.PRODUCTINCART}/${id}`, {
      count: newCount,
      price: newSubtotal
    })
  }

  const handlePayOrder = () => {
    dispatch(addOrder(doneOrder))
    const newData = difference(data, selectedRowKeys)

    setSelectedRowKeys.forEach(item => {
      customAxiosApi.delete(`${API_NAME.PRODUCTINCART}/${item.id}`)
    })

    setData(newData)
    // dispatch(updataCart(newData))
    setSelectedRowKeys([])
    window.scrollTo(0, 0)
  }

  const handleRemoveProduct = id => {
    const newData = data.filter(item => item.id !== id)
    setData(newData)
    customAxiosApi.delete(`${API_NAME.PRODUCTINCART}/${id}`)
  }

  const handleInputCount = (e, id) => {
    let value = Number(e.target.value)

    if (value > 10) {
      value = 10
    }
    if (value < 1) {
      value = 1
    }

    const [...newData] = data
    const index = newData.findIndex(item => item.id === id)
    let newCount = value
    let newSubtotal = newData[index].price * value

    const product = {
      ...newData[index],
      count: newCount,
      subtotal: newSubtotal
    }

    newData.splice(index, 1, product)
    setData(newData)

    const dataFormat = new FormData()
    dataFormat.append('count', newCount)
    dataFormat.append('subtotal', newSubtotal)
    customAxiosApi.put(`${API_NAME.PRODUCTINCART}/${id}`, {
      count: newCount,
      price: newSubtotal
    })
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

    setSelectedRowKeys.forEach(item => {
      customAxiosApi.delete(`${API_NAME.PRODUCTINCART}/${item.id}`)
    })
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
