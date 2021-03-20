import React from 'react'
import './boxHeading.scss'

const BoxHeading = props => {
  const { title , color, setIsParentSort, url } = props

  const handleSort = e => {
    const { value } = e.target
    console.log(value)
    setIsParentSort(value)
  }

  return (
    <div className="box-heading">
      <h2 className="box-heading__title">{title}</h2>
      <div className="fill" style={{backgroundColor: color}}/>

      <div className="sort">
        {
          !url && (
            <select name="sort" className="sort__select" onChange={handleSort}>
              <option value="all">Tất cả</option>
              <option value="hot">Phổ biến</option>
              <option value="expensive">Giá: Thấp - Cao</option>
              <option value="cheap">Giá: Cao - Thấp</option>
            </select>
          )
        }

      </div>
    </div>
  )
}

export default BoxHeading
