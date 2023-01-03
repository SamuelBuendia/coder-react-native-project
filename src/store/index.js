import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { familiesReducer, familyReducer } from './reducers'

const rootReducer = combineReducers({
  families: familiesReducer,
  family: familyReducer
})

export default createStore(rootReducer, applyMiddleware(thunk))