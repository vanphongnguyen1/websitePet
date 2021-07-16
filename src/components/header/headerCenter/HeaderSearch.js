import { useState } from 'react'
import { setKeySearchProduct } from '../../redux/keySearchproductSlice'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { removeAccents } from '../../assets/js/removeAccents'

const HeaderSearch = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [keySearch, setKeySearch] = useState('')

  const handleSearchProduct = e => {
    const { value } = e.target
    setKeySearch(value)
  }

  const clickSearch = () => {
    dispatch(setKeySearchProduct(removeAccents(keySearch)))
    history.push(`/tim-kiem/${removeAccents(keySearch)}`)
    setKeySearch('')
  }

  return (
    <div className="header-center__box">
      <div className="header-center__search">
        <input
          type="text"
          className="header-center__search--input"
          placeholder="Tìm kiếm sản phẩm..."
          onChange={handleSearchProduct}
          value={keySearch}
        />
        <span
          className="header-center__search--icon fal fa-search"
          onClick={clickSearch}
          />
      </div>
    </div>
  )
}

export default HeaderSearch
