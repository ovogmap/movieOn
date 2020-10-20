import { combineReducers } from 'redux'
import loading from './loading'
import auth from './auth'
import list from './list'
import home from './home'
import detail from './detail'

export default combineReducers({loading, auth, list, home, detail})