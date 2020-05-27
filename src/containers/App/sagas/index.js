import { select, put, takeLatest, delay } from "redux-saga/effects";
import { SAVE_NAVBAR_OPTION, SHOW_SNACKBAR } from "../constants";
import { saveNavbarOptionSuccessful, saveNavbarOptionFailed, hideSnackbar } from "../actions";
import { ACTIVE_TAB } from "../selectors";

function* saveNavbarOptionAsync() {
	const navbarOption = yield select(ACTIVE_TAB);
	try {
		yield put(saveNavbarOptionSuccessful());
		yield localStorage.setItem("activeTab", navbarOption);
	} catch (error) {
		yield put(saveNavbarOptionFailed());
		yield localStorage.setItem("activeTab", "homePage");
	}
}

function* showSnackbarAsync() {
	try {
		yield delay(4000);
		yield put(hideSnackbar());
	} catch (error) {
		yield put(hideSnackbar());
	}
}

export function* appSaga() {
	yield takeLatest(SAVE_NAVBAR_OPTION, saveNavbarOptionAsync);
	yield takeLatest(SHOW_SNACKBAR, showSnackbarAsync);
}
