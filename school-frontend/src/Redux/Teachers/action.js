import axios from "axios";

export const TEACHER_DATA = "TEACHER_DATA";
export const TEACHER_DATA_LOADING = "TEACHER_DATA_LOADING";
export const TEACHER_DATA_ERROR = "TEACHER_DATA_ERROR";

export const getTeacherData = (teachers) => ({
  type: TEACHER_DATA,
  payload: teachers,
});
export const teacherDataLoading = () => ({ type: TEACHER_DATA_LOADING });
export const teacherDataError = () => ({ type: TEACHER_DATA_ERROR });

export const getTeachersDataRequest = () => async (dispatch) => {
  dispatch(teacherDataLoading());
  axios
    .get("https://school-database-server.herokuapp.com/teachers")
    .then(({ data }) => {
      const docs = data.docs;
      dispatch(getTeacherData(docs));
    })
    .catch((err) => {
      dispatch(teacherDataError());
      console.log(err);
    });
};

export const addTeachersDataRequest =
  (Name, Gender, Age) => async (dispatch) => {
    dispatch(teacherDataLoading());
    axios
      .post("https://school-database-server.herokuapp.com/teachers", {
        name: Name,
        gender: Gender,
        age: Age,
      })
      .then(({ data }) => {
        const docs = data.docs;
        alert("New Teacher Added");
      })
      .catch((err) => {
        dispatch(teacherDataError());
        console.log(err);
      });
  };
