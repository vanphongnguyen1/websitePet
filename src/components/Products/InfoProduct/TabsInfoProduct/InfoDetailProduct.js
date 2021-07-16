import { useState, useEffect } from 'react'
import { dataDetailDog, dataDetailCart } from '../../../dataConst'
import './infoDetailProduct.scss'

const InfoDetailProduct = ({ idGroup }) => {
  const [isStatus, setIsStatus] = useState(null)
  const [dataShow, setDataShow] = useState([])

  useEffect(() => {
    if (idGroup === 1) {
      setDataShow(dataDetailDog)
    } else if (idGroup === 2) {
      setDataShow(dataDetailCart)
    }
  }, [idGroup])

  return (
    <div className="info-detail">
      {
        dataShow.map((item, index) => (
          <div className="info-detail__group" key={index}>
            {
              isStatus === index ? (
                <iframe
                  className="info-detail__group--video"
                  src={item.video}
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Embedded youtube"
                />
              ) : (
                <div className="info-detail__box" onClick={() => setIsStatus(index)}>
                  <img
                    src={item.img}
                    alt={item.video}
                    className="info-detail__group--video"
                  />
                </div>
              )
            }
          </div>
        ))
      }
    </div>
  )
}

export default InfoDetailProduct
