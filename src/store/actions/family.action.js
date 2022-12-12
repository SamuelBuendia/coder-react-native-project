import { familyTypes } from "../types"

const { SELECT_PERSON, FILTER_PERSON } = familyTypes

export const selectPerson = (id) => ({
    type: SELECT_PERSON,
    familyId: id
})

export const filterPerson = (id) => ({
    type: FILTER_PERSON,
    familyId: id
})