import React from 'react'
import { dataPost } from '../../../dataConst'
import PageNews from './PageNews'
import PageTitle from '../../../reuse/PageTitle'
import MyBackTop from '../../../reuse/MyBackTop'
import './style.scss'

const News = ({ match }) => {
  return (
    <>
      <PageTitle match={match} />
      <PageNews data={dataPost} />
      <MyBackTop />
    </>
  )
}

export default News
