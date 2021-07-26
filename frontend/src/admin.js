import React from "react";
import Headder from "./component/headder/headder";
import Sidebar from "./component/sidebar/side";
import MainPage from "./component/main-page/mainPage";
import Fotter from "./component/fotter/fotter";
import AddStudent from "./component/main-page/student/addStudent";
import AllStudents from "./component/main-page/student/allStudent";
import SelectedStudents from './component/main-page/student/selectedStudents'
import StudentDetails from "./component/main-page/student/studentDetails";
import AddTeacher from "./component/main-page/teacher/addTeacher";
import AllTeachers from "./component/main-page/teacher/allTeacher";
import studentEdit from './component/main-page/student/studentEdit';
import Cat from './component/main-page/category/cat'
import Class from './component/main-page/class/cls'
import { Route } from "react-router-dom";

// $(document).ready(function () {
//   $(document).click(function (event) {
//       var clickover = $(event.target);
//       var _opened = $(".navbar-collapse").hasClass("navbar-collapse in");
//       if (_opened === true && !clickover.hasClass("navbar-toggle")) {
//           $("button.navbar-toggle").click();
//       }
//   });
// });

function admin() {
  return (
    <div id="wrapper" className="wrapper bg-ash">
      <Headder  />
      <div className="dashboard-page-one">
        <Sidebar />
        <div className="dashboard-content-one">
          <Route exact component={MainPage} path="/" />
          <Route exact component={AddStudent} path="/addStudent/:cat" />
          <Route  path="/allStudents" ><AllStudents cat={"null"}></AllStudents></Route>
          <Route exact component={SelectedStudents} path="/selectedStudents/:cat" />
          <Route path="/studentDetails/:id">
            <StudentDetails />
          </Route>
          <Route exact component={studentEdit} path="/studentEdit/:id"></Route>
          <Route exact component={AllTeachers} path="/allTeachers" />
          <Route exact component={AddTeacher} path="/addTeacher" />
          <Route exact component={Cat} path='/cat/:cat' />
          <Route exact component={Class} path='/class/:clas' />

          <Fotter />
        </div>
      </div>
    </div>
  );
}

export default admin;
