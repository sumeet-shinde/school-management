import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./Admin/reducer";
import { classReducer } from "./Classes/reducer";
import { teacherReducer } from "./Teachers/reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  teacher: teacherReducer,
  class: classReducer,
});

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
