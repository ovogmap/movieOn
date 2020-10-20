
const START_LOADING = 'starLoading'
const END_LOADING = 'endLoading'

export const startLoading = () => ({type:START_LOADING})
export const endLoading = () => ({type:END_LOADING })

const INITIAL_STATE = {
  isLoading : false
}

export default function loding(state = INITIAL_STATE, action) {
  switch(action.type) {
    case START_LOADING:
      return {
        isLoading: true
      }
    case END_LOADING:
      return {
        isLoading: false
      }
    default:
      return state
  }
}