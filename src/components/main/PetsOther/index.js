import { PETSOTHER, COLOR, groupOther as group } from '../../dataConst'
import ShowGroupProduct from '../../Products/ShowGroupProduct'

const ProductOther = () => {
  return (
    <>
      <ShowGroupProduct group={group} color={COLOR} title={PETSOTHER} />
    </>
  )
}

export default ProductOther
