import React, {useEffect, useState} from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import {Link} from 'react-router-dom';
import Alert from '../../alert'
import axios from 'axios'
import a from '../student/a.png'
import serch from '../../public/images/serch.png'
import lodr from './ATB3o.gif'

function teacherClasSub(props) {
    const [data, setdata] = useState(null)
    let serchList = null;
    const [serchName, setserchName] = useState('')
    const [confirm, setconfirm] = useState({isOpen: false})
    const [progress, setprogress] = useState(false)

    const onDelete=(id,index)=>{
        setconfirm({...confirm, isOpen:false});
        setprogress(true)
            axios.get('/api/student/studentDelete/'+id).then((res)=>{
                    // props.setreloader(!props.reloader)
                    data.splice(index,1)
                    setprogress(false)
                }) 
        
    }
    useEffect(() => {
        axios.get('/api/student/getStudents/class/' + props.clas).then((res) => {
            setdata(res.data)
            setprogress(false)
        })
    }, [props.clas])

    const selectHandler =(id,obj,select)=>{
        setprogress(true)
        axios.get('/api/student/selectStudent/'+id+'/'+select).then((res)=>{
            obj.select = select
            setprogress(false)
        }) 
    }

    return progress ? <img src={lodr} alt="Loading..."></img> : (data ? (<div>
        <div className="card height-auto">
              <div className="card-body">
                  <div className="heading-layout1">
                      <div className="item-title">
                          <h3>{props.clas.toUpperCase()}</h3>
                      </div>
                  </div>
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
                                  <th>
                                      <div className="form-chec">
                                          <label className="form-check-label">Name</label>
                                      </div>
                                  </th>
                                  <th>Roll Num</th>
                                  <th>Gender</th>
                                  <th>Item</th>
                                  <th></th>
                                  <th>Section</th>
                                  <th>Admn Num</th>
                                  <th>Photo</th>
                              </tr>
                          </thead>
                          <tbody>{
                              data.sort((obj,obj2)=>obj.select===obj2.select?obj.name.toLowerCase()>obj2.name.toLowerCase()?1:-1:obj.select==='true'?-1:1)
                              .filter((obj)=>{
                                if(serchName === ''){
                                    serchList = obj
                                }
                                else if(obj.name.toString().toLowerCase().includes(serchName.toString().toLowerCase())){
                                    serchList = obj
                                }
                                else{}
                                return serchList
                            }).map((obj,index) => {
                                  //obj.items ? item = obj.items.split(',') : console.log('no item');
                                  return (
                                    <tr key={obj._id}>
                                    <td> {obj.select !=='undefined' ? obj.select === 'true' ?<i className="fas fa-check-circle"></i>:null:null}</td>
                                     <td>
                                         <div className="form-chec">
                                             {/* <input type="checkbox" className="form-check-input"/> */}
                                             
                                             <label className="form-check-label">{obj.name}</label>
                                         </div>
                                     </td>
                                     <td>{obj.roll}</td>
                                     <td>{obj.gender}</td>

                                     <td>{obj.items ? (obj.items.map((obj)=>{
                                         return(
                                             <div key={obj}>{obj}
                                             <br></br>
                                             </div>
                                             
                                         )
                                     })) : null} </td>
                                     <td></td>
                                     <td>{ obj.section}</td>
                                     <td>{obj.admnId}</td>
                                     <td className="text-center">{obj.image === "undefined" ? <img width="70px" height="70px" src={a}  alt=''/> : <img width="70px" height="70px" src={"http://localhost:9000/image/"+obj.image}  alt=''/> }</td>
                                     <td>
                                   <Dropdown>
                                         <Dropdown.Toggle variant={null}>
                                                 <span className="flaticon-more-button-of-three-dots"></span>
                                        </Dropdown.Toggle>
                                              <Dropdown.Menu className="dropdown-menu dropdown-menu-right">


                                                 <button className="dropdown-item" ><span> <Link to={{pathname:'/studentEdit/'+obj._id}}>
                                                    <i className="fas fa-cogs text-dark-pastel-green"> Edit</i> </Link></span></button>

                                                   
                                                    <button  className="dropdown-item"> <span onClick={()=>{setconfirm({isOpen:true,title:"Confirm Delete",subtitle:"Deleted student data can't be recovered",onConfirm:()=> onDelete(obj._id,index)})}} >
                                                     <i className="fas fa-times text-orange-red"> Delete</i>  </span></button>
                                                   
                                                    <button className="dropdown-item"> <span><Link to={{pathname:'/studentDetails/'+obj._id}}  >
                                                     <i className="fas fa-redo-alt text-orange-peel"> View Profile</i></Link></span></button>

                                                     {obj.select !=='undefined' ?obj.select === 'true'?
                                                     <button onClick={()=>selectHandler(obj._id,obj,"false")} className="dropdown-item"><i className="fas fa-check-circle text-blue-peel" style={{color:'blue'}}> DeSelect</i></button>:
                                                     <button onClick={()=>selectHandler(obj._id,obj,"true")} className="dropdown-item"><i className="fas fa-check-circle text-blue-peel" style={{color:'blue'}}> Select</i></button>:
                                                     <button onClick={()=>selectHandler(obj._id,obj,"true")} className="dropdown-item"><i className="fas fa-check-circle text-blue-peel" style={{color:'blue'}}> Select</i></button>}
                                                     

                                                     
                                             
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
          <Alert confirm={confirm} setconfirm={setconfirm}/>
  </div>) : null)
}
export default teacherClasSub
