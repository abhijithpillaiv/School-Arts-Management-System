import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import Students from './student/allstudentsSub'
import Teachers from './teacher/allTeacher'
import item from './markers.png'
import cat_image from './menu.png'

function mainPage() {
    const [cat0, setcat0] = useState(null)
    const [cat00, setcat00] = useState(null)
    const [cat1, setcat1] = useState(null)
    const [cat2, setcat2] = useState(null)
    const [cat3, setcat3] = useState(null)
    const [cat4, setcat4] = useState(null)
    const [studentCount, setstudentCount] = useState(null)
    const [teacherCount, setteacherCount] = useState(null)

    useEffect(() => {
        axios.get('/api/student/getStudents/cat00').then((res) => {
            setcat00(res.data);
        })
        axios.get('/api/student/getStudents/cat0').then((res) => {
            setcat0(res.data);
        })
        axios.get('/api/student/getStudents/cat1').then((res) => {
            setcat1(res.data);
        })
        axios.get('/api/student/getStudents/cat2').then((res) => {
             setcat2(res.data);
        })
        axios.get('/api/student/getStudents/cat3').then((res) => {
             setcat3(res.data);
        })
        axios.get('/api/student/getStudents/cat4').then((res) => {
             setcat4(res.data);
        })
        axios.get('/api/student/getStudentCount').then((res) => {
            setstudentCount(res.data);
       })
       axios.get('/api/teacher/getTeacherCount').then((res) => {
            setteacherCount(res.data);
   })
    }, [])

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
                                    {/* <div className="dropdown">
                                        <span className="dropdown-toggle" role="button" data-toggle="dropdown" aria-expanded="false">...</span>

                                        <div className="dropdown-menu dropdown-menu-right">
                                            <Link className="dropdown-item" to=''>
                                                <i className="fas fa-times text-orange-red"></i>Close</Link>
                                            <Link className="dropdown-item" to=''>
                                                <i className="fas fa-cogs text-dark-pastel-green"></i>Edit</Link>
                                            <Link className="dropdown-item" to=''>
                                                <i className="fas fa-redo-alt text-orange-peel"></i>Refresh</Link>
                                        </div>
                                    </div> */}
                                </div>
                                <div>
                                {cat00 ? <Students  title='Category 00' value={cat00}/> :<div>Loading...</div>}
                                {cat0 ? <Students  title='Category 0' value={cat0}/> :<div>Loading...</div>}
                                {cat1 ? <Students  title='Category 1' value={cat1}/> :<div>Loading...</div>}
                                {cat2 ? <Students  title='Category 2' value={cat2}/> :<div>Loading...</div>}
                                {cat3 ? <Students  title='Category 3' value={cat3}/> :<div>Loading...</div>}
                                {cat4 ? <Students  title='Category 4' value={cat4}/> :<div>Loading...</div>}
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
                                    {/* <div className="dropdown">
                                        <span className="dropdown-toggle"  role="button" data-toggle="dropdown" aria-expanded="false">...</span>

                                        <div className="dropdown-menu dropdown-menu-right">
                                            <Link className="dropdown-item" to=''>
                                                <i className="fas fa-times text-orange-red"></i>Close</Link>
                                            <Link className="dropdown-item" to=''>
                                                <i className="fas fa-cogs text-dark-pastel-green"></i>Edit</Link>
                                            <Link className="dropdown-item" to=''>
                                                <i className="fas fa-redo-alt text-orange-peel"></i>Refresh</Link>
                                        </div>
                                    </div> */}
                                </div>
                                <Teachers teacher={true}/>
                                {/* <div className="notice-box-wrap">
                                    <div className="notice-list">
                                        <Teachers teacher={true}/>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default mainPage