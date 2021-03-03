import { combineReducers } from 'redux'
import toDoListReducer from './toDoListReducer'

const rootReducer = combineReducers({
    list: toDoListReducer
})

export default rootReducer