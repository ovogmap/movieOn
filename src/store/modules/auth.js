
const LOG_IN = 'auth/LOGIN'
const LOG_OUT = 'auth/LOGOUT'

export const onLogIn = (user) => ({type:LOG_IN, user})
export const onLogOut= () => ({type:LOG_OUT})

const INITIAL_STATE = {
  currentUser: {
    email: "",
    password: "",
    nickName: "",
  }
}

export default function auth(state = INITIAL_STATE, action){
  switch(action.type){
    case LOG_IN:
      return state.currentUser = action.user;
    case LOG_OUT:
      return state.currentUser = {
        user:'',
        uid: '',
        dsplayName: ''
      }
    default:
      return state
  }
}
 