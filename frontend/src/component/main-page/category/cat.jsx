import React, {useEffect, useState} from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import {Link, useHistory} from 'react-router-dom';
import {useParams} from 'react-router-dom'
import axios from 'axios'
import itemList from '../student/itemList'
import a from '../student/a.png'
import serch from '../../public/images/serch.png'

function cat() {
    
    const [data, setdata] = useState(null)
    const [item, setitem] = useState(null)
    const {cat} = useParams()
    let serchListMain = null;
    let serchList = null;
    const [serchName, setserchName] = useState('')
    const [serchItem, setserchItem] = useState('')
    const history = useHistory()
    const [confirm, setconfirm] = useState({isOpen: false})

    const onDelete = id => {
        setconfirm({
            ...confirm,
            isOpen: false
        });

        history.push('/allStudents', [true])
        axios.get('/api/student/studentDelete/' + id).then((res) => {
            history.push('/allStudents')
        })

    }
    useEffect(() => {
        if (cat === 'cat00') {
            setitem(itemList.cat00.map(a => a.value))
        }
        if (cat === 'cat0') {
            setitem(itemList.cat0.map(a => a.value))
        }
        if (cat === 'cat1') {
            setitem(itemList.cat1.map(a => a.value))
        }
        if (cat === 'cat2') {
            setitem(itemList.cat2.map(a => a.value))
        }
        if (cat === 'cat3') {
            setitem(itemList.cat3.map(a => a.value))
        }
        if (cat === 'cat4') {
            setitem(itemList.cat4.map(a => a.value))
        }

        axios.get('/api/student/getStudents/' + cat).then((res) => {
            setdata(res.data)
        })
    }, [cat])

    const printHandler=()=>{
        window.print();
    }


    return (
        <div>
            <div className="breadcrumbs-area">
                <h3>cat
                </h3>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>{cat}</li>
                </ul>
            </div>
            <div className="breadcrumbs-area" style={{position: 'absolute' ,right: '60px',top:'100px'}}>
                      <button onClick={printHandler}><i  className="fas fa-download"></i></button>
                </div>

            <div className="dashboard-content-on">
                <div className="row gutters-8">
                    <div className="col-9-xxxl col-xl-9 col-lg-9 col-9 form-group">
                        <input type="text" onChange={(e)=>setserchItem(e.target.value)} placeholder="Item..." className="form-control"/>
                    </div>
                    <div className="col-3-xxxl col-xl-3 col-lg-3 col-3 form-group">
                        <button type="submit" className="fw-btn-fill btn-gradient-yellow">
                            <img src={serch}
                                width='30px'
                                height='30px'
                                alt="img"></img>
                        </button>
                    </div>
                </div>
                {
                data ? item.filter((obj)=>{
                    if(serchItem === ''){
                        serchListMain = obj
                    }
                    else if(obj.toString().toLowerCase().includes(serchItem.toString().toLowerCase())){
                        serchListMain = obj
                    }
                    else{}
                    return serchListMain
                }).map((obj) => {
                    return (
                        <div key={obj}>


                            <div className="card height-auto">
                                <div className="card-body">
                                    <div className="heading-layout1">
                                        <div className="item-title text-centre">
                                            <h3>{obj}</h3>
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
                                    <div className="mg-b-20">
                                        <div className="row gutters-8">
                                            <div className="col-10-xxxl col-xl-10 col-lg-10 col-10 form-group">
                                                <input type="text" onChange={(e)=>setserchName(e.target.value)} placeholder="Serch Name ..." className="form-control"/>
                                            </div>
                                            <div className="col-1-xxxl col-xl-2 col-lg-2 col-2 form-group">
                                                <button type="submit" onClick={(e)=>{setserchName(serchName)}} className="fw-btn-fill btn-gradient-yellow">
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
                                                    <th>Roll Num</th>
                                                    <th>Gender</th>
                                                    <th>Category</th>
                                                    <th>class</th>
                                                    <th>Section</th>
                                                    <th>Date Of Birth</th>
                                                    <th>Phone</th>
                                                    <th>Admn Num</th>
                                                    <th>Photo</th>
                                                </tr>
                                            </thead>
                                            <tbody>{
                                                data.filter((obj)=>{
                                                    if(serchName === ''){
                                                        serchList = obj
                                                    }
                                                    else if(obj.name.toString().toLowerCase().includes(serchName.toString().toLowerCase())){
                                                        serchList = obj
                                                    }
                                                    else{}
                                                    return serchList
                                                }).map((obj2) => {
                                                    return obj2.items.includes(obj) ? (
                                                        <tr key={obj2._id}>
                                                            <td>
                                                                 <div className="form-check">
                                                                    <input type="checkbox" className="form-check-input"/>
                                                                    <label className="form-check-label">
                                                                        {obj2.name}</label>
                                                                </div>
                                                            </td>
                                                            <td>{obj2.roll}</td>
                                                            <td>{obj2.gender}</td>
                                                            <td>{obj2.category}</td>
                                                            <td>{obj2.clas}</td>
                                                            <td>{obj2.section}</td>
                                                            <td>{obj2.dob}</td>
                                                            <td>{ obj2.phoneNum}</td>
                                                            <td>{obj2.admnId}</td>
                                                            <td className="text-center"><img width="50px" height="50px" src={a} alt="img"/></td>
                                                            <td>
                                                                <div className="dropdown">
                                                                    <Dropdown>
                                                                        <Dropdown.Toggle variant={null}>
                                                                            <span className="flaticon-more-button-of-three-dots"></span>
                                                                        </Dropdown.Toggle>
                                                                        <Dropdown.Menu className="dropdown-menu dropdown-menu-right">

                                                                            <button className="dropdown-item">
                                                                                <span>
                                                                                    <Link to={
                                                                                        {
                                                                                            pathname: '/studentEdit/' + obj2._id
                                                                                        }
                                                                                    }>
                                                                                        <i className="fas fa-cogs text-dark-pastel-green">Edit</i>
                                                                                    </Link>
                                                                                </span>
                                                                            </button>


                                                                            <button className="dropdown-item">
                                                                                <span onClick={
                                                                                    () => {
                                                                                        setconfirm({
                                                                                            isOpen: true,
                                                                                            title: "Confirm Delete",
                                                                                            subtitle: "Deleted student data can't be recovered",
                                                                                            onConfirm: () => onDelete(obj2._id)
                                                                                        })
                                                                                    }
                                                                                }>
                                                                                    <i className="fas fa-times text-orange-red">Delete</i>
                                                                                </span>
                                                                            </button>

                                                                            <button className="dropdown-item">
                                                                                <span>
                                                                                    <Link to={
                                                                                        {
                                                                                            pathname: '/studentDetails/' + obj2._id
                                                                                        }
                                                                                    }>
                                                                                        <i className="fas fa-redo-alt text-orange-peel">View Profile</i>
                                                                                    </Link>
                                                                                </span>
                                                                            </button>

                                                                        </Dropdown.Menu>

                                                                    </Dropdown>
                                                                </div>
                                                            </td>

                                                        </tr>
                                                    ) : null
                                                })
                                            } </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>

                        </div>
                    )
                }) : <div>Loading...</div>
            } </div>
        </div>
    )

}

export default cat
