import Buttom from '../reuse/Buttom'
import { useHistory } from 'react-router'
import './style.scss'

const Page404 = () => {
  const history = useHistory()

  return (
    <>
      <div className="page-err">
        <div className="page-err__box">
          <div className="box-404">
            <div className="box-404__background" />
            <p className="box-404__text">404</p>
          </div>

          <p className="page-err__title">
            page not found
          </p>
          <p className="page-err__text">
            Trang bạn đang tìm kiếm có thể đã bị xóa, tên của nó đã được thay đổi hoặc tạm thời không có sẵn
          </p>

          <Buttom
            title="Trang chủ"
            classType="btn--back-home"
            onClick={() => history.push("/")}
          />
        </div>
      </div>
    </>
  )
}

export default Page404
