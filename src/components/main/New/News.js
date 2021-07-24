import React, { useEffect } from 'react'
import BoxHeading from '../../reuse/BoxHeading'
import ItemNews from './ItemNews'
import { NEW, COLOR, DATANEWS } from '../../dataConst'
import './style.scss'

const News = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const newLarge = DATANEWS.find((item) => item.large)
  const newSmall = DATANEWS.filter((item) => !item.large)

  return (
    <>
      <div className="news">
        <div className="container">
          <BoxHeading title={NEW} color={COLOR} />
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
              <ItemNews item={newLarge} />
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
              {newSmall.map((item) => {
                return (
                  <div className="news__box-small" key={item.id}>
                    <ItemNews item={item} />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default News
