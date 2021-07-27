import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link, useParams} from 'react-router-dom'
import Students from './allstudentsSub'
import lodr from './ATB3o.gif'

function selectedStudents(props) {
    const {cat} = useParams()
    const [cat0, setcat0] = useState(null)   
    const [cat00, setcat00] = useState(null)
    const [cat1, setcat1] = useState(null)
    const [cat2, setcat2] = useState(null)
    const [cat3, setcat3] = useState(null)
    const [cat4, setcat4] = useState(null)
    const [progress, setprogress] = useState(true)

    useEffect(() => {
        if(cat === "cat00"||cat === "null"){
        axios.get('/api/student/getSelectedStudents/cat00').then((res) => {
            setcat00(res.data);
        })}
        if(cat === 'cat0'||cat === "null"){
        axios.get('/api/student/getSelectedStudents/cat0').then((res) => {
            setcat0(res.data);
        })}
        if(cat === 'cat1'||cat === "null"){
        axios.get('/api/student/getSelectedStudents/cat1').then((res) => {
            setcat1(res.data);
        })}
        if(cat === 'cat2'||cat === "null"){
        axios.get('/api/student/getSelectedStudents/cat2').then((res) => {
             setcat2(res.data);
        })}
        if(cat === 'cat3'||cat === "null"){
        axios.get('/api/student/getSelectedStudents/cat3').then((res) => {
             setcat3(res.data);
        })}
        if(cat === 'cat4'||cat === "null"){
        axios.get('/api/student/getSelectedStudents/cat4').then((res) => {
             setcat4(res.data);
        })}
        setprogress(false)
    }, [cat])

    const printHandler=()=>{
        window.print();
    }

  

    return progress ? <img src={lodr} alt="loader"></img> :
        <div>
            <div className="dashboard-content-on">
               
                    <div className=" breadcrumbs-area">
                    <h3>Student
                    </h3>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>Selected Students</li>
                    </ul>
                </div>

                <div className="breadcrumbs-area" style={{position: 'absolute' ,right: '60px',top:'100px'}}>
                      <button onClick={printHandler}><i  className="fas fa-download"></i></button>
                </div>
               
                {cat00 ?<Students selectedPage={true} student={true}     cat="cat00" title='Category 00' value={cat00}/> :null}
            {cat0 ?<Students  selectedPage={true} student={true}   cat="cat0" title='Category 0' value={cat0}/> :null}
            {cat1 ?<Students  selectedPage={true} student={true}   cat="cat1" title='Category 1' value={cat1}/> :null}
            {cat2 ?<Students  selectedPage={true} student={true}   cat="cat2" title='Category 2' value={cat2}/> :null}
            {cat3 ?<Students  selectedPage={true} student={true}   cat="cat3" title='Category 3' value={cat3}/> :null}
            {cat4 ?<Students  selectedPage={true} student={true}   cat="cat4" title='Category 4' value={cat4}/> :null}
            </div>
            
        </div>
    
    }
    


export default selectedStudents
