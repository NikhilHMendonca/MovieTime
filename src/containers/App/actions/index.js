import {
	SAVE_NAVBAR_OPTION,
	SAVE_NAVBAR_OPTION_SUCCESSFUL,
	SAVE_NAVBAR_OPTION_FAILED,
	SHOW_SNACKBAR,
	HIDE_SNACKBAR
} from "../constants";

export const saveNavbarOption = payload => {
	return {
		type: SAVE_NAVBAR_OPTION,
		payload
	};
};

export const saveNavbarOptionSuccessful = payload => {
	return {
		type: SAVE_NAVBAR_OPTION_SUCCESSFUL,
		payload
	};
};

export const saveNavbarOptionFailed = () => {
	return {
		type: SAVE_NAVBAR_OPTION_FAILED
	};
};

export const showSnackbar = payload => {
	return {
		type: SHOW_SNACKBAR,
		payload
	};
};

export const hideSnackbar = () => {
	return {
		type: HIDE_SNACKBAR
	};
};
