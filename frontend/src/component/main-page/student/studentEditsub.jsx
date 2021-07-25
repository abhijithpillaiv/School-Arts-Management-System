import React, { useContext, useState } from 'react'
import {Link,useHistory} from 'react-router-dom'
import axios from 'axios'
import Item from './studentItem'
import lodr from './ATB3o.gif'
import {LoginContext} from '../../context'
import { useEffect } from 'react'
import a from './a.png'


function studentEditsub({preData}) {

    const [Preview, setPreview] = useState(null)
    const [selectcat00, setselectcat00] = useState(false)
    const [selectcat0, setselectcat0] = useState(false)
    const [selectcat1, setselectcat1] = useState(false)
    const [selectcat2, setselectcat2] = useState(false)
    const [selectcat3, setselectcat3] = useState(false)
    const [selectcat4, setselectcat4] = useState(false)

    const {User} = useContext(LoginContext)
       const{_id,name,gender,dob,roll,category,clas,section,admnId,phoneNum,image}=preData
       const [cate, setcate] = useState(null)

       useEffect(() => {
          if(User.previlage === 'teacher'){
              setcate(true)
          }
       }, [preData])



        const [progress, setprogress] = useState(false)
        const [Cat, setCat] = useState(category)
        const [item, setitem] = useState(null)
        const history=useHistory()

        const [Name, setName] = useState(name)
        const [Dob, setDob] = useState(dob)
        const [Gender, setGender] = useState(gender)
        const [Roll, setRoll] = useState(roll)
        const [Clas, setClas] = useState(clas)
        const [Section, setSection] = useState(section)
        const [AdmnId, setAdmnId] = useState(admnId)
        const [PhoneNum, setPhoneNum] = useState(phoneNum)
        const [setImage, setsetImage] = useState('')

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
        
    const submitHandler= () =>{ 
        let formdata = new FormData()
        formdata.append('name',Name);
        formdata.append('dob',Dob);
        formdata.append('gender',Gender);
        formdata.append('roll',Roll);
        formdata.append('clas',Clas);
        formdata.append('section',Section);
        formdata.append('admnId',AdmnId);
        formdata.append('phoneNum',PhoneNum);
        formdata.append('items',item);
        formdata.append('category',Cat)
        formdata.append('_id',_id)
        formdata.append('oldImage',image)
        formdata.append('image',setImage[0])
    
        setprogress(true)
        axios({
            method: "post",
            url: '/api/student/studentEdit',
            data: formdata,
            headers: { "Content-Type": "multipart/form-data" },
          }).then((response)=>{
                setprogress(false)
                     history.goBack()
             })
    }
    return progress ? <img src={lodr}alt="loader" ></img> : (
        <div>
            <div className="breadcrumbs-area">
                <h3>Students</h3>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>Edit Student</li>
                </ul>
            </div>

            <div className="card height-auto">
                <div className="card-body">
                    <div className="heading-layout1">
                        <div className="item-title">
                            <h3>Edit Students</h3>
                        </div>
                        <div className="dropdown">
                            <span className="dropdown-toggle"  role="button" data-toggle="dropdown" aria-expanded="false">...</span>

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
                                <input name="name"type="text" value={Name} onChange={(e)=>setName(e.target.value)}  className="form-control"/>
                            </div>
                           
                            <div className="col-xl-3 col-lg-6 col-12 form-group">
                                <label>Gender *</label>
                                <select name="gender" value={Gender} onChange={(e)=>setGender(e.target.value)}  className="select2 form-control ">
                                    <option value="">Please Select Gender *</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Others">Others</option>
                                </select>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-12 form-group">
                                <label>Date Of Birth *</label>
                                <input name="dob"type="text" value={Dob} onChange={(e)=>setDob(e.target.value)}  placeholder="dd/mm/yyyy"
                                    className="form-control air-datepicker" data-position='bottom right'/>
                                <i className="far fa-calendar-alt"></i>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-12 form-group">
                                <label>Roll</label>
                                <input name="roll"type="text" value={Roll} onChange={(e)=>setRoll(e.target.value)}  placeholder="" className="form-control"/>
                            </div>
                            {cate ? <div className="col-xl-3 col-lg-6 col-12 form-group">
                                <label>Category *</label>
                                <select name="category" defaultValue={Cat} className="select2 form-control">
                                     <option value={Cat}>{Cat}</option>
                                </select>
                            </div> : <div className="col-xl-3 col-lg-6 col-12 form-group">
                                <label>Category *</label>
                                <select name="category" value={Cat} onChange={(e)=>setCat(e.target.value)} className="select2 form-control">
                                    <option value="">Please Select category *</option>
                                    <option value="cat00">cat-00</option>
                                    <option value="cat0">cat-0</option>
                                    <option value="cat1">cat-1</option>
                                    <option value="cat2">cat-2</option>
                                    <option value="cat3">cat-3</option>
                                    <option value="cat4">cat-4</option>
                                </select>
                            </div>}
                            
                            <div className="col-lg-6 col-12 ">
                            <label className={'pb-3'}>Item *</label>
                            {Cat ? <Item cat={Cat} item={null} setitem={setitem}></Item> : <div>Select Category...</div>}
                            </div>
                            <div className="col-xl-3 col-lg-6 col-12 form-group">
                                <label>Class *</label>
                                {Cat ? <select name="class" value={Clas} onChange={(e)=>setClas(e.target.value)}  className="select2 form-control">
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
                                <select name="section" value={Section} onChange={(e)=>setSection(e.target.value)}  className="select2 form-control">
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
                                <input onChange={(e)=>setAdmnId(e.target.value)} value={AdmnId}  name="admnId" type="text" placeholder="" className="form-control"/>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-12 form-group">
                                <label>Phone</label>
                                <input onChange={(e)=>setPhoneNum(e.target.value)} value={PhoneNum}  name="phoneNum"type="text" placeholder="" className="form-control"/>
                            </div>

                            <div className="col-lg-6 col-12 form-group mg-t-30">
                               {Preview ? <img width="70px" height="70px" src={Preview}  alt=''/> :image !=="undefined" ? <img width="70px" height="70px" src={"http://localhost:9000/image/"+image}  alt=''/> :<img width="70px" height="70px" src={a}  alt=''/>}
                                <label className="text-dark-medium">Upload Student Image</label>
                                <input onChange={(e)=>{setsetImage(e.target.files);setPreview( URL.createObjectURL(e.target.files[0]))}}   type="file" className="form-control-file"/>
                            </div>


                            <div className="col-12 form-group mg-t-8">
                                <button  type="submit" className="btn-fill-lg btn-gradient-yellow btn-hover-bluedark">Save</button>
                                <button onClick={()=>history.push('/addStudent')} type="reset" className="btn-fill-lg bg-blue-dark btn-hover-yellow">Reset</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default studentEditsub