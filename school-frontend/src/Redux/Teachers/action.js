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
    .get("https://school-backend-server.herokuapp.com/teachers")
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
      .post("https://school-backend-server.herokuapp.com/teachers", {
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

export const updateTeachersDataRequest =
  (Name, Gender, Age) => async (dispatch) => {
    const id = JSON.parse(localStorage.getItem("teacherID"));
    dispatch(teacherDataLoading());
    axios
      .patch(`https://school-backend-server.herokuapp.com/teachers/${id}`, {
        name: Name,
        gender: Gender,
        age: Age,
      })
      .then(({ data }) => {
        alert("Updated Teacher Details");
      })
      .catch((err) => {
        dispatch(teacherDataError());
        console.log(err);
      });
  };

export const deleteTeachersDataRequest = (id) => async (dispatch) => {
  dispatch(teacherDataLoading());
  axios
    .delete(`https://school-backend-server.herokuapp.com/teachers/${id}`)
    .then(({ data }) => {
      alert("Teacher Details Deleted");
      dispatch(getTeachersDataRequestPage(1));
    })
    .catch((err) => {
      dispatch(teacherDataError());
      console.log(err);
    });
};

export const getTeachersDataRequestPage = (Page) => async (dispatch) => {
  dispatch(teacherDataLoading());
  axios
    .get(
      `https://school-backend-server.herokuapp.com/teachers?page=${Page}&perPage=5`
    )
    .then(({ data }) => {
      const docs = data.docs;
      dispatch(getTeacherData(docs));
    })
    .catch((err) => {
      dispatch(teacherDataError());
      console.log(err);
    });
};

export const getTeachersDataRequestName = (Name) => async (dispatch) => {
  dispatch(teacherDataLoading());
  axios
    .get(`https://school-backend-server.herokuapp.com/teachers/search/${Name}`)
    .then(({ data }) => {
      dispatch(getTeacherData(data));
    })
    .catch((err) => {
      dispatch(teacherDataError());
      console.log(err);
    });
};
