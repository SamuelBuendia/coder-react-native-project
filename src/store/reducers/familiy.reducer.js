import { FAMILY } from '../../constants/data'
import { familyTypes } from '../types'

const { SELECT_PERSON, FILTER_PERSON } = familyTypes

const initialState = {
  families: FAMILY,
  filteredFamilies: [],
  selected: null
}

const familyReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_PERSON:
      return {
        ...state,
        selected: state.families.find((family) => family.id === action.familyId)
      }
    case FILTER_PERSON:
      const families = state.families.filter(
        (product) => product.categoryId === action.familyId
      )
      return {
        ...state,
        filteredFamilies: families
      }
    default:
      return state
  }
}

export default familyReducer
