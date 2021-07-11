import {
  MEW,
  COLOR,
  groupMews as group
 } from '../../dataConst'
import ShowAllProductGroup from '../../Products/ShowAllProductGroup'

const ShowMews = ({ match }) => {
  return (
    <>
      <ShowAllProductGroup
        match={match}
        group={group}
        color={COLOR}
        title={MEW}
      />
    </>
  )
}

export default ShowMews
