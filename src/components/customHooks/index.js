
export const useHandleSort = ({dataAll, group, isParentSort}) => {
  const groupData = dataAll.filter(item => item.group === group)

  if (!groupData.length > 0) {
    if (isParentSort === 'hot') {
      const newData = dataAll.filter(item => item.hot)
      return newData
    }

    if (isParentSort === 'expensive') {
      const newData = dataAll.sort((item1, item2) => item1.price - item2.price)
      return newData
    }

    if (isParentSort === 'cheap') {
      const newData = dataAll.sort((item1, item2) => item2.price - item1.price)
      return newData
    }

    return dataAll
  }

  // const methods = {
  //   hot: getHotData,
  //   expensive: getExpensiveData
  // }

  // const newData = methods[isParentSort]();
  // return newData;

  if (isParentSort === 'hot') {
    const newData = groupData.filter(item => item.hot)

    if (!newData.length > 0) {
      return groupData
    }
    return newData
  }

  if (isParentSort === 'expensive') {
    const newData = groupData.sort((item1, item2) => item1.price - item2.price)

    if (!newData.length > 0) {
      return groupData
    }
    return newData
  }

  if (isParentSort === 'cheap') {
    const newData = groupData.sort((item1, item2) => item2.price - item1.price)

    if (!newData.length > 0) {
      return groupData
    }
    return newData
  }

  return groupData
}

