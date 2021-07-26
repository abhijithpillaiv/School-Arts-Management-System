import React, {useState } from 'react'
import {Link} from 'react-router-dom'
import Student from './student/allStudent'
import Teachers from './teacher/allTeacher'
import item from './markers.png'
import cat_image from './menu.png'

function mainPage() {
    const [studentCount, setstudentCount] = useState(null)
    const [teacherCount, setteacherCount] = useState(null)

    return (
            <div className="dashboard-content-on"> {/*className="dashboard-content-one"*/}
                <div className="breadcrumbs-area">
                    <h3>Dashboard</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
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
                                        <div className="item-number"><span className="counter" data-num="150000">{studentCount?studentCount:0}</span></div>
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
                                        <div className="item-title">Teachers</div>
                                        <div className="item-number"><span className="counter" data-num="2250">{teacherCount?teacherCount:0}</span></div>
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
                                    <i className="text-blue"><img src={item} alt='item' width='100px' height='100px'></img></i>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="item-content">
                                    <div className="item-title">Items</div>
                                    <div className="item-number">
                                        <span className="counter" data-num="5690">137</span>
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
                                            <span className="counter" data-num="193000">6</span>
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
                                   
                                </div>
                              
                                <div>
                                    <Student home={true} admin={true} setstudentCount={setstudentCount} cat={'null'}></Student>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 col-xl-12 col-12-xxxl">
                        <div className="card dashboard-card-six pd-b-20">
                            <div className="card-body">
                                <div className="heading-layout1 mg-b-17">
                                    <div className="item-title">
                                        <h3>All Teachers</h3>
                                    </div>
                                  
                                </div>
                                <Teachers home={true} setteacherCount={setteacherCount} teacher={true}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default mainPage