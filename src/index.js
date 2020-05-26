import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import App from "../src/containers/App";
import rootReducer from "./reducers";
import * as serviceWorker from "./serviceWorker";
import "../src/containers/App/app.css";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";

// const loadState = () => {
// 	try {
// 		const serializedState = localStorage.getItem("sessionId");
// 		if (serializedState === null) return undefined;
// 		return serializedState;
// 	} catch (error) {
// 		return undefined;
// 	}
// };

// const saveState = state => {
// 	try {
// 		const serializedState = state.profileDetails.sessionId;
// 		localStorage.setItem("sessionId", serializedState);
// 	} catch (error) {
// 		return undefined;
// 	}
// };

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
	typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
				// Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
		  })
		: compose;

// const persistedState = loadState();

const store = createStore(
	rootReducer,
	{},
	composeEnhancers(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);

// store.subscribe(() => saveState(store.getState()));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
