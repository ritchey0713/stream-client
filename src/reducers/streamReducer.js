import { CREATE_STREAM, FETCH_STREAM, FETCH_STREAMS, EDIT_STREAM, DELETE_STREAM } from "./types"

export default (state = {}, action) => {
  switch(action.type){
    case CREATE_STREAM:
      return {

      }

    case FETCH_STREAMS:
      return {

      }

    case FETCH_STREAM: 
      return {
        ...state,
        [action.payload.id]: action.payload
      }
    

    default:
      return state

  }
}