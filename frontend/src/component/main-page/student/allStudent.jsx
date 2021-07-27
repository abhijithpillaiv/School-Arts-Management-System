import React, {useEffect, useState } from 'react'
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

const [state, setstate] = useState(null) 
const [Countcat, setCountcat] = useState(null)

const [progress, setprogress] = useState(true)

useEffect(() => {
    if(props.cat === "cat00"||props.cat === "null"){
    axios.get('/api/student/getStudents/cat00').then((res) => {
        setcat00(res.data);
        setCountcat(res.data.length)
    })}
    if(props.cat === 'cat0'||props.cat === "null"){
    axios.get('/api/student/getStudents/cat0').then((res) => {
        setCountcat(res.data.length)
        setcat0(res.data);
    })}
    if(props.cat === 'cat1'||props.cat === "null"){
    axios.get('/api/student/getStudents/cat1').then((res) => {
        setCountcat(res.data.length)
        setcat1(res.data);
    })}
    if(props.cat === 'cat2'||props.cat === "null"){
    axios.get('/api/student/getStudents/cat2').then((res) => {
         setCountcat(res.data.length)
         setcat2(res.data);
    })}
    if(props.cat === 'cat3'||props.cat === "null"){
    axios.get('/api/student/getStudents/cat3').then((res) => {
         setCountcat(res.data.length)
         setcat3(res.data);
    })}
    if(props.cat === 'cat4'||props.cat === "null"){
    axios.get('/api/student/getStudents/cat4').then((res) => {
        setCountcat(res.data.length)
         setcat4(res.data);
    })}
    
    if(props.teacher === true){
        console.log('countcat is  '+Countcat);
        setstate(Countcat);
    }
    if(props.admin === true){
        try{
            let count = cat0.length+cat00.length+cat1.length+cat2.length+cat3.length+cat4.length;
            setstate(count)
        }catch(err){}
    }
    
    setprogress(false)
}, [props])

const printHandler=()=>{
    window.print();
}

useEffect(() => {
    if(props.home){
        console.log('count is '+state);
        props.setstudentCount(state)
    }
}, [state])

return progress ? <img src={lodr} alt="loader"></img> :(
    <div>
        <div className="dashboard-content-on">
           
               {props.home ? null : <div><div className=" breadcrumbs-area">
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
            </div></div>}
           
            {cat00 ?<Students student={true} setstate={setstate} state={state}   teacher={props.teacher} cat="cat00" title='Category 00' value={cat00}/> :null}
            {cat0 ?<Students  student={true} setstate={setstate} state={state}    teacher={props.teacher} cat="cat0" title='Category 0' value={cat0}/> :null}
            {cat1 ?<Students  student={true} setstate={setstate} state={state}    teacher={props.teacher} cat="cat1" title='Category 1' value={cat1}/> :null}
            {cat2 ?<Students  student={true} setstate={setstate} state={state}    teacher={props.teacher} cat="cat2" title='Category 2' value={cat2}/> :null}
            {cat3 ?<Students  student={true} setstate={setstate} state={state}    teacher={props.teacher} cat="cat3" title='Category 3' value={cat3}/> :null}
            {cat4 ?<Students  student={true} setstate={setstate} state={state}    teacher={props.teacher} cat="cat4" title='Category 4' value={cat4}/> :null}
        </div>
        
    </div>
)
    
}

export default allStudent
