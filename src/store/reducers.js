import * as types from "./constants"

const initialState = {}

export default function apiReducer(state = initialState, action) {
  switch (action.type) {
    case types.GET_ALBUMS_LIST:
    case types.GET_ALBUMS_LIST_SUCCEEDED:
    case types.GET_ALBUMS_LIST_FAILED:
    case types.GET_ALBUMS_ID_READ:
    case types.GET_ALBUMS_ID_READ_SUCCEEDED:
    case types.GET_ALBUMS_ID_READ_FAILED:
    case types.GET_ALBUMS_ID_TRACKS_LIST:
    case types.GET_ALBUMS_ID_TRACKS_LIST_SUCCEEDED:
    case types.GET_ALBUMS_ID_TRACKS_LIST_FAILED:
    default:
      return state
  }
}
