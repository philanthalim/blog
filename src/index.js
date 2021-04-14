import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
//import { composeWithDevTools } from "redux-devtools-extension";
import { createStore,} from "redux";
import postReducer from "./redux/reducers/postReducer";
import { Provider } from "react-redux";
//import thunkMiddleware from "redux-thunk";

//const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));
const store = createStore((postReducer));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
