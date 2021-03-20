import React from 'react'
import MyCart from './MyCart'
import PageTitle from'../../reuse/PageTitle'
import './style.scss'

const PageCart = props => {
  const { match } = props

  return (
    <>
      <div className="page-cart">
        <PageTitle match={match}/>

        <div className="container">
          <MyCart />
        </div>
      </div>
    </>
  )
}

export default PageCart
