import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../Redux/Admin/action";
import Button from '@mui/material/Button';

export const Register = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = () => {
    dispatch(registerUser(Name, Email, Password));
    navigate("/login");
  }

  return (
    <>
      <h2>Register</h2>
      <input onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter Name"/><br /><br />
      <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter Email"/><br /><br />
      <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter Password"/><br /><br />
      <Button variant="contained" onClick={handleSubmit}>Submit</Button>&nbsp;&nbsp;
      <Button variant="contained" onClick={() => {
        navigate("/login");
      }}>Login</Button>
    </>
  )
}