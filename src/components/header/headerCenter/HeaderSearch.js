import React from 'react'

const HeaderSearch = () => {
  return (
    <div className="header-center__box">
      <div className="header-center__search">
        <input type="text" className="header-center__search--input" placeholder="Tìm kiếm..."/>
        <span className="header-center__search--icon fal fa-search" />
      </div>
    </div>
  )
}

export default HeaderSearch
