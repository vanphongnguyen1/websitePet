import {
  ACCESSORIES,
  COLOR,
  groupAccessories as group
} from '../../dataConst'
import ShowAllProductGroup from '../../Products/ShowAllProductGroup'

const ShowAccess = ({ match }) => {
  return (
    <>
      <ShowAllProductGroup
        match={match}
        group={group}
        color={COLOR}
        title={ACCESSORIES}
      />
    </>
  )
}

export default ShowAccess
