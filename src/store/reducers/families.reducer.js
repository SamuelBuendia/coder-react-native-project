import { FAMILIES } from '../../constants/data'
import { familiesTypes } from '../types'

const { SELECT_FAMILY } = familiesTypes

const initialState = {
  families: FAMILIES,
  selected: null
}

const familiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_FAMILY:
      const indexFamily = state.families.findIndex(
        (family) => family.id === action.categoryId
      )
      if (indexFamily === -1) return state
      return {
        ...state,
        selected: state.families[indexFamily]
      }
    default:
      return state
  }
}

export default familiesReducer
