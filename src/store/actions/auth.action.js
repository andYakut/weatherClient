export const regiserRequest = () => ({
  type: REGISTER_REQUEST,
})

export const regiserSuccess = (data) => ({
  type: REGISTER_SUCCESS,
  payload: data
})

export const registerFailure = (error) => ({
    type: REGISTER_FAILURE,
    payload: error
})