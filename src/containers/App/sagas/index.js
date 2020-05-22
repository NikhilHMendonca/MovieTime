import { takeEvery, select, put } from "redux-saga/effects";
import { SAVE_NAVBAR_OPTION } from "../constants";
import { saveNavbarOptionSuccessful, saveNavbarOptionFailed } from "../actions";

const option = ({ app }) => app.activeTab;

function* saveNavbarOptionAsync() {
	const navbarOption = yield select(option);
	try {
		yield put(saveNavbarOptionSuccessful());
		yield localStorage.setItem("activeTab", navbarOption);
	} catch (error) {
		yield put(saveNavbarOptionFailed());
		yield localStorage.setItem("activeTab", "homePage");
	}
}

export function* appSaga() {
	yield takeEvery(SAVE_NAVBAR_OPTION, saveNavbarOptionAsync);
}
