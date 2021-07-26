import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Dropdown from 'react-bootstrap/Dropdown';
import {Link} from 'react-router-dom'
import Alert from '../../alert'
import lodr from '../student/ATB3o.gif'
import serch from './serch.png'

function allTeacher(props) {
    let serchList = null;
    const [teacher, setteacher] = useState(null)
    const [confirm, setconfirm] = useState({isOpen:false})
    const [serchName, setserchName] = useState('')
    const [progress, setprogress] = useState(false)
    const [reloader, setreloader] = useState(false)

    const onDelete=id=>{
        setconfirm({...confirm, isOpen:false});
        setprogress(true)
            axios.get('/api/teacher/teacherDelete/'+id).then((res)=>{
                setreloader(!reloader)
            }) 
        
    }

    useEffect(() => {
        axios.get('/api/teacher/allTeacher').then((res) => {
            setteacher(res.data);
        })
        if(props.home === true){
            axios.get('/api/teacher/getTeacherCount').then((res) => {
                props.setteacherCount(res.data);
            })
        }
        setprogress(false)
    }, [reloader])
    return progress ? <img src={lodr} alt="loader"></img> :(
        <div>
            {teacher ? <div>
                <div className="breadcrumbs-area">
                {props.teacher ? null : <h3>Teacher</h3>}
               {props.teacher ? null :<ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>All Teachers</li>
                </ul>}
            </div>
            <div className="card height-auto">
                <div className="card-body">
                {props.teacher ? null : <div className="heading-layout1">
                        <div className="item-title">
                            <h3>All Teachers Data</h3>
                        </div>
                        <div className="dropdown">
                            <span className="dropdown-toggle" role="button" data-toggle="dropdown" aria-expanded="false">...</span>

                            <div className="dropdown-menu dropdown-menu-right">
                                <Link className="dropdown-item" to=''>
                                    <i className="fas fa-times text-orange-red"></i>Close</Link>
                                <Link className="dropdown-item" to=''>
                                    <i className="fas fa-cogs text-dark-pastel-green"></i>Edit</Link>
                                <Link className="dropdown-item" to=''>
                                    <i className="fas fa-redo-alt text-orange-peel"></i>Refresh</Link>
                            </div>
                        </div>
                    </div>}
                    <div  className="mg-b-20">
                      <div className="row gutters-8">
                      <div className="col-10-xxxl col-xl-10 col-lg-10 col-10 form-group">
                              <input onChange={(e)=>{setserchName(e.target.value)}} type="text" placeholder="Name ..." className="form-control"/>
                          </div>
                          <div className="col-2-xxxl col-xl-2 col-lg-2 col-2 form-group">
                              <button  className="fw-btn-fill btn-gradient-yellow"><img src={serch}  width='30px' height='30px' alt="img"></img></button>
                          </div>
                      </div>
                  </div>
                   
                    <div className="table-responsive">
                        <table className="table display data-table text-nowrap">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Gender</th>
                                    <th>Category</th>
                                    <th>Phone</th>
                                    <th>E-mail</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                 teacher.filter((obj)=>{
                                    if(serchName === ''){
                                        serchList = obj
                                    }
                                    else if(obj.name.toString().toLowerCase().includes(serchName.toString().toLowerCase())){
                                        serchList = obj
                                    }
                                    else{}
                                    return serchList
                                }).map((obj)=>{
                                     return(
                                        <tr key={obj._id}>
                                        <td></td>
                                        <td>{obj.name}</td>
                                        <td>{obj.gender}</td>
                                        <td>{obj.category}</td>
                                        <td>{obj.phoneNum}</td>
                                        <td>{obj.email}</td>
                                        <td>
                                            <Dropdown>
                                              <Dropdown.Toggle variant={null}>
                                                      <span className="flaticon-more-button-of-three-dots"></span>
                                             </Dropdown.Toggle>
                                                   <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                                                          {/* <Dropdown.Item  className="dropdown-item" >
                                                          <i className="fas fa-cogs text-dark-pastel-green">Edit</i></Dropdown.Item>
                                                          <Dropdown.Item onClick={()=>{setconfirm({isOpen:true,title:"Confirm Delete",subtitle:"Deleted teacher data can't be recovered",onConfirm:()=> onDelete(obj._id)})}} className="dropdown-item">
                                                        <i className="fas fa-times text-orange-red">Delete</i></Dropdown.Item>
                                                          <Dropdown.Item className="dropdown-item" >
                                                          <i className="fas fa-redo-alt text-orange-peel">View Profile</i></Dropdown.Item> */}

                                                        <button  className="dropdown-item" >
                                                          <i className="fas fa-cogs text-dark-pastel-green">Edit</i></button>
                                                          <button className="dropdown-item" onClick={()=>{setconfirm({isOpen:true,title:"Confirm Delete",subtitle:"Deleted teacher data can't be recovered",onConfirm:()=> onDelete(obj._id)})}} >
                                                        <i className="fas fa-times text-orange-red">Delete</i></button>
                                                          <button className="dropdown-item" >
                                                          <i className="fas fa-redo-alt text-orange-peel">View Profile</i></button>
                                                  </Dropdown.Menu>
                                                  
                                        </Dropdown>
                                        </td>
                                    </tr>
                                     )
                                    
                                    })
                                }
                               

                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
            <Alert confirm={confirm} setconfirm={setconfirm}/>
            </div> : <div>Loading...</div>}
           
        </div>
    )
}

export default allTeacher
