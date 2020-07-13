import { put, call, all, spawn } from "redux-saga/effects"
import { apiService } from "./services"
import * as types from "./constants"
function* get_albums_listWorker(action) {
  try {
    const result = yield call(apiService.get_albums_list, action)
    yield put(actions.get_albums_listSucceeded(result))
  } catch (err) {
    yield put(actions.get_albums_listFailed(err))
  }
}
function* get_albums_listWatcher() {
  yield takeEvery(types.GET_ALBUMS_LIST, get_albums_listWorker)
}
function* get_albums_id_readWorker(action) {
  try {
    const result = yield call(apiService.get_albums_id_read, action)
    yield put(actions.get_albums_id_readSucceeded(result))
  } catch (err) {
    yield put(actions.get_albums_id_readFailed(err))
  }
}
function* get_albums_id_readWatcher() {
  yield takeEvery(types.GET_ALBUMS_ID_READ, get_albums_id_readWorker)
}
function* get_albums_id_tracks_listWorker(action) {
  try {
    const result = yield call(apiService.get_albums_id_tracks_list, action)
    yield put(actions.get_albums_id_tracks_listSucceeded(result))
  } catch (err) {
    yield put(actions.get_albums_id_tracks_listFailed(err))
  }
}
function* get_albums_id_tracks_listWatcher() {
  yield takeEvery(
    types.GET_ALBUMS_ID_TRACKS_LIST,
    get_albums_id_tracks_listWorker
  )
}
export default function* rootSaga() {
  const sagas = [
    get_albums_listWatcher,
    get_albums_id_readWatcher,
    get_albums_id_tracks_listWatcher
  ]
  yield all(
    sagas.map(saga =>
      spawn(function*() {
        while (true) {
          try {
            yield call(saga)
            break
          } catch (e) {
            console.log(e)
          }
        }
      })
    )
  )
}
