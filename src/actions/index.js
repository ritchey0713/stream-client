import { SIGN_IN, SIGN_OUT, CREATE_STREAM, FETCH_STREAM, FETCH_STREAMS, EDIT_STREAM, DELETE_STREAM } from "./types"
import streams from "../apis/streams"

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    userId
  }
}

export const signOut = () => {
  return {
    type: SIGN_OUT
  }
}

export const createStream = (formValues) => {
  return async (dispatch) => {
    const resp = await streams.post('/streams', formValues)
    dispatch({
      type: CREATE_STREAM,
      payload: resp.data
    })
  }
}