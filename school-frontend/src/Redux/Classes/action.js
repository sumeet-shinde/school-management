import axios from "axios";

export const CLASSES_DATA = "CLASSES_DATA";
export const CLASSES_DATA_LOADING = "CLASSES_DATA_LOADING";
export const CLASSES_DATA_ERROR = "CLASSES_DATA_ERROR";

export const getClassesData = (classes) => ({
  type: CLASSES_DATA,
  payload: classes,
});
export const ClassesDataLoading = () => ({ type: CLASSES_DATA_LOADING });
export const ClassesDataError = () => ({ type: CLASSES_DATA_ERROR });

export const getClassesRequest = () => async (dispatch) => {
  const Name = JSON.parse(localStorage.getItem("Name"));

  if (!Name) {
    return;
  }

  dispatch(ClassesDataLoading());
  axios
    .get(`https://school-backend-server.herokuapp.com/teachers/${Name}`)
    .then(({ data }) => {
      if (data) {
        dispatch(getClassesData(data));
      } else {
        return;
      }
    })
    .catch((err) => {
      dispatch(ClassesDataError());
      console.log(err);
    });
};

export const addClassesRequest =
  (Grade, Section, Subject, ID) => async (dispatch) => {
    const Name = JSON.parse(localStorage.getItem("Name"));

    if (!Grade || !Section || !Subject || !ID) {
      return;
    }

    dispatch(ClassesDataLoading());
    axios
      .post(`https://school-backend-server.herokuapp.com/classes`, {
        grade: Grade,
        section: Section,
        subject: Subject,
        teacherID: ID,
      })
      .then(({ data }) => {
        alert("Class Registered");
      })
      .catch((err) => {
        dispatch(ClassesDataError());
        console.log(err);
      });
  };

export const updateClassesRequest =
  (Grade, Section, Subject, ID) => async (dispatch) => {
    const id = JSON.parse(localStorage.getItem("classID"));

    if (!Grade || !Section || !Subject || !ID) {
      return;
    }

    dispatch(ClassesDataLoading());
    axios
      .patch(`https://school-backend-server.herokuapp.com/classes/${id}`, {
        grade: Grade,
        section: Section,
        subject: Subject,
        teacherID: ID,
      })
      .then(({ data }) => {
        alert("Class Details Upadted");
      })
      .catch((err) => {
        dispatch(ClassesDataError());
        console.log(err);
      });
  };

export const deleteClassesRequest = (id) => async (dispatch) => {
  dispatch(ClassesDataLoading());
  axios
    .delete(`https://school-backend-server.herokuapp.com/classes/${id}`)
    .then(({ data }) => {
      alert("Class Details Deleted");
      dispatch(getClassesRequest());
    })
    .catch((err) => {
      dispatch(ClassesDataError());
      console.log(err);
    });
};
