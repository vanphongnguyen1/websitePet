import React from 'react'
import ListComments from './ListComments'
import './formComments.scss'

const FormComments = ({ idProduct }) => {
  return (
    <div className="box-comments">
      <ListComments idProduct={idProduct} />
    </div>
  )
}

export default FormComments
