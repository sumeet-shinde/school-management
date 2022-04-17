import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { getTeachersDataRequest } from "../Redux/Teachers/action";
import Button from '@mui/material/Button';
import styled from "styled-components";

const Table = styled.table`
  border: 1px solid;
  border-collapse: collapse;
`

export const Home = () => {
  const {teachers} = useSelector((store) => store.teacher);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTeachersDataRequest());
  }, [])

  const handelName = (Name) => {
    localStorage.setItem("Name", JSON.stringify(Name));
    navigate("/classes");
  }

  if(!teachers){
    return <div>Loading</div>;
  }

  return (
    <>
      <h2>Home</h2>
      <h4>Click on Teacher's Data to get Classes Details</h4>
      <Button variant="contained" onClick={() => {
        navigate("/add-teacher");
      }}>Add Teacher</Button>&nbsp;&nbsp;
      <Button variant="contained" onClick={() => {
        navigate("/add-class");
      }}>Add Class</Button>
      <br /><br />
      
      <Table style={{margin : "auto", width: "300px"}}>
        <thead>
          <tr>
            <th style={{border: "1px solid"}}>Name</th>
            <th style={{border: "1px solid"}}>Gender</th>
            <th style={{border: "1px solid"}}>Age</th>
          </tr>
        </thead>

        <tbody>
          {teachers.map((e, id) => {
            return <tr key = {id} onClick={() => {
              handelName(e.name)
              }}>
              <td style={{border: "1px solid"}}>{e.name}</td>
              <td style={{border: "1px solid"}}>{e.gender}</td>
              <td style={{border: "1px solid"}}>{e.age}</td>
            </tr>
          })}
        </tbody>

      </Table>
    </>
  )
}