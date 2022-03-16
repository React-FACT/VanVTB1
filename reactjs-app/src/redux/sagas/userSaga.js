import { put, call, takeEvery } from "redux-saga/effects";
import { GET_ALL_USER, GET_ALL_USER_SUCCESS } from './../type';

import { fetchAllUser } from './../../services/ApiService';
import { getAllUser, receiveAllUser } from "../actions/userAction";

export function* getUsers() {
    try {
        const result = yield call(fetchAllUser);
        console.log("Receive: ", result);
        yield put(receiveAllUser(result));
    } catch (error) {
        console.log(error);
    }
}

export function* allData() {
    yield takeEvery(GET_ALL_USER, getUsers);
}

