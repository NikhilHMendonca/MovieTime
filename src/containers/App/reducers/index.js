import {
	SAVE_NAVBAR_OPTION,
	SAVE_NAVBAR_OPTION_SUCCESSFUL,
	SAVE_NAVBAR_OPTION_FAILED
} from "../constants";

const initialState = {
	activeTab: "homePage"
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
				...state,
			};
		}
		case SAVE_NAVBAR_OPTION_FAILED: {
			return {
				...state,
				activeTab: "homePage"
			};
		}
		default: {
			return state;
		}
	}
};

export default app;
