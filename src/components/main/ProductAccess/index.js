import { ACCESSORIES, COLOR, groupAccessories as group } from '../../dataConst'
import ShowGroupProduct from '../../Products/ShowGroupProduct'

const ProductAccess = () => {
  return (
    <>
      <ShowGroupProduct group={group} color={COLOR} title={ACCESSORIES} />
    </>
  )
}

export default ProductAccess
