import axios from 'axios'
import React, { useState } from 'react'
import {Link, useHistory} from 'react-router-dom'
import lodr from '../student/ATB3o.gif'

function addTeacher() {
    const [progress, setprogress] = useState(false)
    const [name, setname] = useState(null)
    const [gender, setgender] = useState(null)
    const [category, setcategory] = useState(null)
    const [email, setemail] = useState(null)
    const [phoneNum, setphoneNum] = useState(null)
    
    const history=useHistory();



    const submitHandler= (event) =>{ 
        event.preventDefault();
        let formdata = new FormData()
        formdata.append('phoneNum',phoneNum);
        formdata.append('name',name);
        formdata.append('gender',gender);
        formdata.append('category',category);
        formdata.append('email',email);
        formdata.append('password','teacher');//teacher password
        formdata.append('previlage','teacher');

        setprogress(true)

        axios({
            method: "post",
            url:'/api/teacher/addTeacher',
            data: formdata,
            headers: { "Content-Type": "multipart/form-data" },
          }).then((response)=>{
                setprogress(false)
                history.push('/addTeacher')

             })
    }
    return progress ? <img src={lodr} alt="loader"></img> :(
        <div>
            <div className="breadcrumbs-area">
                <h3>Teacher</h3>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>Add New Teacher</li>
                </ul>
            </div>
            <div className="card height-auto">
                <div className="card-body">
                    <div className="heading-layout1">
                        <div className="item-title">
                            <h3>Add New Teacher</h3>
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
                    </div>
                    <form onSubmit={submitHandler} className="new-added-form">
                        <div className="row">
                            <div className="col-xl-3 col-lg-6 col-12 form-group">
                                <label>Name *</label>
                                <input required type="text" onChange={(e)=>setname(e.target.value)} placeholder="" className="form-control"/>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-12 form-group">
                                <label>Gender *</label>
                                <select onChange={(e)=>setgender(e.target.value)} className="form-control">
                                    <option value="">Please Select Gender *</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Others">Others</option>
                                </select>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-12 form-group">
                                <label>Category *</label>
                                <select required onChange={(e)=>setcategory(e.target.value)} className="form-control">
                                    <option value="">Please Select Category *</option>
                                    <option value="cat00">cat-00</option>
                                    <option value="cat0">cat-0</option>
                                    <option value="cat1">cat-1</option>
                                    <option value="cat2">cat-2</option>
                                    <option value="cat3">cat-3</option>
                                    <option value="cat4">cat-4</option>
                                </select>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-12 form-group">
                                <label>E-Mail</label>
                                <input required name="email" type="email" onChange={(e)=>setemail(e.target.value)} className="form-control"/>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-12 form-group">
                                <label>Phone</label>
                                <input name="phoneNum" type="text" onChange={(e)=>setphoneNum(e.target.value)} className="form-control"/>
                            </div>
                            <div className="col-12 form-group mg-t-8">
                                <button type="submit" className="btn-fill-lg btn-gradient-yellow btn-hover-bluedark">Save</button>
                                <button onClick={()=>history.push('/addTeacher')} type="reset" className="btn-fill-lg bg-blue-dark btn-hover-yellow">Reset</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default addTeacher
