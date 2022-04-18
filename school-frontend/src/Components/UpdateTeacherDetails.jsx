import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateTeachersDataRequest } from "../Redux/Teachers/action";
import Button from '@mui/material/Button';

export const UpdateTeacherDetails = () => {
  const [Name, setName] = useState("");
  const [Gender, setGender] = useState("");
  const [Age, setAge] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = () => {
    dispatch(updateTeachersDataRequest(Name, Gender, Age));
  }

  return (
    <>
      <h2>Update Teacher Data Teacher</h2>
      <Button variant="contained" onClick={() => {
        navigate("/");
      }}>Home</Button><br /><br />
      <input onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter Name"/><br /><br />
      <label htmlFor="">Select Gender:
        <select name="" id="" onChange={(e) => setGender(e.target.value)}>
          <option value=""></option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </label><br /><br />
      <input type="text" onChange={(e) => setAge(e.target.value)} placeholder="Enter Age"/><br /><br />
      <Button disabled={!Name || !Gender || !Age} variant="contained" onClick={handleSubmit}>Submit</Button>
    </>
  )
}