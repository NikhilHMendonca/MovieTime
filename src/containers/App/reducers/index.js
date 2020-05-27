import {
	SAVE_NAVBAR_OPTION,
	SAVE_NAVBAR_OPTION_SUCCESSFUL,
	SAVE_NAVBAR_OPTION_FAILED,
	SHOW_SNACKBAR,
	HIDE_SNACKBAR
} from "../constants";

const initialState = {
	activeTab: "homePage",
	showSnackbar: false,
	snackbarMessage: ""
};

const app = (state = initialState, action) => {
	switch (action.type) {
		case SAVE_NAVBAR_OPTION: {
			return {
				...state,
				activeTab: action.payload
			};
		}
		case SAVE_NAVBAR_OPTION_SUCCESSFUL: {
			return {
				...state
			};
		}
		case SAVE_NAVBAR_OPTION_FAILED: {
			return {
				...state,
				activeTab: "homePage"
			};
		}
		case SHOW_SNACKBAR: {
			return {
				...state,
				showSnackbar: true,
				snackbarMessage: action.payload
			};
		}
		case HIDE_SNACKBAR: {
			return {
				...state,
				showSnackbar: false,
				snackbarMessage: ""
			};
		}
		default: {
			return state;
		}
	}
};

export default app;
