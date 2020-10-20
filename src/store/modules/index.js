import { combineReducers } from 'redux'
import loading from './loading'
import auth from './auth'
import list from './list'

export default combineReducers({loading, auth, list})