import { takeEvery, put } from 'redux-saga/effects';

const mapPoints = [{
  name: 'Москва',
  x: 55.75,
  y: 37.6,
}, {
  name: 'Абакан',
  x: 53.43,
  y: 91.25,
}, {
  name: 'Нижний Новгород',
  x: 56.18,
  y: 43.5212,
}, {
  name: 'Санкт Петербург',
  x: 59.57,
  y: 30.19,
}, {
  name: 'Красноярск',
  x: 56.0043,
  y: 92.5217,
}, {
  name: 'Владивосток',
  x: 43.07,
  y: 131.54,
}];

export function* workerSaga(x) {
  const { from, to } = x;
  let objectFrom;
  let objectTo;
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < mapPoints.length; i++) {
    if (from === mapPoints[i].name) {
      objectFrom = mapPoints[i];
    }
    if (to === mapPoints[i].name) {
      objectTo = mapPoints[i];
    }
  }
  yield put({ type: 'TABLE_SET', from: objectFrom, to: objectTo });
}
export function* watchClickSaga() {
  yield takeEvery('TABLE_CLICK', (x) => workerSaga(x));
}

export default function* rootSaga() {
  yield watchClickSaga();
}
