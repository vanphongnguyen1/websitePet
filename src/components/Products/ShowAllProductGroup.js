import React, { useState, useMemo } from 'react'
import BoxHeading from '../reuse/BoxHeading'
import ShowAll from '../Products/ShowAll'
import PageTitle from '../reuse/PageTitle'
import MyBackTop from '../reuse/MyBackTop'
import { useSelector } from 'react-redux'
import { handleSort } from '../assets/js/handleSort'

const ShowAllProductGroup = ({ match, group, color, title }) => {
  const [isParentSort, setIsParentSort] = useState('')
  const dataProductFetch = useSelector((state) => state.products)
  const dataGroupFetch = useSelector((state) => state.groups)

  const data = useMemo(() => {
    const listData = dataProductFetch.list
    const listGroup = dataGroupFetch.list

    if (
      dataProductFetch.loading === 'success' &&
      dataGroupFetch.loading === 'success'
    ) {
      const findGroup = listGroup.find((item) => item.name === group)
      return handleSort({
        dataAll: listData,
        group: findGroup.id,
        isParentSort,
      })
    }
  }, [isParentSort, dataProductFetch, dataGroupFetch, group])

  return (
    <>
      <PageTitle match={match} />

      <div className="product-mews">
        <div className="container">
          <BoxHeading
            title={title}
            color={color}
            setIsParentSort={setIsParentSort}
          />

          <ShowAll child={title} products={data ? data : []} />
        </div>
      </div>

      <MyBackTop />
    </>
  )
}

export default ShowAllProductGroup
