import { useState, useEffect } from 'react'
import { Pagination } from 'antd'
import { removeAccents } from '../../../assets/js/removeAccents'
import { useHistory } from 'react-router-dom'
import { setDataPost } from '../../../redux/newAction'
import { useDispatch } from 'react-redux'

const PageNews = ({ data, title }) => {
  const history = useHistory()
  const dispatch = useDispatch()
  const [pageDefault, setPageDefault] = useState(1)
  const [pageSizeDefault, setPageSizeDefault] = useState(10)
  const [dataPagination, setDataPagination] = useState([])

  useEffect(() => {
    const defaule = pageDefault * pageSizeDefault
    const newData = data.slice(defaule - pageSizeDefault, defaule)

    setDataPagination(newData)
  }, [pageSizeDefault, pageDefault, data])

  const onShowSizeChange = (current, pageSize ) => {
    setPageDefault(current)
    setPageSizeDefault(pageSize)
    window.scrollTo(0, 0)
  }

  const clickPost = post => {
    history.push(`/tin-tuc/${removeAccents(post.title)}`)
    dispatch(setDataPost(post))
  }

  const handleSearch = e => {
    const { value } = e.target

    const removeValue = removeAccents(value)
    const newData = []
    data.forEach(item => {
      if (removeAccents(item.title).indexOf(removeValue) !== -1) {
        newData.push(item)
      }
    })

    if (newData.length) {
      setDataPagination(newData)
    }

    if (!value || !newData.length) {
      const defaule = pageDefault * pageSizeDefault
      const dataPagi = data.slice(defaule - pageSizeDefault, defaule)
      setDataPagination(dataPagi)
    }
  }
  return (
    <>

      <header className="page-news-header container">
        <h1 className="page-news-header__title">{ title || 'Tin Tức'}</h1>
        <p className="page-news-header__text">
          Dogily Pets PageNews là chuyên mục tin tức chó mèo, vật nuôi và các loại thú cưng. Nhằm đem đến cho bạn đọc và khách hàng những câu chuyện, những thông tin mới nhất bổ ích và vui vẻ.
        </p>
        <p className="page-news-header__text">
          Mọi người hãy cùng đón đọc những tin tức mới nhất được chúng tôi xuất bản hàng ngày nhé.
        </p>
        <p className="page-news-header__text">
          Cảm ơn bạn đã theo dõi và chúc bạn luôn hạnh phúc với thú cưng của mình.
        </p>
      </header>

      <main className="page-news-main container">
        <div className="row">
          <div className="col-xl-8">
            {
              dataPagination.map((item, index) => (
                <div className="page-news-main__box" key={index} onClick={() => clickPost(item)}>
                  <div className="box-img">
                    <img src={item.img} className="page-news-main__box--img" alt=""/>
                  </div>
                  <div className="box-content">
                    <h1 className="box-content__title">{ item.title }</h1>
                    <p className="box-content__title-sub">{ item.sub }</p>
                    <p className="box-content__title-comment">1 comment</p>
                  </div>
                </div>
              ))
            }

            {
              data.length > 10 && (
                <div className="page-news-main__pagination">
                  <Pagination
                    onChange={onShowSizeChange}
                    current={pageDefault}
                    total={data.length}
                    pageSize={pageSizeDefault}
                  />
                </div>
              )
            }

          </div>

          <div className="col-xl-4">
            <div className="page-news-main__box-address">
              <div className="box-search">
                <input
                  type="text"
                  className="box-search__input"
                  placeholder="Tìm kiếm..."
                  onChange={handleSearch}
                />
                <span className="box-search__icon fas fa-search" />
              </div>

              <div className="box-address">
                <h6 className="box-address__title">Địa chỉ</h6>
                <p className="page-news-header__text">
                  Địa chỉ: 81-95 Nghi Tàm, phường Yên Phụ, quận Tây Hồ, Tp Hà Nội.
                  <a
                    className="box-address__link"
                    href="https://g.page/DogilyPetShopTayHo?share"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Chỉ đường
                  </a>
                </p>
                <p className="page-news-header__text">
                  Địa chỉ: 606/121 đường Ba Tháng Hai, phường 14, quận 10, thành phố Hồ Chí Minh.
                  <a
                    className="box-address__link"
                    href="https://g.page/dogily?share"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Chỉ đường
                  </a>
                </p>

                <p className="page-news-header__text">
                  Địa chỉ: 171 Quang Trung, phường 10, quận Gò Vấp, thành phố Hồ Chí Minh.
                  <a
                    className="box-address__link"
                    href="https://g.page/dogily-petshop---quang-trung?share"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Chỉ đường
                  </a>
                </p>
                <p className="page-news-header__text">
                  Địa chỉ: 391 Đường Cộng Hoà, phường 13, quận Tân Bình, thành phố Hồ Chí Minh.
                  <a
                    className="box-address__link"
                    href="https://g.page/dogilypetshopconghoa?share"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Chỉ đường
                  </a>
                </p>
                <p className="page-news-header__text">
                  Địa chỉ: Trang trại & cửa hàng Dogily Petshop 108 Lý Nam Đế, phường 8, thành phố Đà Lạt, tỉnh Lâm Đồng.
                  <a
                    className="box-address__link"
                    href="https://goo.gl/maps/L3turHbC7G2cFaSg8"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Chỉ đường
                  </a>
                </p>

                <p className="page-news-header__text">
                  Email:
                  <a
                    className="box-address__link"
                    href="mailto:dogily.vn@gmail.com"
                  >
                    dogily.vn@gmail.com
                  </a>
                </p>
                <p className="page-news-header__text">
                  Hotline:
                  <a
                    className="box-address__link"
                    href="tel:0337263377"
                  >
                    0337263377
                  </a>
                </p>
                <p className="page-news-header__text">
                  Website:
                  <a
                    className="box-address__link"
                    href="https://dogily.vn/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://dogily.vn/
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default PageNews
