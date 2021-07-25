import React from "react";
import Headder from "./component/headder/headder";
import MainPage from "./component/main-page/teacherMainPage";
import Fotter from "./component/fotter/fotter";
import AddStudent from "./component/main-page/student/addStudent";
import AllStudents from "./component/main-page/student/allStudent";
import StudentDetails from "./component/main-page/student/studentDetails";
import studentEdit from "./component/main-page/student/studentEdit";
import Cat from './component/main-page/category/cat'
import Class from './component/main-page/class/teacherClas'
import SelectedStudents from './component/main-page/student/selectedStudents'
import { Route} from "react-router-dom";
function teacher() {
    return (
        <div id="wrapper" className="wrapper bg-ash">
        <Headder/>
        <div className="dashboard-page-one">
          <div className="dashboard-content-one">
            <Route exact  path="/" >
              <MainPage />
            </Route>
            <Route exact component={AddStudent} path="/addStudent/:cat" />
            <Route exact component={AllStudents} path="/allStudents" />
            <Route exact  path="/selectedStudents/:cat" >
            <SelectedStudents ></SelectedStudents>
          </Route>
            <Route path="/studentDetails/:id">
            <StudentDetails />
          </Route>
          <Route exact component={studentEdit} path="/studentEdit/:id"></Route>
          <Route exact component={Cat} path='/cat/:cat' />
          <Route exact component={Class} path='/class/:cat' />
  
            <Fotter />
          </div>
        </div>
      </div>
    )
}

export default teacher
