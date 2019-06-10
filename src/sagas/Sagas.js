import {put,call,takeLatest,delay ,takeEvery , fork, all} from 'redux-saga/effects'


function* increm(){
    yield takeEvery('INCREMENT', callIncrem)
}

 function* callIncrem() {
   // try {
        console.log('saga-inc');
        // yield delay(3000);
        yield put({type: 'INCREMENT_SUCCEEDED', value: 1})
    //} catch (e) {
    //}
}


function* decrem(){
    yield takeEvery('DECREMENT', callDecrem)
}

function* callDecrem() {
    // try {
    console.log('saga-dec');
    // yield delay(3000);
    yield put({type: 'DECREMENT_SUCCEEDED', value: 1})
    //} catch (e) {
    //}
}

export default function *rootSaga() {
    console.log('hello-from-saga');
    yield all([
        increm(),
        decrem()
    ])
    //takeEvery('INCREMENT', callIncrem)
}