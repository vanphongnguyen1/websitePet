import { DOG, COLOR, groupDogs as group } from '../../dataConst'
import ShowGroupProduct from '../../Products/ShowGroupProduct'

const ProductDogs = () => {
  return (
    <>
      <ShowGroupProduct group={group} color={COLOR} title={DOG} />
    </>
  )
}

export default ProductDogs
