import { familiesTypes } from "../types"

const { SELECT_FAMILY } = familiesTypes

export const selectFamily = (id) => ({
    type: SELECT_FAMILY,
    categoryId: id
})