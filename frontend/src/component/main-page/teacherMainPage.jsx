import React, {useEffect, useState, useContext} from 'react'
import {LoginContext} from '../context'
import Dropdown from 'react-bootstrap/Dropdown';
import axios from 'axios'
import {Link} from 'react-router-dom'
import Alert from '../alert'
import a from './student/a.png'
import serch from '../public/images/serch.png'
import lodr from './student/ATB3o.gif'
import item from './markers.png'
import cat_image from './menu.png'

function teacherMainPage() {

    let serchList = null;
    const [serchName, setserchName] = useState('')
    const {User} = useContext(LoginContext)
    const [state, setstate] = useState(User.user.category)
    const [studentCount, setstudentCount] = useState(null)
    const [reload, setreload] = useState(false)

    console.log(User);
    const [cat, setcat] = useState(null)

    useEffect(() => {
        setstate(User.user.category)
        axios.get('/api/student/getStudents/'+ state).then((res) => {
            setcat(res.data);
            console.log(cat);
        });
        axios.get('/api/student/getStudentCountcat/'+state).then((res) => {
            setstudentCount(res.data);
        });

    }, [state, reload])

    const [confirm, setconfirm] = useState({isOpen: false})


    const onDelete = id => {
        setconfirm({
            ...confirm,
            isOpen: false
        });
        setreload(true)
        axios.get('/api/student/studentDelete/' + id).then((res) => {
            setcat(null)
            setreload(false)
        })

    }

    return reload ? <img src={lodr}
        alt="loader"></img> : <div>
        {/* <div className="dashboard-content-one ml-1 mr-1 pl-1 pr-1"> */}
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
                                            studentCount ? studentCount : 0
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
                                    <div className="item-title">Teachers</div>
                                    <div className="item-number">
                                        <span className="counter" data-num="2250">1</span>
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
                                        <span className="counter" data-num="5690">14</span>
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
                                            <span className="counter" data-num="193000">1</span>
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
                                                  
                                                  </Dropdown.Menu>
                                                  
                                        </Dropdown>
                            </div>
                            {
                            cat ? <div>
                                <div className="mg-b-20">
                                    <div className="row gutters-8">
                                        <div className="col-10-xxxl col-xl-10 col-lg-10 col-10 form-group">
                                            <input type="text" onChange={(e)=>{setserchName(e.target.value)}} placeholder="Serch by Name ..." className="form-control"/>
                                        </div>
                                       
                                        <div className="col-2-xxxl col-xl-2 col-lg-2 col-2 form-group">
                                            <button className="fw-btn-fill btn-gradient-yellow">
                                                <img src={serch}
                                                    width='30px'
                                                    height='30px'
                                                    alt="img"></img>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="table-responsive">
                                    <table className="table display data-table text-nowrap">
                                        <thead>
                                            <tr>
                                                <th>
                                                    <div className="form-check">
                                                        <input type="checkbox" className="form-check-input checkAll"/>
                                                        <label className="form-check-label">Name</label>
                                                    </div>
                                                </th>
                                                <th>Gender</th>
                                                <th>Item</th>
                                                <th>class</th>
                                                <th>Section</th>
                                                <th>Admn Num</th>
                                                <th>Photo</th>
                                            </tr>
                                        </thead>
                                        <tbody>{
                                            cat.filter((obj)=>{
                                                if(serchName === ''){
                                                    serchList = obj
                                                }
                                                else if(obj.name.toString().toLowerCase().includes(serchName.toString().toLowerCase())){
                                                    serchList = obj
                                                }
                                                else{}
                                                return serchList
                                            }).map((obj) => { // obj.items ? item = obj.items.split(',') : console.log('no item');
                                                return (
                                                    <tr key={
                                                        obj._id
                                                    }>
                                                        <td>
                                                            <div className="form-check">
                                                                <input type="checkbox" className="form-check-input"/>
                                                                <label className="form-check-label">
                                                                    {
                                                                    obj.name
                                                                }</label>
                                                            </div>
                                                        </td>
                                                        <td>{
                                                            obj.gender
                                                        }</td>

                                                        <td>{
                                                            obj.items ? (obj.items.map((obj) => {
                                                                return (
                                                                    <div key={obj}>
                                                                        {obj}
                                                                        <br></br>
                                                                    </div>

                                                                )
                                                            })) : null
                                                        } </td>

                                                        <td>{
                                                            obj.clas
                                                        }</td>

                                                        <td>{
                                                            obj.section
                                                        }</td>
                                                        <td>{
                                                            obj.admnId
                                                        }</td>
                                                        <td className="text-center">{obj.image !=="undefined" ? <img width="70px" height="70px" src={"http://localhost:9000/image/"+obj.image}  alt=''/> :<img width="70px" height="70px" src={a}  alt=''/>}</td>
                                                        <td>
                                                            <Dropdown>
                                                                <Dropdown.Toggle variant={null}>
                                                                    <span className="flaticon-more-button-of-three-dots"></span>
                                                                </Dropdown.Toggle>
                                                                <Dropdown.Menu className="dropdown-menu dropdown-menu-right">

                                                           <button className="dropdown-item" ><span> <Link to={{pathname:'/studentEdit/'+obj._id}}>
                                                           <i className="fas fa-cogs text-dark-pastel-green">Edit</i> </Link></span></button>

                                                        
                                                            <button  className="dropdown-item"> <span onClick={()=>{setconfirm({isOpen:true,title:"Confirm Delete",subtitle:"Deleted student data can't be recovered",onConfirm:()=> onDelete(obj._id)})}} >
                                                            <i className="fas fa-times text-orange-red">Delete</i>  </span></button>
                                                        
                                                           <button className="dropdown-item"> <span><Link to={{pathname:'/studentDetails/'+obj._id}}  >
                                                           <i className="fas fa-redo-alt text-orange-peel">View Profile</i></Link></span></button>
                                                  
                                                           </Dropdown.Menu>

                                                            </Dropdown>
                                                        </td>

                                                    </tr>
                                                )
                                            })
                                        }</tbody>
                                    </table>
                                </div>
                                <Alert confirm={confirm}
                                    setconfirm={setconfirm}/>
                            </div> : <div>Loading...</div>
                        } </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default teacherMainPage
