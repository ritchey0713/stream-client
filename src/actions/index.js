import { SIGN_IN, SIGN_OUT, CREATE_STREAM, FETCH_STREAM, FETCH_STREAMS, EDIT_STREAM, DELETE_STREAM } from "./types"
import streams from "../apis/streams"
import history from "../history"

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
  return async (dispatch, getState) => {
    const { userId } = getState().auth
    const resp = await streams.post('/streams', { ...formValues, userId })
    dispatch({
      type: CREATE_STREAM,
      payload: resp.data
    })
    
    if(resp.status === 201){
      history.push("/")
    } else {
      console.log("Need to go back to form")
    }
  }
}

export const fetchStreams = () => {
  return async (dispatch) => {
    const resp = await streams.get("/streams")

    dispatch({
      type: FETCH_STREAMS,
      payload: resp.data
    })
  }
}

export const fetchStream = (id) => {
  return async (dispatch) => {
    const resp = await streams.get(`/streams/${id}`)

    dispatch({
      type: FETCH_STREAM,
      payload: resp.data
    })
  }
}

export const editStreams = (id, updates) => {
  return async (dispatch) => {
    const resp = await streams.put(`/streams/${id}`, updates)

    dispatch({
      type: EDIT_STREAM,
      payload: resp
    })
   }
}

export const deleteStreams = (id) => {
  return async (dispatch) => {
    await streams.delete(`/streams/${id}`)

    dispatch({
      type: DELETE_STREAM,
      payload: id
    })
  }
}