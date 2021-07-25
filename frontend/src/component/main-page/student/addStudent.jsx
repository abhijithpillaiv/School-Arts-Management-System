import React, { useEffect, useState } from 'react'
import {Link,useHistory, useParams} from 'react-router-dom'
import axios from 'axios'
import Item from './studentItem'
import lodr from './ATB3o.gif'
import a from './a.png'

function addStudent() {
    const [Preview, setPreview] = useState(null)
    const [selectcat00, setselectcat00] = useState(false)
    const [selectcat0, setselectcat0] = useState(false)
    const [selectcat1, setselectcat1] = useState(false)
    const [selectcat2, setselectcat2] = useState(false)
    const [selectcat3, setselectcat3] = useState(false)
    const [selectcat4, setselectcat4] = useState(false)

    const [Cat, setCat] = useState(null)
    const [item, setitem] = useState(null)
    const history=useHistory()

    const{cat}= useParams()
    const [cate, setcate] = useState(null)
    const [progress, setprogress] = useState(false)

    const [name, setname] = useState(null)
    const [dob, setdob] = useState(null)
    const [gender, setgender] = useState(null)
    const [roll, setroll] = useState(null)
    const [cls, setcls] = useState(null)
    const [section, setsection] = useState(null)
    const [admnId, setadmnId] = useState(null)
    const [phoneNum, setphoneNum] = useState(null)
    const [imag, setimag] = useState('')

    useEffect(() => {
        if(cat==='null'){setcate(null)}
        else{setcate(cat);setCat(cat)}
    }, [cat])

    useEffect(() => {
        setselectcat00(false)
        setselectcat0(false)
        setselectcat1(false)
        setselectcat2(false)
        setselectcat3(false)
        setselectcat4(false)

        if(Cat === 'cat00'){setselectcat00(true)}
        else if(Cat === 'cat0'){setselectcat0(true)}
        else if(Cat === 'cat1'){setselectcat1(true)}
        else if(Cat === 'cat2'){setselectcat2(true)}
        else if(Cat === 'cat3'){setselectcat3(true)}
        else if(Cat === 'cat4'){setselectcat4(true)}
        else{}
    }, [Cat])




    const submitHandler=(event) =>{ 
        event.preventDefault();
     let formdata = new FormData()
     formdata.append('name',name);
     formdata.append('dob',dob);
     formdata.append('gender',gender);
     formdata.append('roll',roll);
     formdata.append('clas',cls);
     formdata.append('section',section);
     formdata.append('admnId',admnId);
     formdata.append('phoneNum',phoneNum);
     formdata.append('items',item);
     formdata.append('category',Cat);
     formdata.append('image',imag[0]) 
     
     //var myJsonString = JSON.stringify(item);
 
      setprogress(true)
     console.log(formdata);
            axios({
                method: "post",
                url:'/api/student/addStudent',
                data: formdata,
                headers: { "Content-Type": "multipart/form-data" }
              }).then((response)=>{
                     setPreview(null);
                     setimag('')
                     setprogress(false)
                      history.push('/addStudent/'+cate)
                })
    }
    return progress ? <img src={lodr} alt="loader"></img>: 
        <div>
            <div className="breadcrumbs-area">
                <h3>Students</h3>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>Add Student</li>
                </ul>
            </div>

            <div className="card height-auto">
                <div className="card-body">
                    <div className="heading-layout1">
                        <div className="item-title">
                            <h3>Add New Students</h3>
                        </div>
                    </div>
                    <form onSubmit={submitHandler} className="new-added-form">
                        <div className="row">
                            <div className="col-xl-3 col-lg-6 col-12 form-group">
                                <label>Name *</label>
                                <input required name="name"type="text" onChange={(e)=>setname(e.target.value)} className="form-control"/>
                            </div>
                           
                            <div className="col-xl-3 col-lg-6 col-12 form-group">
                                <label>Gender *</label>
                                <select required name="gender" onChange={(e)=>setgender(e.target.value)} className="select2 form-control ">
                                    <option value="">Please Select Gender *</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Others">Others</option>
                                </select>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-12 form-group">
                                <label>Date Of Birth *</label>
                                <input required name="dob"type="text" onChange={(e)=>setdob(e.target.value)} placeholder="dd/mm/yyyy"
                                    className="form-control air-datepicker" data-position='bottom right'/>
                                <i className="far fa-calendar-alt"></i>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-12 form-group">
                                <label>Roll</label>
                                <input required name="roll"type="text" onChange={(e)=>setroll(e.target.value)} placeholder="" className="form-control"/>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-12 form-group">
                                <label>Category *</label>
                               {cate  ?  ( <select  name="category" defaultValue={cate}  className="select2 form-control">
                                    <option value={cate}>{cate}</option>
                                </select>):(<select required name="category" onChange={(e)=>setCat(e.target.value)} className="select2 form-control">
                                    <option value="">Please Select category *</option>
                                    <option value="cat00">cat-00</option>
                                    <option value="cat0">cat-0</option>
                                    <option value="cat1">cat-1</option>
                                    <option value="cat2">cat-2</option>
                                    <option value="cat3">cat-3</option>
                                    <option value="cat4">cat-4</option>
                                </select>)}
                            </div>
                            <div className="col-lg-6 col-12 ">
                            <label className={'pb-3'}>Items *</label>
                            {Cat ? <Item cat={Cat} item={null} setitem={setitem}></Item> : <div>Select Category to show items...</div>}
                            </div>
                            <div className="col-xl-3 col-lg-6 col-12 form-group">
                                <label>Class *</label>
                            
                                {Cat ?<select required name="class" onChange={(e)=>setcls(e.target.value)} className="select2 form-control">
                                  <option value="">Please Select Class *</option>
                                 {selectcat00 ?<option value="lkg">LKG</option>: null} 
                                 {selectcat00 ?<option value="ukg">UKG</option>: null} 
                                 {selectcat0 ?<option value="I">I</option>: null} 
                                 {selectcat0 ? <option value="II">II</option>: null}
                                 {selectcat1 ?<option value="III">III</option>: null}
                                 {selectcat1 ?<option value="IV">IV</option>: null}
                                 {selectcat2 ?<option value="V">V</option>: null}
                                 {selectcat2 ?<option value="VI">VI</option>: null}
                                 {selectcat2 ? <option value="VII">VII</option>: null}
                                 {selectcat3 ?<option value="VIII">VIII</option>: null}
                                 {selectcat3 ?<option value="IX">IX</option>: null}
                                 {selectcat3 ? <option value="X">X</option>: null}
                                 {selectcat4 ?<option value="XI">XI</option>: null}
                                 {selectcat4 ?<option value="XII">XII</option>: null}
                                </select> : <div>Select Category to show class...</div>}
                            </div>
                            <div className="col-xl-3 col-lg-6 col-12 form-group">
                                <label>Section *</label>
                                <select required name="section" onChange={(e)=>setsection(e.target.value)} className="select2 form-control">
                                    <option value="">Please Select Devison *</option>
                                    <option value="A">A</option>
                                    <option value="B">B</option>
                                    <option value="C">C</option>
                                    <option value="D">D</option>
                                    <option value="E">E</option>
                                </select>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-12 form-group">
                                <label>Admission ID</label>
                                <input required onChange={(e)=>setadmnId(e.target.value)}  name="admnId" type="text" placeholder="" className="form-control"/>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-12 form-group">
                                <label>Phone</label>
                                <input onChange={(e)=>setphoneNum(e.target.value)} name="phoneNum"type="text" placeholder="" className="form-control"/>
                            </div>


                            {/* <input type="hidden" {...register('admin_id')} name="admin_id" value=''/>
                            <input type="hidden" {...register('teacher_id')} name="teacher_id" value=''/> */}


                            <div className="col-lg-6 col-12 form-group mg-t-30">
                             {Preview ? <img width="70px" height="70px" src={Preview}  alt=''/> :<img width="70px" height="70px" src={a}  alt=''/>}
                                <label className="text-dark-medium">Upload Student Photo (150px X 150px)</label>
                                <input onChange={(e)=>{setimag(e.target.files);setPreview( URL.createObjectURL(e.target.files[0]))}} type="file" className="form-control-file"/></div>


                            <div className="col-12 form-group mg-t-8">
                                <button type="submit"  className="btn-fill-lg btn-gradient-yellow btn-hover-bluedark">Save</button>
                                <button onClick={()=>history.push('/addStudent/null')} type="reset" className="btn-fill-lg bg-blue-dark btn-hover-yellow">Reset</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </div>
}

export default addStudent
