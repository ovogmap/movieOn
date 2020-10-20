
const LOADING = 'list/LOADING'
const SUCCESS = 'list/SUCCESS'
const ERROE = 'list/ERROE'


export const loading = () => ({ type: LOADING })
export const success = (data) => ({ 
  type: SUCCESS,
  data
})
export const error = (error) => ({ type: ERROE, error })


const INITIAL_STATE = {
  isLoading: false,
  erroe: null,
  result : {
    upcoming: '',
    popular: '',
    topRated: ''
  }
}

export default function list(state = INITIAL_STATE, action ) {
  switch(action.type) {
    case LOADING:
      return {
        ...state,
        isLoading: true
      }
    case SUCCESS:
      return {
        ...state,
        isLoading: false,
        result : {
          upcoming: action.data.upcoming,
          popular: action.data.popular,
          topRated: action.data.topRated
        } 
      }
    case ERROE:
      return {
        isLoading: false,
        result: null,
        erroe: action.error
      }
    default:
      return state
  }
}