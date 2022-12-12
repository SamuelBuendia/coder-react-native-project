import { createStore, combineReducers } from 'redux'
import { familiesReducer, familyReducer } from './reducers'

const rootReducer = combineReducers({
    families: familiesReducer,
    family: familyReducer
})

export default createStore(rootReducer)