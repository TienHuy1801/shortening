import { SUBMIT_LINK, UPDATE_DATA } from "../type/link"

const updateData = (data) => ({
  type: UPDATE_DATA,
  payload: data
})

const submitLink = (longLink) => ({
  type: SUBMIT_LINK,
  payload: longLink
})

export const link = {
  updateData,
  submitLink
}