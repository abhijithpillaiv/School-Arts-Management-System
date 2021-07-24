import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import Students from './allstudentsSub'
import lodr from './ATB3o.gif'

function allStudent(props) {
    
    const [cat0, setcat0] = useState(null)   
    const [cat00, setcat00] = useState(null)
    const [cat1, setcat1] = useState(null)
    const [cat2, setcat2] = useState(null)
    const [cat3, setcat3] = useState(null)
    const [cat4, setcat4] = useState(null)
    const [dlt, setdlt] = useState(false)

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
        setdlt(false)
    }, [dlt])

    const printHandler=()=>{
        window.print();
    }

  useEffect(() => {
    setdlt(props)
  }, [props])
  

    return dlt ? <img src={lodr} alt="loader"></img> :(
        <div>
            <div className="dashboard-content-on">
               
                    <div className=" breadcrumbs-area">
                    <h3>Student
                    </h3>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>All Students</li>
                    </ul>
                </div>

                <div className="breadcrumbs-area" style={{position: 'absolute' ,right: '60px',top:'100px'}}>
                      <button onClick={printHandler}><i  className="fas fa-download"></i></button>
                </div>
               
                 {cat00 ?<Students  student={true}  cat="cat00" title='Category 00' value={cat00}/> :null}
                {cat0 ?<Students  student={true}  cat="cat0" title='Category 0' value={cat0}/> :null}
                {cat1 ?<Students  student={true}  cat="cat1" title='Category 1' value={cat1}/> :null}
                {cat2 ?<Students  student={true}  cat="cat2" title='Category 2' value={cat2}/> :null}
                {cat3 ?<Students  student={true}  cat="cat3" title='Category 3' value={cat3}/> :null}
                {cat4 ?<Students  student={true}  cat="cat4" title='Category 4' value={cat4}/> :null}
            </div>
            
        </div>
    )
}

export default allStudent
