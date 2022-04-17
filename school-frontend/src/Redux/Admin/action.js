import axios from "axios";

export const CHECK_USER = "CHECK_USER";

export const checkUser = (auth) => ({ type: CHECK_USER, payload: auth });

export const registerUser = (Name, Email, Password) => async (dispatch) => {
  dispatch(checkUser(false));
  if (!Name && !Email && !Password) {
    return;
  }

  axios
    .post("https://school-database-server.herokuapp.com/register", {
      name: Name,
      email: Email,
      password: Password,
    })
    .then(({ data }) => {
      const token = data.token;
      localStorage.setItem("token", JSON.stringify(token));
    })
    .catch((err) => {
      console.log(err);
    });
};

export const checkToken = (Email, Password) => async (dispatch) => {
  let token = JSON.parse(localStorage.getItem("token"));

  if (!token && !Email && !Password) {
    return;
  }

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  axios
    .post(
      "https://school-database-server.herokuapp.com/login",
      {
        email: Email,
        password: Password,
      },
      config
    )
    .then(({ data }) => {
      if (data) {
        dispatch(checkUser(true));
      }
    })
    .catch((err) => {
      dispatch(checkUser(false));
      alert("Plase check your email and password");
      console.log(err);
    });
};
