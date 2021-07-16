import React from 'react'
import { dataServices } from '../../dataConst'
import PageService from './PageService'
import PageTitle from '../../reuse/PageTitle'
import MyBackTop from '../../reuse/MyBackTop'
import './style.scss'

const ServicePet = ({ match }) => {
  return (
    <>
      <PageTitle match={match} />
      <PageService data={dataServices} title={'Dịch vụ'}/>
      <MyBackTop />
    </>
  )
}

export default ServicePet
