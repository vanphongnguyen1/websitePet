import React from 'react'
import { Tooltip } from 'antd'

const IconToolTip = (props) => {
  const { icon, title } = props.item

  return (
    <>
      <Tooltip placement="bottom" title={title}>
        <a href="#fa" className="header-top__item--icon-faceboock">
          <i className={icon} />
        </a>
      </Tooltip>
    </>
  )
}

export default IconToolTip
