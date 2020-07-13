import axios from "axios"
import {
  ALBUM_AND_TRACKS_USERNAME,
  ALBUM_AND_TRACKS_PASSWORD
} from "react-native-dotenv"
const albumandTracks = axios.create({
  baseURL: "https://api.spotify.com/v1",
  auth: {
    username: ALBUM_AND_TRACKS_USERNAME,
    password: ALBUM_AND_TRACKS_PASSWORD
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function get_albums_list({ ids, market }) {
  return albumandTracks.get(`/albums`, { params: { ids: ids, market: market } })
}
function get_albums_id_read(id, { market }) {
  return albumandTracks.get(`/albums/{id}`, { params: { market: market } })
}
function get_albums_id_tracks_list(id, { limit, offset, market, flag }) {
  return albumandTracks.get(`/albums/{id}/tracks`, {
    params: { limit: limit, offset: offset, market: market, flag: flag }
  })
}
export const apiService = {
  get_albums_list,
  get_albums_id_read,
  get_albums_id_tracks_list
}
