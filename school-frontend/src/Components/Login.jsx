import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { checkToken } from "../Redux/Admin/action";
import { store } from "../Redux/store";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";

export const Login = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { auth } = useSelector((store) => store.auth);

  const handleSubmit = async () => {
    dispatch(checkToken(Email, Password));
    if (auth) {
      navigate("/");
    } else {
      alert("Press submit button again to authenticate");
    }
  };

  return (
    <>
      <h2>Login</h2>
      <TextField
        label="Enter Email"
        variant="outlined"
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Enter Email"
      />
      <br />
      <br />
      <TextField
        label="Enter Password"
        variant="outlined"
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Enter Password"
      />
      <br />
      <br />
      {/* <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter Email"/><br /><br /> */}
      {/* <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Enter Password"
      />
      <br />
      <br /> */}
      <Button
        variant="contained"
        disabled={!Email && !Password}
        onClick={handleSubmit}
      >
        Submit
      </Button>
      &nbsp;&nbsp;
      <Button
        variant="contained"
        onClick={() => {
          navigate("/register");
        }}
      >
        Register
      </Button>
    </>
  );
};
