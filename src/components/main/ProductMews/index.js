import {
  MEW,
  COLOR,
  groupMews as group
 } from '../../dataConst'
 import ShowGroupProduct from '../../Products/ShowGroupProduct'

const ProductMews = () => {
  return (
    <>
      <ShowGroupProduct
        group={group}
        color={COLOR}
        title={MEW}
      />
    </>
  )
}

export default ProductMews
