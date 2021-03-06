import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../Redux/Admin/action";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";

export const Register = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = () => {
    dispatch(registerUser(Name, Email, Password));
    navigate("/login");
  };

  return (
    <>
      <h2>Register</h2>
      <TextField
        label="Enter Name"
        variant="outlined"
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Enter Name"
      />
      <br />
      <br />
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
      {/* <input onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter Name"/><br /><br />
      <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter Email"/><br /><br />
      <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter Password"/><br /><br /> */}
      <Button
        disabled={!Name || !Email || !Password}
        variant="contained"
        onClick={handleSubmit}
      >
        Submit
      </Button>
      &nbsp;&nbsp;
      <Button
        variant="contained"
        onClick={() => {
          navigate("/login");
        }}
      >
        Login
      </Button>
    </>
  );
};
