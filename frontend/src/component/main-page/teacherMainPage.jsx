import React, {useState, useContext} from 'react'
import {LoginContext} from '../context'
import Dropdown from 'react-bootstrap/Dropdown';
import {Link} from 'react-router-dom'
import lodr from './student/ATB3o.gif'
import item from './markers.png'
import cat_image from './menu.png'
import Student from './student/allStudent'
import itemList from './student/itemList'
function teacherMainPage() {
    const {User} = useContext(LoginContext)
    const state = User.user.category;
   const [studentCount, setstudentCount] = useState(null)

    console.log(User);

    return state ?  <div>
        <div>
            <div className="breadcrumbs-area">
                <h3>Dashboard</h3>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                </ul>
            </div>

            <div className="row gutters-20">
                <div className="col-xl-3 col-sm-6 col-12">
                    <div className="dashboard-summery-one mg-b-20">
                        <div className="row align-items-center">
                            <div className="col-6">
                                <div className="item-icon bg-light-green ">
                                    <i className="flaticon-classmates text-green"></i>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="item-content">
                                    <div className="item-title">Students</div>
                                    <div className="item-number">
                                        <span className="counter" data-num="150000">
                                            {
                                            studentCount ? studentCount : <p style={{color:'red'}}>error</p>
                                        }</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 col-12">
                    <div className="dashboard-summery-one mg-b-20">
                        <div className="row align-items-center">
                            <div className="col-6">
                                <div className="item-icon bg-light-blue">
                                    <i className="flaticon-multiple-users-silhouette text-blue"></i>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="item-content">
                                    <div className="item-title">Teacher</div>
                                    <div className="item-number">
                                        <span className="counter" data-num="2250">{User.user.name}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 col-12">
                    <div className="dashboard-summery-one mg-b-20">
                        <div className="row align-items-center">
                            <div className="col-6">
                                <div className="item-icon">
                                    <i className=" text-blue"><img src={item} alt='item' width='100px' height='100px'></img></i>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="item-content">
                                    <div className="item-title">Items</div>
                                    <div className="item-number">
                                       {state === 'cat00'? <span className="counter" data-num="5690">{itemList.cat00.length}</span>:null}
                                       {state === 'cat0'? <span className="counter" data-num="5690">{itemList.cat0.length}</span>:null}
                                       {state === 'cat1'? <span className="counter" data-num="5690">{itemList.cat1.length}</span>:null}
                                       {state === 'cat2'? <span className="counter" data-num="5690">{itemList.cat2.length}</span>:null}
                                       {state === 'cat3'? <span className="counter" data-num="5690">{itemList.cat3.length}</span>:null}
                                       {state === 'cat4'? <span className="counter" data-num="5690">{itemList.cat4.length}</span>:null}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-3 col-sm-6 col-12">
                    <div className="dashboard-summery-one mg-b-20">
                        <div className="row align-items-center">
                            <div className="col-6">
                                    <div className="item-icon bg-light-red">
                                        <i className=" text-red"><img src={cat_image} alt='item' width='60px' height='60px'></img></i>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="item-content">
                                        <div className="item-title">Category</div>
                                        <div className="item-number">
                                            <span className="counter" data-num="193000">{state}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>

            <div className="row gutters-20">
                <div className="col-lg-12 col-xl-12 col-12-xxxl">
                    <div className="card dashboard-card-six pd-b-20">
                        <div className="card-body">
                            <div className="heading-layout1 mg-b-17">
                                <div className="item-title">
                                    <h3>All Students</h3>
                                </div>
                                <Dropdown>
                                              <Dropdown.Toggle variant={null}>
                                                      <span className="flaticon-more-button-of-three-dots"></span>
                                             </Dropdown.Toggle>
                                                   <Dropdown.Menu className="dropdown-menu dropdown-menu-right">

                                                      <button className="dropdown-item" ><span> <Link to={{pathname:'/addStudent/' + state}}>
                                                         <i  className="fas fa-cogs text-dark-pastel-green"> Add Student</i> </Link></span></button>
                                                        
                                                         <button className="dropdown-item"> <span><Link to={{pathname:'/cat/'+state}}  >
                                                          <i style={{fontWeight:'bolder'}} className="fas fa-redo-alt text-orange-peel"> View Items</i></Link></span></button>
                                                  
                                                          <button className="dropdown-item"> <span><Link to={{pathname:'/class/'+ state}}  >
                                                          <i style={{fontWeight:'bolder'}} className="fas fa-list-alt text-blue-peel"> View Class</i></Link></span></button>

                                                          <button className="dropdown-item"> <span><Link to={{pathname:'/selectedStudents/'+ state}}  >
                                                          <i style={{fontWeight:'bolder',color:'black'}} className="fas fa-check-circle text-yellow-peel" > Selected Students</i></Link></span></button>
                                                  
                                                  </Dropdown.Menu>
                                                  
                                        </Dropdown>
                            </div>
                           </div>
                           <Student  setstudentCount={()=>setstudentCount} teacher={true}  home={true} cat={state}></Student>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>:<img src={lodr}
        alt="loader"></img>
}

export default teacherMainPage