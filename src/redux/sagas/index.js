import { takeEvery, put } from 'redux-saga/effects';

const mapPonints = [{
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
  for (let i = 0; i < mapPonints.length; i++) {
    if (from === mapPonints[i].name) {
      objectFrom = mapPonints[i];
    }
    if (to === mapPonints[i].name) {
      objectTo = mapPonints[i];
    }
  }
  console.log('dada', objectFrom, objectTo);
  yield put({ type: 'TABLE_SET', from: objectFrom, to: objectTo });
}
export function* watchClickSaga() {
  yield takeEvery('TABLE_CLICK', (x) => workerSaga(x));
}

export default function* rootSaga() {
  yield watchClickSaga();
}
