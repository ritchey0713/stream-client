import { CREATE_STREAM, FETCH_STREAM, FETCH_STREAMS, EDIT_STREAM, DELETE_STREAM } from "../actions/types"

export default (state = {}, action) => {
  switch(action.type){
    case CREATE_STREAM:
      return {
        ...state,
        [action.payload.id]: action.payload
      }

    // case FETCH_STREAMS:
    //   return {
    //     ...state,
    //     ..._.mapKeys(action.payload, "id")
    //   }

    case FETCH_STREAMS:
      return {
        ...state,
        ...action.payload.reduce((newObj, eleObj) => {
          newObj[eleObj.id] = eleObj
          return newObj
        }, {})
      }

    case FETCH_STREAM: 
      return {
        ...state,
        [action.payload.id]: action.payload
      }
    
    case EDIT_STREAM:
      return {
        ...state,
        [action.payload.id]: action.payload
      } 
      
    case DELETE_STREAM:
      // delete state[action.payload]
      // return state
      
       return Object.keys(state).reduce((newObj, eleObj) => {
          if (eleObj !== action.payload.toString()) {
            newObj[eleObj] = state[eleObj] 
          }
          return newObj
        }, {})
        

    default:
      return state

  }
}