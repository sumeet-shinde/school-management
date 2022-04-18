import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteClassesRequest, getClassesRequest, updateClassesRequest } from "../Redux/Classes/action";
import Button from '@mui/material/Button';
import styled from "styled-components";

const Table = styled.table`
  border: 1px solid;
  border-collapse: collapse;
`

export const ClassesPage = () => {
  const {classes} = useSelector((store) => store.class);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getClassesRequest());
  }, [])

  const handleEdit = (id) => {
    localStorage.setItem("classID", JSON.stringify(id));
    navigate("");
  }

  const handleDelete = (id) => {
    dispatch(deleteClassesRequest(id));
  }

  if(!classes){
    return <div>Loading</div>;
  }

  return (
    <> 
      <br />
      <Button variant="contained" onClick={() => {
        navigate("/");
      }}>Home</Button>
      <h4>Total number of classes: {classes.length}</h4>

      <Table style={{margin : "auto", width: "300px"}}>
        <thead>
          <tr>
            <th style={{border: "1px solid"}}>Grade</th>
            <th style={{border: "1px solid"}}>Section</th>
            <th style={{border: "1px solid"}}>Subject</th>
            <th style={{border: "1px solid"}}>Edit</th>
            <th style={{border: "1px solid"}}>Delete</th>
          </tr>
        </thead>

        <tbody>
          {classes.map((e, id) => {
            return <tr key = {id}>
              <td style={{border: "1px solid"}} >{e.grade}</td>
              <td style={{border: "1px solid"}} >{e.section}</td>
              <td style={{border: "1px solid"}} >{e.subject}</td>
              <td style={{border: "1px solid"}} ><Button onClick={() => {
                const id = e._id;
                handleEdit(id);
                navigate("/update-class");
              }} variant="outlined">Edit</Button></td>
              <td style={{border: "1px solid"}} ><Button onClick={() => {
                const id = e._id;
                handleDelete(id);
              }} variant="outlined">Delete</Button></td>
            </tr>
          })}
        </tbody>

      </Table>
    </>
  )
}