import React, { useEffect, useRef } from 'react'

const ListInfoAccessories = props => {
  const { description } = props
  const tagParent = useRef(null)
  const newData = description.split(',')

  useEffect(() => {

  }, [])

  return (
    <>
      {
        newData.map((item, index) => (
          <div className="editor"
            dangerouslySetInnerHTML={{__html:item}}
            ref={tagParent}
            key={index}
          />
        ))}
      </>

    // <ul>
    //   {
    //     description.map((item, index) => {
    //       return (
    //         <li className="box-info__list--item" key={index}>
    //           <span className="box-info__list--item-icon far fa-check" />
    //           <span className="box-info__list--item-text">
    //             {item}
    //           </span>
    //         </li>
    //       )
    //     })
    //   }
    // </ul>
  )
}

export default ListInfoAccessories
