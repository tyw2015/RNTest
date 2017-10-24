import { fork } from 'redux-saga/effects';

import { watchSaga, watchObtainSome } from './demo';

export default function* rootSaga() {
  yield [
    fork(watchSaga),//demo
    fork(watchObtainSome),//demo
  ];
}