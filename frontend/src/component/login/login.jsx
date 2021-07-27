import React, {useState, useContext} from 'react'
import {LoginContext} from '../context'
import axios from 'axios'
import mainImg from './img/img-01.png'
import './login.css'
import './util.css'
import { Link } from 'react-router-dom'

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEye } from "@fortawesome/free-solid-svg-icons";

function login() {
    // const eye = <FontAwesomeIcon icon={faEye} />;
    const {setUser} =useContext(LoginContext)///changer user remember
    const [Email, setEmail] = useState('')
    const [incorrect, setincorrect] = useState(false)
    const [Password, setPassword] = useState('')

    const handleLogin = (e) => {
        e.preventDefault()
        axios.post('/api',{email :Email,password :Password}).then((resolve)=>{
            if(resolve.data.logStatus){
             setUser(resolve.data);
            }
            else{
                setincorrect(true)
            }

        })
        // Write to='' submit parameters are email, pwd
    }
    const passwordHandler=()=>{
        var x = document.getElementById("myInput");
        if (x.type === "password") {
          x.type = "text";
        } else {
          x.type = "password";
        }
    }
    return (
        <div className="limiter">
            <div className="container-login100">
                <div className="wrap-login100">
                    <div className="login100-pic js-tilt" data-tilt>
                        <img src={mainImg} alt="IMG"/>
                    </div>

                    <form onSubmit={handleLogin}
                        className="login100-form validate-form">
                        <span className="login100-form-title">
                            Member Login
                        </span>

                        {incorrect ?<h5 style={{color: "red"}}>            Incorrect Email or Password</h5> :null} 

                        <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                            <input className="input100" type="text"
                                 value={Email}
                                onChange={
                                    (e) => setEmail(e.target.value)
                                }
                                placeholder="Email"/>
                            <span className="focus-input100"></span>
                            <span className="symbol-input100">
                                <i className="fa fa-envelope" aria-hidden="true"></i>
                            </span>
                        </div>
                        
                        <div className="wrap-input100 validate-input" data-validate="Password is required">
                        
                            <input className="input100"  type="password" id="myInput"
                                value={Password}
                                onChange={
                                    (e) => setPassword(e.target.value)
                                }
                                placeholder="Password"/>
                            <span className="focus-input100"></span>
                            <span className="symbol-input100">
                                 <i className="fa fa-lock" aria-hidden="true"></i>
                                
                            </span>
                        </div>
                        <div style={{position: 'relative',left:"35px",fontWeight:'bold'}}><input onClick={passwordHandler} type="checkbox" className=""/>     Show Password</div>

                        <div className="container-login100-form-btn">
                            <button className="login100-form-btn">
                                Login
                            </button>
                        </div>

                        <div className="text-center p-t-12">
                            <span className="txt1">
                                Forgot
                            </span>
                            <Link className="txt2" to=''>
                                Username / Password?
                            </Link>
                        </div>

                        <div className="text-center p-t-136">
                            <Link className="txt2" to=''>
                                Create your Account
                                <i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default login
