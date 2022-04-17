import {
  TEACHER_DATA,
  TEACHER_DATA_LOADING,
  TEACHER_DATA_ERROR,
} from "./action";

const initState = {
  teachers: [],
  loading: false,
  error: false,
};

export const teacherReducer = (store = initState, { type, payload }) => {
  switch (type) {
    case TEACHER_DATA:
      return { ...store, teachers: payload };

    case TEACHER_DATA_LOADING:
      return { ...store, loading: true };

    case TEACHER_DATA_ERROR:
      return { ...store, error: true };

    default:
      return store;
  }
};
