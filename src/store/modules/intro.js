
const START_LODING = 'starLoding'
const END_LODING = 'endLoding'

export const onStartLodin = () => ({type:START_LODING})
export const onEndLodin = () => ({type:END_LODING })

const INITIAL_STATE = {
  isLoding : false
}

export default function loding(state = INITIAL_STATE,action) {
  switch(action.type) {
    case START_LODING:
      return state.isLoding = true;
    case END_LODING:
      return state.isLoding = false;
    default:
      return state
  }
}