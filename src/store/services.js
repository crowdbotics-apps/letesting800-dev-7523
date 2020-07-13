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
const lETesting800API = axios.create({
  baseURL: "https://letesting800-dev-7523.herokuapp.com/",
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
function api_v1_customtext_list() {
  return lETesting800API.get(`/api/v1/customtext/`)
}
function api_v1_customtext_read() {
  return lETesting800API.get(`/api/v1/customtext/{id}/`)
}
function api_v1_customtext_update(requestBody) {
  return lETesting800API.put(`/api/v1/customtext/{id}/`, requestBody)
}
function api_v1_customtext_partial_update(requestBody) {
  return lETesting800API.patch(`/api/v1/customtext/{id}/`, requestBody)
}
function api_v1_homepage_list() {
  return lETesting800API.get(`/api/v1/homepage/`)
}
function api_v1_homepage_read() {
  return lETesting800API.get(`/api/v1/homepage/{id}/`)
}
function api_v1_homepage_update(requestBody) {
  return lETesting800API.put(`/api/v1/homepage/{id}/`, requestBody)
}
function api_v1_homepage_partial_update(requestBody) {
  return lETesting800API.patch(`/api/v1/homepage/{id}/`, requestBody)
}
function api_v1_login_create() {
  return lETesting800API.post(`/api/v1/login/`)
}
function api_v1_signup_create(requestBody) {
  return lETesting800API.post(`/api/v1/signup/`, requestBody)
}
function rest_auth_login_create(requestBody) {
  return lETesting800API.post(`/rest-auth/login/`, requestBody)
}
function rest_auth_logout_list() {
  return lETesting800API.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create() {
  return lETesting800API.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(requestBody) {
  return lETesting800API.post(`/rest-auth/password/change/`, requestBody)
}
function rest_auth_password_reset_create(requestBody) {
  return lETesting800API.post(`/rest-auth/password/reset/`, requestBody)
}
function rest_auth_password_reset_confirm_create(requestBody) {
  return lETesting800API.post(`/rest-auth/password/reset/confirm/`, requestBody)
}
function rest_auth_registration_create(requestBody) {
  return lETesting800API.post(`/rest-auth/registration/`, requestBody)
}
function rest_auth_registration_verify_email_create(requestBody) {
  return lETesting800API.post(
    `/rest-auth/registration/verify-email/`,
    requestBody
  )
}
function rest_auth_user_read() {
  return lETesting800API.get(`/rest-auth/user/`)
}
function rest_auth_user_update(requestBody) {
  return lETesting800API.put(`/rest-auth/user/`, requestBody)
}
function rest_auth_user_partial_update(requestBody) {
  return lETesting800API.patch(`/rest-auth/user/`, requestBody)
}
export const apiService = {
  get_albums_list,
  get_albums_id_read,
  get_albums_id_tracks_list,
  api_v1_customtext_list,
  api_v1_customtext_read,
  api_v1_customtext_update,
  api_v1_customtext_partial_update,
  api_v1_homepage_list,
  api_v1_homepage_read,
  api_v1_homepage_update,
  api_v1_homepage_partial_update,
  api_v1_login_create,
  api_v1_signup_create,
  rest_auth_login_create,
  rest_auth_logout_list,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_read,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
