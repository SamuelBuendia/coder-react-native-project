import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { familiesReducer, familyReducer, authReducer } from './reducers'

const rootReducer = combineReducers({
  families: familiesReducer,
  family: familyReducer,
  auth: authReducer
})

export default createStore(rootReducer, applyMiddleware(thunk))