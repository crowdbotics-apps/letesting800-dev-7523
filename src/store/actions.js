import * as types from "./constants"
export const get_albums_list = (ids, market) => ({
  type: types.GET_ALBUMS_LIST,
  ids,
  market
})
export const get_albums_listSucceeded = response => ({
  type: types.GET_ALBUMS_LIST_SUCCEEDED,
  response
})
export const get_albums_listFailed = error => ({
  type: types.GET_ALBUMS_LIST_FAILED,
  error
})
export const get_albums_id_read = (market, id) => ({
  type: types.GET_ALBUMS_ID_READ,
  market,
  id
})
export const get_albums_id_readSucceeded = response => ({
  type: types.GET_ALBUMS_ID_READ_SUCCEEDED,
  response
})
export const get_albums_id_readFailed = error => ({
  type: types.GET_ALBUMS_ID_READ_FAILED,
  error
})
export const get_albums_id_tracks_list = (limit, offset, market, id, flag) => ({
  type: types.GET_ALBUMS_ID_TRACKS_LIST,
  limit,
  offset,
  market,
  id,
  flag
})
export const get_albums_id_tracks_listSucceeded = response => ({
  type: types.GET_ALBUMS_ID_TRACKS_LIST_SUCCEEDED,
  response
})
export const get_albums_id_tracks_listFailed = error => ({
  type: types.GET_ALBUMS_ID_TRACKS_LIST_FAILED,
  error
})
