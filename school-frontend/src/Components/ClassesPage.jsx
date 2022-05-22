import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  deleteClassesRequest,
  getClassesRequest,
  updateClassesRequest,
} from "../Redux/Classes/action";
import Button from "@mui/material/Button";
import styled from "styled-components";

const Table = styled.table`
  border: 1px solid;
  border-collapse: collapse;
`;

export const ClassesPage = () => {
  const { classes } = useSelector((store) => store.class);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getClassesRequest());
  }, []);

  const handleEdit = (id) => {
    localStorage.setItem("classID", JSON.stringify(id));
    navigate("");
  };

  const handleDelete = (id) => {
    dispatch(deleteClassesRequest(id));
  };

  if (!classes) {
    return <div>Loading</div>;
  }

  return (
    <>
      <br />
      <Button
        variant="contained"
        onClick={() => {
          navigate("/");
        }}
      >
        Home
      </Button>
      <h4>Total number of classes: {classes.length}</h4>

      <Table style={{ margin: "auto", width: "1000px" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid", padding: "1%" }}>Grade</th>
            <th style={{ border: "1px solid", padding: "1%" }}>Section</th>
            <th style={{ border: "1px solid", padding: "1%" }}>Subject</th>
            <th style={{ border: "1px solid", padding: "1%" }}>Edit</th>
            <th style={{ border: "1px solid", padding: "1%" }}>Delete</th>
          </tr>
        </thead>

        <tbody>
          {classes.map((e, id) => {
            return (
              <tr key={id}>
                <td style={{ border: "1px solid", padding: "1%" }}>
                  {e.grade}
                </td>
                <td style={{ border: "1px solid", padding: "1%" }}>
                  {e.section}
                </td>
                <td style={{ border: "1px solid", padding: "1%" }}>
                  {e.subject}
                </td>
                <td style={{ border: "1px solid", padding: "1%" }}>
                  <Button
                    onClick={() => {
                      const id = e._id;
                      handleEdit(id);
                      navigate("/update-class");
                    }}
                    variant="outlined"
                  >
                    Edit
                  </Button>
                </td>
                <td style={{ border: "1px solid" }}>
                  <Button
                    onClick={() => {
                      const id = e._id;
                      handleDelete(id);
                    }}
                    variant="outlined"
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};
