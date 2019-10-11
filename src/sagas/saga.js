import { takeLatest, put } from "redux-saga/effects";
import { delay } from 'redux-saga/effects';

function* incrementAsync() {
    yield delay(2000);
    yield put({type: 'COUNT_UP_ASYNC', payload: 1});
}

function* decrementAsync() {
    yield delay(2000);
    yield put({type: 'COUNT_DOWN_ASYNC', payload: 1});
}

function* getUsers() {
    yield put({type: 'GET_USERS_ASYNC'});
}

function* watchSagas(){
    // yield takeEvery('INCREMENT', incrementAsync); //this takes every action we do something
    yield takeLatest('INCREMENT', incrementAsync); //this takes the last action we do something
    yield takeLatest('DECREMENT', decrementAsync); //this takes the last action we do something
    yield takeLatest('GET_USERS', getUsers); //this takes the last action we do something
}



export default watchSagas;