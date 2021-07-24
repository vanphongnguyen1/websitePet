import { DOG, COLOR, groupDogs as group } from '../../dataConst'
import ShowAllProductGroup from '../../Products/ShowAllProductGroup'

const ShowDogs = ({ match }) => {
  return (
    <>
      <ShowAllProductGroup
        match={match}
        group={group}
        color={COLOR}
        title={DOG}
      />
    </>
  )
}

export default ShowDogs
