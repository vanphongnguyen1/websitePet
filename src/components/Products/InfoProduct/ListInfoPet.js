import React, { useRef, useEffect } from 'react'

const ListInfoPet = props => {
  const { description } = props
  const tagParent = useRef(null)

  useEffect(() => {
    const ele = tagParent.current.querySelector('ul')
    ele.classList.add('box-info__list')
    const listEle = ele.querySelectorAll('li')

    listEle.forEach(item => {
      const spanIcon = document.createElement('span')
      const spanText = document.createElement('span')
      item.classList.add('box-info__list--item')

      const text = item.innerText
      item.innerText = ''

      spanIcon.classList.add('box-info__list--item-icon')
      spanIcon.classList.add('far')
      spanIcon.classList.add('fa-check')
      spanText.classList.add('box-info__list--item-text')
      spanText.innerText = text

      item.insertAdjacentElement('afterbegin', spanIcon)
      item.insertAdjacentElement('beforeend', spanText)
    })
  }, [])

  return (
    <>
      <div
        className="editor"
        dangerouslySetInnerHTML={{__html:description}}
        ref={tagParent}
      />
    </>
  )
}

export default ListInfoPet
