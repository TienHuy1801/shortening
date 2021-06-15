import * as type from '../type/link'

const initialState = {
  isLoading: false,
  data: []
}

export const linkReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.SUBMIT_LINK:
      return {
        ...state,
        isLoading: true
      }
    case type.UPDATE_DATA:
      let addData = [...state.data];
      addData.push(action.payload);
      return {
        isLoading: false,
        data: addData
      }
    default:
      return state;
  }
}