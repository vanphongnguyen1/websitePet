import {
  PETSOTHER,
  COLOR,
  groupOther as group
} from '../../dataConst'
import ShowAllProductGroup from '../../Products/ShowAllProductGroup'

const ShowPetOther = ({ match }) => {
  return (
    <>
      <ShowAllProductGroup
        match={match}
        group={group}
        color={COLOR}
        title={PETSOTHER}
      />
    </>
  )
}

export default ShowPetOther
