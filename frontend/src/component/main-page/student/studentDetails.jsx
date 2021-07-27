import React, { useEffect, useState } from 'react'
import {Link,useParams} from 'react-router-dom'
import axios from 'axios'
import a from './a.png'
import slt from './slt.jpg'

function studentDetails() {
    const{id}=useParams()
    const [Details, setDetails] = useState([])
    
    useEffect(() => {
        axios.get('/api/student/studentDetail/'+id).then((res) => {
            setDetails(res.data);
        })
    }, [id])

    const printHandler=()=>{
        window.print();
    }
    
    return (
        <div>
            <div className="breadcrumbs-area">
                <h3>Students</h3>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>Student Details</li>
                </ul>
            </div>
            <div className="card height-auto">
                <div className="card-body">
                    <div className="heading-layout1">
                        <div className="item-title">
                            <h3>About Me</h3>
                        </div>
                    </div>
                    <div className="single-info-details">
                        <div className="item-img">
                        {Details.image !== 'undefined' ? <img width="300px" height="300px" src={"http://localhost:9000/image/"+Details.image}  alt=''/> :<img width="300px" height="300px" src={a}  alt=''/>}
                        </div>
                        <div className="item-content">
                            <div className="header-inline item-header">
                                <h3 className="text-dark-medium font-medium">{Details.name}</h3>
                                {Details.select !=='undefined' ? Details.select === 'true' ?<img width='120px' height='60px' src={slt} alt=''style={{position: 'absolute' ,right: '100px'}}></img>:null:null}
                                <div className="header-elements">
                                    <ul>
                                        <li><button to={{pathname:'/studentEdit/'+id}}><i className="far fa-edit"></i></button></li>
                                        <li></li><li></li>
                                        <li><button to=''><i className="fas fa-print"></i></button></li>
                                        <li></li><li></li>
                                        <li><button onClick={printHandler}><i className="fas fa-download"></i></button></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="info-table table-responsive">
                                <table className="table text-nowrap">
                                    <tbody>
                                        <tr>
                                            <td>Name:</td>
                                            <td className="font-medium text-dark-medium">{Details.name}</td>
                                        </tr>
                                        <tr>
                                            <td>Gender:</td>
                                            <td className="font-medium text-dark-medium">{Details.gender}</td>
                                        </tr>
                                        <tr>
                                            <td>Date Of Birth:</td>
                                            <td className="font-medium text-dark-medium">{Details.dob}</td>
                                        </tr>

                                        <tr>
                                            <td>Admission Num:</td>
                                            <td className="font-medium text-dark-medium">{Details.admnId}</td>
                                        </tr>
                                        <tr>
                                            <td>Category:</td>
                                            <td className="font-medium text-dark-medium">{Details.category}</td>
                                        </tr>
                                        <tr>
                                            <td>Items:</td>
                                            {Details.items?Details.items.map((obj)=>{
                                                return(
                                                  <div key={obj} className="font-medium text-dark-medium">{obj}</div>
                                                )
                                            }):null}
                                            
                                        </tr>
                                        <tr>
                                            <td>className:</td>
                                            <td className="font-medium text-dark-medium">{Details.clas}</td>
                                        </tr>
                                        <tr>
                                            <td>Section:</td>
                                            <td className="font-medium text-dark-medium">{Details.section}</td>
                                        </tr>
                                        <tr>
                                            <td>Roll:</td>
                                            <td className="font-medium text-dark-medium">{Details.roll}</td>
                                        </tr>
                                        <tr>
                                            <td>Phone:</td>
                                            <td className="font-medium text-dark-medium">{Details.phoneNum}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default studentDetails
