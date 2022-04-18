import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import { ClassesPage } from './Components/ClassesPage'
import { Home } from './Components/Home'
import { Login } from './Components/Login'
import { Register } from './Components/Register'
import {AddTeacher} from './Components/AddTeacher'
import { AddClass } from './Components/AddClass'
import { UpdateClassDetails } from './Components/UpdateClassDetails';
import { UpdateTeacherDetails }  from './Components/UpdateTeacherDetails';

function App() {
  const {auth} = useSelector((store) => store.auth);

  const PrivateRoute = ({auth, children}) => {
    return auth ? children : <Navigate to="/login"/>
  }

  return (
    <div className='App'>
      <Routes>
        <Route path={"/"} element={
          <PrivateRoute auth = {auth}>
            <Home />
          </PrivateRoute>
        } />
        <Route path={"/login"} element={<Login/>}/>
        <Route path={"/register"} element={<Register/>}/>
        <Route path={"/classes"} element={<PrivateRoute auth = {auth}>
            <ClassesPage />
          </PrivateRoute>
        }/>
        <Route path={"/add-teacher"} element={<PrivateRoute auth = {auth}>
            <AddTeacher />
          </PrivateRoute>
        }/>
        <Route path={"/add-class"} element={<PrivateRoute auth = {auth}>
            <AddClass />
          </PrivateRoute>
        }/>
        <Route path={"/update-class"} element={<PrivateRoute auth = {auth}>
            <UpdateClassDetails />
          </PrivateRoute>
        }/>
        <Route path={"/update-teacher"} element={<PrivateRoute auth = {auth}>
            <UpdateTeacherDetails />
          </PrivateRoute>
        }/>
      </Routes>
    </div>
  )
}

export default App
