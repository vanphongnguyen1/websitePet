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
                <img
                  src={item.img}
                  alt="item.video"
                  className="info-detail__group--video"
                  onClick={() => setIsStatus(index)}
                />
              )
            }
          </div>
        ))
      }
    </div>
  )
}

export default InfoDetailProduct
