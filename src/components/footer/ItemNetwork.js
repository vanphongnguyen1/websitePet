import React from 'react'
import { Tooltip } from 'antd'

const ItemNetwork = props => {
  const { icon, title } = props.item

  return (
    <>
      <li>
        <Tooltip placement="bottom" title={title}>
          <a href="#ff" className="social-network__icon">
            <i className={icon} />
          </a>
        </Tooltip>
      </li>
    </>
  )
}

export default ItemNetwork
