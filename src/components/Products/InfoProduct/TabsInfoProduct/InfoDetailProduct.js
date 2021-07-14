import { useState } from 'react'
import { DATAVIDEO } from '../../../dataConst'
import './infoDetailProduct.scss'

const InfoDetailProduct = () => {
  const [isStatus, setIsStatus] = useState(null)

  return (
    <div className="info-detail">
      {
        DATAVIDEO.map((item, index) => (
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
