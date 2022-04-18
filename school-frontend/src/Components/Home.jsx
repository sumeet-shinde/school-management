import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { deleteTeachersDataRequest, getTeachersDataRequest, getTeachersDataRequestName, getTeachersDataRequestPage } from "../Redux/Teachers/action";
import Button from '@mui/material/Button';
import styled from "styled-components";
import TextField from '@mui/material/TextField';

const Table = styled.table`
  border: 1px solid;
  border-collapse: collapse;
`

export const Home = () => {
  const {teachers} = useSelector((store) => store.teacher);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [Name, setName] = useState("");

  useEffect(() => {
    // dispatch(getTeachersDataRequest());
    handlePage(page);
  }, [page])

  const handelName = (Name) => {
    localStorage.setItem("Name", JSON.stringify(Name));
    navigate("/classes");
  }

  const handlePage = (page) => {
    dispatch(getTeachersDataRequestPage(page));
  }

  const handleSearch = (Name) => {
    dispatch(getTeachersDataRequestName(Name));
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

      <Button onClick={() => {
        setPage(1);
      }} variant="outlined">1</Button><Button onClick={() => {
        setPage(2);
      }} variant="outlined">2</Button><Button onClick={() => {
        setPage(3);
      }} variant="outlined">3</Button><Button onClick={() => {
        setPage(4);
      }} variant="outlined">4</Button><Button onClick={() => {
        setPage(5);
      }} variant="outlined">5</Button><br /><br />

      <TextField size="small" id="outlined-basic" label="Enter Name" variant="outlined" type="text" placeholder="Search By TeacherName" onChange={(e) => {
        setName(e.target.value);
      }}/>&nbsp;&nbsp;
      <Button variant="contained" onClick={() => {
        handleSearch(Name);
      }}>Search</Button> <br /><br />
      
      <Table style={{margin : "auto", width: "300px"}}>
        <thead>
          <tr>
            <th style={{border: "1px solid"}}>Name</th>
            <th style={{border: "1px solid"}}>Gender</th>
            <th style={{border: "1px solid"}}>Age</th>
            <th style={{border: "1px solid"}}>Edit</th>
            <th style={{border: "1px solid"}}>Delete</th>
            <th style={{border: "1px solid"}}>Show Classes</th>
          </tr>
        </thead>

        <tbody>
          {teachers.map((e, id) => {
            return <tr key = {id}>
              <td style={{border: "1px solid"}}>{e.name}</td>
              <td style={{border: "1px solid"}}>{e.gender}</td>
              <td style={{border: "1px solid"}}>{e.age}</td>
              <td style={{border: "1px solid"}}><Button onClick={() => {
                const id = e._id;
                localStorage.setItem("teacherID", JSON.stringify(id));
                navigate("/update-teacher");
              }} variant="outlined">EDIT</Button></td>
              <td style={{border: "1px solid"}} onClick={() => {
                const id = e._id;
                dispatch(deleteTeachersDataRequest(id))
              }}><Button variant="outlined">DELETE</Button></td>
              <td style={{border: "1px solid"}} onClick={() => {
              handelName(e.name)
              }}><Button variant="outlined">SHOW</Button></td>
            </tr>
          })}
        </tbody>

      </Table>
    </>
  )
}