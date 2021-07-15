import React from 'react'
import PageTitle from '../../../reuse/PageTitle'
import { useSelector } from 'react-redux'
import { contentPost, DATAICONTOOLTIP } from '../../../dataConst'
import MyBackTop from '../../../reuse/MyBackTop'
import ItemNetwork from '../../../footer/ItemNetwork'
import './postNew.scss'

const PostNew = ({ match }) => {
  const dataPost = useSelector(state => state.newAction.dataPost)
  // console.log(dataPost);
  return (
    <>
      <PageTitle params={{group: 'tin-tuc', url: match.params.url}}/>
      <div className="container post-new">
        <header className="entry-header">
          <h6 className="entry-category">
            <a href="http://localhost:3000/dogs">chó cảnh</a>,
            <a href="http://localhost:3000/news">thông tin chó mèo</a>,
            <a href="http://localhost:3000/news">tin tức</a>
          </h6>
          <h1 className="entry-header__title">{dataPost.title}</h1>
          <p className="entry-meta">
            Ngày đăng: <span>15/07/2021</span>
          </p>
        </header>

        <div className="entry-content">
          <p className="entry-content__text">{dataPost.sub}</p>
          {
            contentPost.map(item => (
              <>
                <h2 className="entry-content__title">{item.title}</h2>
                <p className="entry-content__text">{item.text1}</p>

                <div className="entry-content__box-image">
                  <img src={item.img} alt="" className="entry-content__box-image--img"/>
                  <p className="entry-content__box-image--text-sub">{item.title}</p>
                </div>

                {
                  item.text2 && <p className="entry-content__text">{item.text2}</p>
                }

                {
                  item.text3 && <p className="entry-content__text">{item.text3}</p>
                }

                <p className="entry-content__strong">Thông tin liên hệ:</p>
                {
                  item.concastInfo.addressShop && (
                    <p className="entry-content__text">
                      Địa hỉ cửa hàng:&nbsp;{item.concastInfo.addressShop}
                    </p>
                  )
                }

                {
                  item.concastInfo.farm && (
                    <p className="entry-content__text">
                      Trang trại:&nbsp;{item.concastInfo.farm}
                    </p>
                  )
                }

                  {
                    item.concastInfo.phone && (
                      <p className="entry-content__text">
                        Hotline:&nbsp;
                        <a href={`tel:${item.concastInfo.phone}`} className="entry-content__text--link">
                          {item.concastInfo.phone}
                        </a>
                      </p>
                    )
                  }

                  {
                    item.concastInfo.email && (
                      <p className="entry-content__text">
                        Email:&nbsp;
                        <a href={`mailto:${item.concastInfo.email}`} className="entry-content__text--link">
                          {item.concastInfo.email}
                        </a>
                      </p>
                    )
                  }

                  {
                    item.concastInfo.website && (
                      <p className="entry-content__text">
                        Website:&nbsp;
                        <a href={item.concastInfo.website} className="entry-content__text--link">
                          {item.concastInfo.website}
                        </a>
                      </p>
                    )
                  }

                  {
                    item.concastInfo.facebook && (
                      <p className="entry-content__text">
                        Facebook:&nbsp;
                        <a href={item.concastInfo.facebook} className="entry-content__text--link">
                          {item.concastInfo.facebook}
                        </a>
                      </p>
                    )
                  }
                </>
            ))
          }

          <div className="entry-box">
            <p className="entry-content__text">
              Hy vọng qua những gợi ý trên đây, các bạn có thể chọn được cửa hàng bán chó cảnh uy tín phù hợp với nhu cầu của mình tại Hà Nội. Còn nếu bạn đang ở thành phố mang tên Bác, không vấn đề gì vì chúng tôi cũng có danh sách Top 10 cửa hàng bán chó cảnh uy tín nhất Hồ Chí Minh. Chúc mọi người sớm tìm được Boss của đời mình nhé.
            </p>

            <ul>
              {
                DATAICONTOOLTIP.map((item, index) => {
                  return <ItemNetwork key={index} item={item}/>
                })
              }
            </ul>
          </div>
        </div>
      </div>
      <MyBackTop />
    </>
  )
}

export default PostNew
