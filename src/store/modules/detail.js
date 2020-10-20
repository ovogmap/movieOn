
const LOADING = 'detail/LOADING'
const SUCCESS = 'detail/SUCCESS'
const ERROE = 'detail/ERROE'


export const loading = () => ({ type: LOADING })
export const success = (data) => ({ 
  type: SUCCESS,
  data
})
export const error = (error) => ({ type: ERROE, error })


const INITIAL_STATE = {
  isLoading: false,
  erroe: null,
  result: {
    backdrop_path: '',
    id: '',
    title: '',
    tagline: '',
    poster_path: '',
    overview: '',
    gens: [],
    casts: [
      {
        name: '',
        character: '',
        profile_path: ''
      }
    ],
    similars: [
      {
       title: '',
       poster_path: '' 
      }
    ],
    videos: [
      {
        key: '',
        thumbnail: ''
      }
    ]

  },
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
        result: action.data
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