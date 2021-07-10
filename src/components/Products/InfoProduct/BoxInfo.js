import React, { useState } from 'react'
import Buttom from '../../reuse/Buttom'
import { useDispatch } from 'react-redux'
import { addProduct as addProductAction } from '../../redux/actions/addProduct'
import { setStatusLogin } from '../../redux/statusLoginSlice'
import { DATAICONTOOLTIP } from '../../dataConst'
import ItemNetwork from '../../footer/ItemNetwork'
import MyModal from '../../Modal/ModalBuyNow'
import { message } from 'antd'
import ListInfoPet from './ListInfoPet'
import ListInfoAccessories from './ListInfoAccessories'
import CountProduct from './CountProduct'

const BoxInfo = props => {
  const [isModal, setIsModal] = useState(false)
  const [count, setCount] = useState(1)
  const { description, item } = props
  const isDescription = description.length > 1

  const dispatch = useDispatch()

  const addProduct = item => {
    const id = sessionStorage.getItem('id')
    if (id) {
      dispatch(
        addProductAction({
          ...item,
          subtotal: item.price * count,
          count,
        })
      )

      message.success('Đơn hàng đã được thêm vào giỏ.')
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
          <h2 className="box-info__name">{item.name}</h2>

          <p className="box-info__price">{item.price.toLocaleString()} VNĐ</p>
          {
            isDescription
              ? <ListInfoPet description={description}/>
              : <ListInfoAccessories description={description}/>
          }

          <CountProduct count={count} setCount={setCount}/>

          <div className="box-btn-info">
            <Buttom
              title='Thêm vào giỏ'
              classType="btn--add"
              onClick={() => addProduct(item)}
            />

            <Buttom
              title='Mua ngay'
              classType="btn--buy-now"
              onClick={handleVisitleModal}
            />
          </div>

          <div className="box-info__category">
            <span className="box-info__category--title">
              category:
            </span>

            <span className="box-info__category--text">
              { item.title }
            </span>

            <div className="social-network">
              <ul>
                {
                  DATAICONTOOLTIP.map((item, index) => {
                    return <ItemNetwork key={index} item={item}/>
                  })
                }
              </ul>
            </div>
          </div>
        </div>
      </div>

      {
        isModal && (
          <MyModal
            item={item}
            count={count}
            isModal={isModal}
            setIsModal={setIsModal}
          />
        )
      }

    </>
  )
}

export default BoxInfo
