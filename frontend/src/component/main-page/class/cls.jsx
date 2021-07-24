import React, {useEffect, useState} from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import {Link, useHistory} from 'react-router-dom';
import {useParams} from 'react-router-dom'
import Alert from '../../alert'
import axios from 'axios'
import a from '../student/a.png'
import serch from '../../public/images/serch.png'
import lodr from './ATB3o.gif'


function cls() {
    const [data, setdata] = useState(null)
    const {clas} = useParams()
    let serchList = null;
    const [serchName, setserchName] = useState('')
    const history = useHistory()
    const [confirm, setconfirm] = useState({isOpen: false})

    const onDelete = id => {
        setconfirm({
            ...confirm,
            isOpen: false
        });

        history.push('/allStudents', [true])
        axios.get('/api/student/studentDelete/' + id).then((res) => {
            // history.push('/allStudents')
            history.goBack()
        })

    }
    useEffect(() => {
        axios.get('/api/student/getStudents/class/' + clas).then((res) => {
            setdata(res.data)
        })
    }, [clas])

    const printHandler=()=>{
        window.print();
    }


    return data ? (
        <div>
            <div className="dashboard-content-one">
                <div className="breadcrumbs-area">
                    <h3>Student
                    </h3>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>{clas.toUpperCase()}</li>
                    </ul>
                </div>

                <div className="breadcrumbs-area" style={{position: 'absolute' ,right: '60px',top:'100px'}}>
                      <button onClick={printHandler}><i  className="fas fa-download"></i></button>
                </div>
                <div>
                    <div className="card height-auto">
                        <div className="card-body">
                            <div className="heading-layout1">
                                <div className="item-title">
                                    <h3>{clas.toUpperCase()}</h3>
                                </div>
                            </div>
                            <div className="mg-b-20">
                                <div className="row gutters-8">

                                    <div className="col-10-xxxl col-xl-10 col-lg-10 col-10 form-group">
                                        <input onChange={
                                                (e) => {
                                                    setserchName(e.target.value)
                                                }
                                            }
                                            type="text"
                                            placeholder="Name ..."
                                            className="form-control"/>
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
                                        <th>Roll Num</th>
                                        <th>Gender</th>
                                        <th>Item</th>
                                        <th>class</th>
                                        <th>Section</th>
                                        <th>Admn Num</th>
                                        <th>Photo</th>
                                    </tr>
                                </thead>
                                <tbody>{
                                    data.filter((obj) => {
                                        if (serchName === '') {
                                            serchList = obj
                                        } else if (obj.name.toString().toLowerCase().includes(serchName.toString().toLowerCase())) {
                                            serchList = obj
                                        } else {}
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
                                                    obj.roll
                                                }</td>
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
                                                <td className="text-center"><img width="50px" height="50px"
                                                        src={a}
                                                        alt=""/></td>
                                                <td>
                                                    <Dropdown>
                                                        <Dropdown.Toggle variant={null}>
                                                            <span className="flaticon-more-button-of-three-dots"></span>
                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu className="dropdown-menu dropdown-menu-right">

                                                            <button className="dropdown-item">
                                                                <span>
                                                                    <Link to={
                                                                        {
                                                                            pathname: '/studentEdit/' + obj._id
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
                                                                            onConfirm: () => onDelete(obj._id)
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
                                                                            pathname: '/studentDetails/' + obj._id
                                                                        }
                                                                    }>
                                                                        <i className="fas fa-redo-alt text-orange-peel">View Profile</i>
                                                                    </Link>
                                                                </span>
                                                            </button>

                                                        </Dropdown.Menu>

                                                    </Dropdown>
                                                </td>

                                            </tr>
                                        )
                                    })
                                }</tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <Alert confirm={confirm}
                    setconfirm={setconfirm}/>
            </div>
        </div>

    </div>
    ) : <img src={lodr}
            alt="loader"></img>
}
export default cls
