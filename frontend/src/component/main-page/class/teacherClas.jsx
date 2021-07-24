import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import TeacherClasSub from './teacherClasSub'
import lodr from './ATB3o.gif'
import {Link} from 'react-router-dom';

function teacherClas() {
    const {cat} = useParams()
    const [clas, setclas] = useState(null)

    useEffect(() => {
        if (cat === 'cat00') {
            setclas(['lkg','ukg'])
        }
        if (cat === 'cat0') {
            setclas(['I','II'])
        }
        if (cat === 'cat1') {
            setclas(['III','IV'])
        }
        if (cat === 'cat2') {
            setclas(['V','VI','VII'])
        }
        if (cat === 'cat3') {
            setclas(['VIII','IX','X'])
        }
        if (cat === 'cat4') {
            setclas(['XI','XII'])
        }
    }, [cat])
    const printHandler=()=>{
        window.print();
    }
    
    return clas ? (
        <div>
            <div className="dashboard-content-on">
                <div className="breadcrumbs-area">
                    <h3>Student
                    </h3>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>All Class</li>
                    </ul>
                </div>
                <div className="breadcrumbs-area" style={{position: 'absolute' ,right: '60px',top:'100px'}}>
                      <button onClick={printHandler}><i  className="fas fa-download"></i></button>
                </div>
                 
            </div>
            {clas.map((obj)=>{return(<TeacherClasSub clas={obj}/>)})}
        </div>
    ):<img src={lodr} alt="loader"></img>
}

export default teacherClas
