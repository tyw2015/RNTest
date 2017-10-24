import { takeEvery } from 'redux-saga';
import { call, put, take, fork } from 'redux-saga/effects';
import { hellowWorld, testObtain } from '../services/demo';
import { Toast } from 'antd-mobile'

export function* hellosaga(action) {
    let result = yield call(hellowWorld);
}
export function* watchSaga() {
    while (true) {
        let action = yield take('test/demo/hellowWorld')
        yield fork(hellosaga, action);
    }
}

export function* obtainSome(action) {
    let result = yield call(testObtain);
    if (result.status != 1) return false
    Toast.success('成功刷新10条数据',2,null,false)
    
    yield put({ type: 'test/demo/refreshSuccess', payload: { listData: result.content } })
}
export function* watchObtainSome() {
    while (true) {
        let action = yield take('test/demo/refresh')
        yield fork(obtainSome, action);
    }
}