
export const handleSort = ({dataAll, group, isParentSort}) => {
  const groupData = dataAll.filter(item => item.lineage.groupID === group)

  if (!groupData.length > 0) {
    if (isParentSort === 'hot') {
      const newData = dataAll.filter(item => item.isHot)
      return newData
    }

    if (isParentSort === 'expensive') {
      const newData = [...dataAll].sort((item1, item2) => {
        return item1.priceSale - item2.priceSale
      })
      console.log(newData);
      return newData
    }

    if (isParentSort === 'cheap') {
      const newData = [...dataAll].sort((item1, item2) => item2.priceSale - item1.priceSale)
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
    const newData = groupData.filter(item => item.isHot)

    if (!newData.length > 0) {
      return groupData
    }
    return newData
  }

  if (isParentSort === 'expensive') {
    const newData = [...groupData].sort((item1, item2) => item1.priceSale - item2.priceSale)

    if (!newData.length > 0) {
      return groupData
    }
    return newData
  }

  if (isParentSort === 'cheap') {
    const newData = [...groupData].sort((item1, item2) => item2.priceSale - item1.priceSale)

    if (!newData.length > 0) {
      return groupData
    }
    return newData
  }

  return groupData
}
