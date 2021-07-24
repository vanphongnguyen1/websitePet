import React, { useState } from 'react'
import Buttom from '../../reuse/Buttom'
import { useDispatch, useSelector } from 'react-redux'
import { setStatusLogin } from '../../redux/statusLoginSlice'
import { fetchProductInCart } from '../../redux/productInCartSlice'
import { DATAICONTOOLTIP, API_NAME } from '../../dataConst'
import ItemNetwork from '../../footer/ItemNetwork'
import MyModal from '../../Modal/ModalBuyNow'
import { message } from 'antd'
import ListInfoPet from './ListInfoPet'
import CountProduct from './CountProduct'
import { customAxiosApi } from '../../reuse/CustomAxios'

const BoxInfo = ({ description, item }) => {
  const idCart = useSelector((state) => state.cart.list.id)
  const dataProductInCart = useSelector((state) => state.productInCart.list)
  const [isModal, setIsModal] = useState(false)
  const [count, setCount] = useState(1)
  const isDescription = description.length > 1
  const dispatch = useDispatch()
  const { name, price, priceSale } = item

  const addProduct = (item) => {
    const id = sessionStorage.getItem('id')

    if (id) {
      const findData = dataProductInCart.find(
        (ele) => ele.productsID === item.id,
      )
      if (findData) {
        customAxiosApi
          .put(`${API_NAME.PRODUCTINCART}/${findData.id}`, {
            count: findData.count + count,
          })
          .then(() => {
            dispatch(fetchProductInCart(idCart))
            message.success('Đơn hàng đã được thêm vào giỏ.')
          })
      } else {
        customAxiosApi
          .post(`${API_NAME.PRODUCTINCART}`, {
            count,
            price: count * item.priceSale,
            cartID: idCart,
            productsID: item.id,
          })
          .then(() => {
            dispatch(fetchProductInCart(idCart))
            message.success('Đơn hàng đã được thêm vào giỏ.')
          })
      }
    } else {
      dispatch(setStatusLogin(true))
    }
  }

  const handleVisitleModal = () => {
    const id = sessionStorage.getItem('id')
    if (id) {
      setIsModal(true)
    } else {
      dispatch(setStatusLogin(true))
    }
  }

  return (
    <>
      <div className="info-product__box">
        <div className="box-info">
          <h2 className="box-info__name">{name}</h2>

          <p className="box-info__price">
            <span className="box-info__price--sale">
              {priceSale.toLocaleString()} VNĐ
            </span>

            <span className="box-info__price--default">
              {price.toLocaleString()} VNĐ
            </span>
          </p>
          {isDescription && <ListInfoPet description={description} />}

          <CountProduct count={count} setCount={setCount} />

          <div className="box-btn-info">
            <Buttom
              title="Thêm vào giỏ"
              classType="btn--add"
              onClick={() => addProduct(item)}
            />

            <Buttom
              title="Mua ngay"
              classType="btn--buy-now"
              onClick={handleVisitleModal}
            />
          </div>

          <div className="box-info__category">
            <span className="box-info__category--title">category:</span>

            <span className="box-info__category--text">{item.title}</span>

            <div className="social-network">
              <ul>
                {DATAICONTOOLTIP.map((item, index) => {
                  return <ItemNetwork key={index} item={item} />
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {isModal && (
        <MyModal
          item={item}
          count={count}
          isModal={isModal}
          setIsModal={setIsModal}
        />
      )}
    </>
  )
}

export default BoxInfo
