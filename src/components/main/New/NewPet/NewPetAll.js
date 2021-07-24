import React, { useEffect, useState } from 'react'
import { dataPost } from '../../../dataConst'
import PageNews from './PageNews'
import PageTitle from '../../../reuse/PageTitle'
import { useSelector } from 'react-redux'
import MyBackTop from '../../../reuse/MyBackTop'
import './style.scss'

const NewPetAll = ({ match }) => {
  const { params } = match
  const [dataNew, setDataNew] = useState([])
  const newTeams = useSelector((state) => state.newAction.infoPost)

  useEffect(() => {
    const newData = dataPost.filter((item) => item.activate === newTeams.id)

    if (!newData.length && params.url === 'hoat-dong-dogily-petshop') {
      dataPost.forEach((item) => {
        if (item.activate === 2) {
          newData.push(item)
        }
      })
    }
    if (!newData.length && params.url === 'tin-tuc-thu-cung') {
      dataPost.forEach((item) => {
        if (item.activate === 1) {
          newData.push(item)
        }
      })
    }
    setDataNew(newData)
  }, [newTeams, params.url])

  return (
    <>
      <PageTitle params={{ group: 'news', url: params.url }} />
      <PageNews data={dataNew} title={newTeams.title} />
      <MyBackTop />
    </>
  )
}

export default NewPetAll
