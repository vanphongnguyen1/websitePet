import React, { useEffect, useState } from 'react'
import { dataServices } from '../../dataConst'
import PageService from './PageService'
import PageTitle from '../../reuse/PageTitle'
import { useSelector } from 'react-redux'
import MyBackTop from '../../reuse/MyBackTop'
import './style.scss'

const ShowGroupService = ({ match }) => {
  const { params } = match
  const [dataNew, setDataNew] = useState([])
  const newTeams = useSelector((state) => state.services.infoService)

  useEffect(() => {
    const newData = dataServices.filter((item) => item.activate === newTeams.id)

    if (!newData.length && params.url === 'dich-vu-trong-giu-thu-cung') {
      dataServices.forEach((item) => {
        if (item.activate === 1) {
          newData.push(item)
        }
      })
    }
    if (!newData.length && params.url === 'benh-vien-thu-y') {
      dataServices.forEach((item) => {
        if (item.activate === 2) {
          newData.push(item)
        }
      })
    }
    if (!newData.length && params.url === 'phoi-giong-cho-meo') {
      dataServices.forEach((item) => {
        if (item.activate === 3) {
          newData.push(item)
        }
      })
    }
    if (!newData.length && params.url === 'spa-grooming') {
      dataServices.forEach((item) => {
        if (item.activate === 4) {
          newData.push(item)
        }
      })
    }
    setDataNew(newData)
  }, [newTeams, params.url])

  return (
    <>
      <PageTitle params={{ group: 'dich-vu', url: params.url }} />
      <PageService data={dataNew} title={newTeams.title} />
      <MyBackTop />
    </>
  )
}

export default ShowGroupService
