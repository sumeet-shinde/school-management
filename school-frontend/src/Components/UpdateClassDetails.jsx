import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateClassesRequest } from "../Redux/Classes/action";
import { getTeachersDataRequest } from "../Redux/Teachers/action";
import Button from '@mui/material/Button';

export const UpdateClassDetails = () => {
  const [Grade, setGrade] = useState("");
  const [Section, setSection] = useState("");
  const [Subject, setSubject] = useState("");
  const [ID, setID] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {teachers} = useSelector((store) => store.teacher);

  useEffect(() => {
    dispatch(getTeachersDataRequest());
  }, [])

  const handleSubmit = () => {
    dispatch(updateClassesRequest(Grade, Section, Subject, ID));
  } 

  if(!teachers){
    return <div>Loading</div>
  }

  return (
    <>
      <h2>Update Class Details</h2>
      <Button variant="contained" onClick={() => {
        navigate("/");
      }}>Home</Button><br /><br />
      <input onChange={(e) => setGrade(e.target.value)} type="text" placeholder="Enter Grade"/><br /><br />
      <input type="text" onChange={(e) => setSection(e.target.value)} placeholder="Enter Section"/><br /><br />
      <input type="text" onChange={(e) => setSubject(e.target.value)} placeholder="Enter Subject"/><br /><br />
      <label htmlFor="">Select Teacher:
        <select name="" id="" onChange={(e) => setID(e.target.value)}>
          <option value=""></option>
          {teachers.map((e, id) => {
            return <option key={id} value={e._id}>{e.name}</option>
          })}
        </select>
      </label><br /><br />
      <Button variant="contained" disabled={!Grade || !Section || !Subject || !ID} onClick={handleSubmit}>Submit</Button>
    </>
  )
}