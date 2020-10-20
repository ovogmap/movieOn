
const LOADING = 'home/LOADING'
const SUCCESS = 'home/SUCCESS'
const ERROE = 'home/ERROE'


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
    backdropPath: '',
    id: '',
    tagline: '',
    title: ''
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
          backdropPath: action.data.backdropPath,
          id: action.data.id,
          tagline: action.data.tagline,
          title: action.data.title
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