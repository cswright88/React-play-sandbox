import { call, takeLatest, put } from "redux-saga/effects";
import { delay } from 'redux-saga/effects';
// import { recieveApiData } from "../actions";
import fetchData from '../api';
import fetchPokemon from "../api/fetchPokemon";

function* incrementAsync() {
    yield delay(2000);
    yield put({type: 'COUNT_UP_ASYNC', payload: 1});
}

function* decrementAsync() {
    yield delay(2000);
    yield put({type: 'COUNT_DOWN_ASYNC', payload: 1});
}

function* getUsers() {
    try {
        const data = yield call(fetchData);
        yield put({type: 'RECIEVE_API_DATA', data: data});
    } catch (e) {
        console.log(e);
    }
}

function* getPokeomon(){
    try {
        const data = yield call(fetchPokemon);
        yield put({type: 'RECIEVE_API_DATA', data: data});
    } catch (e) {
        console.log(e);
    }
}

function* watchSagas(){
    // yield takeEvery('INCREMENT', incrementAsync); //this takes every action we do something
    yield takeLatest('INCREMENT', incrementAsync); //this takes the last action we do something
    yield takeLatest('DECREMENT', decrementAsync); //this takes the last action we do something
    yield takeLatest('GET_USERS', getUsers); //this takes the last action we do something
    yield takeLatest('GET_POKEMON', getPokeomon); //this takes the last action we do something
}



export default watchSagas;