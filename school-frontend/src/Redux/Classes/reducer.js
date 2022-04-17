import {
  CLASSES_DATA,
  CLASSES_DATA_LOADING,
  CLASSES_DATA_ERROR,
} from "./action";

const initState = {
  classes: [],
  loading: false,
  error: false,
};

export const classReducer = (store = initState, { type, payload }) => {
  switch (type) {
    case CLASSES_DATA:
      return { ...store, classes: payload };

    case CLASSES_DATA_LOADING:
      return { ...store, loading: true };

    case CLASSES_DATA_ERROR:
      return { ...store, error: true };

    default:
      return store;
  }
};
