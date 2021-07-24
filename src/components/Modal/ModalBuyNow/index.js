import React from 'react'
import ModalInfoProduct from './ModalInfoProduct'
import FormInfo from './FormInfo'
import './modal.scss'

const MyModal = (props) => {
  const { item, isModal, setIsModal, count } = props

  const handleCloseModal = () => {
    setIsModal(false)
  }

  return (
    <>
      <div className={`my-modal ${isModal ? 'visiteModal' : ''}`}>
        <h2 className="my-modal__name">
          {item.name}
          <span
            className="my-modal__close far fa-times-circle"
            onClick={handleCloseModal}
          />
        </h2>

        <div className="my-modal__info-product">
          <div className="row">
            <div className="col-xl-6 col-lg-6">
              <ModalInfoProduct item={item} count={count} />
            </div>
            <div className="col-xl-6 col-lg-6">
              <FormInfo item={item} setIsModal={setIsModal} count={count} />
            </div>
          </div>
        </div>
      </div>
      <div
        className={isModal ? 'overllow visiteOverll' : 'overllow'}
        onClick={handleCloseModal}
      />
    </>
  )
}

export default MyModal
