import { CHECK_USER } from "./action";

const initState = {
  auth: false,
};

export const authReducer = (store = initState, { type, payload }) => {
  switch (type) {
    case CHECK_USER:
      return { ...store, auth: payload };

    default:
      return store;
  }
};
