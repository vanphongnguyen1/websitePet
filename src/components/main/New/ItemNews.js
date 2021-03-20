import React from 'react'

const ItemNews = props => {
  const { src, title, text, day, month } = props.item

  return (
    <div className="news__box">
      <div className="news__link">
        <div className="news__box-img">
          <img src={src} alt="aa" className="news__box-img--img"/>
        </div>
        <div className="news__box-text">
          <h5 className="news__box-text--title">{title}</h5>
          <p className="news__box-text--text">{text}</p>
        </div>
        <span className="news__date">
          <span className="news__date--day">{day}</span>
          <span className="news__date--month">{month}</span>
        </span>
      </div>
    </div>
  )
}

export default ItemNews
