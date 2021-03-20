import React from 'react'

const ListInfoPet = props => {
  const { description } = props

  return (
    <>
      {
        description.map((item, index) => {
          return (
            <ul className="box-info__list" key={index}>
            <div className="box-info__list-box">
              <li className="box-info__list--item">
                <span className="box-info__list--item-icon far fa-check" />
                <span className="box-info__list--item-text">
                  Tên khác:
                  <span className="box-info__list--item-textsub">
                    {item.name}
                  </span>
                </span>
              </li>

              <li className="box-info__list--item">
                <span className="box-info__list--item-icon far fa-check" />
                <span className="box-info__list--item-text">
                  Giống:
                  <span className="box-info__list--item-textsub">
                    {item.lineage}
                  </span>
                </span>
              </li>

              <li className="box-info__list--item">
                <span className="box-info__list--item-icon far fa-check" />
                <span className="box-info__list--item-text">
                  Màu sắc:
                  <span className="box-info__list--item-textsub">
                    {item.color}
                  </span>
                </span>
              </li>

              <li className="box-info__list--item">
                <span className="box-info__list--item-icon far fa-check" />
                <span className="box-info__list--item-text">
                  Giới tính:
                  <span className="box-info__list--item-textsub">
                    {item.gender}
                  </span>
                </span>
              </li>

              <li className="box-info__list--item">
                <span className="box-info__list--item-icon far fa-check" />
                <span className="box-info__list--item-text">
                  Tuổi:
                  <span className="box-info__list--item-textsub">
                    {item.age}
                  </span>
                </span>
              </li>
            </div>

            <div className="box-info__list-box">
              <li className="box-info__list--item">
                <span className="box-info__list--item-icon far fa-check" />
                <span className="box-info__list--item-text">
                  Tiêm vacxin:

                  <span className="box-info__list--item-textsub">
                    {item.vacxin}
                  </span>
                </span>
              </li>

              <li className="box-info__list--item">
                <span className="box-info__list--item-icon far fa-check" />
                <span className="box-info__list--item-text">
                  Tẩy giun:

                  <span className="box-info__list--item-textsub">
                    {item.wormRemover}
                  </span>
                </span>
              </li>

              <li className="box-info__list--item">
                <span className="box-info__list--item-icon far fa-check" />
                <span className="box-info__list--item-text">
                  Nguồn gốc:

                  <span className="box-info__list--item-textsub">
                    {item.origin}
                  </span>
                </span>
              </li>

              <li className="box-info__list--item">
                <span className="box-info__list--item-icon far fa-check" />
                <span className="box-info__list--item-text">
                  Bảo hành:

                  <span className="box-info__list--item-textsub">
                    {item.guarantee}
                  </span>
                </span>
              </li>

              <li className="box-info__list--item">
                <span className="box-info__list--item-icon far fa-check" />
                <span className="box-info__list--item-text">
                  Vận chuyển:

                  <span className="box-info__list--item-textsub">
                    {!item.ship ? 'Miễn phí toàn quốc' : ''}
                  </span>
                </span>
              </li>
            </div>

            <li className="box-info__list--item">
              <span className="box-info__list--item-icon far fa-check" />
              <span className="box-info__list--item-text">
                Tặng kèm phụ kiện:

                <span className="box-info__list--item-textsub">
                  {item.present}
                </span>
              </span>
            </li>
            </ul>
          )
        })
      }
    </>
  )
}

export default ListInfoPet
