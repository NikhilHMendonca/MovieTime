import {
	SAVE_NAVBAR_OPTION,
	SAVE_NAVBAR_OPTION_SUCCESSFUL,
    SAVE_NAVBAR_OPTION_FAILED
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
