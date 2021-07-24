import React, { useState } from "react";
import Login from "./component/login/login";
import Teacher from './teacher'
import Admin from "./admin.js"
import {useHistory} from 'react-router-dom'
import {LoginContext} from './component/context'


function main() {
  let compo
    const history = useHistory()
    const [User, setUser] = useState({logStatus:false, previlage:'',user:{}})
    if(!User.logStatus){
      compo=<Login/>
    }
    else{
      if(User.previlage ==='admin'){
        compo=<Admin/>
      }
      else if(User.previlage === 'teacher'){
        compo=<Teacher/>
      }
      else{
        history.push('/')
      }
    }
    return (
      <div>
        <LoginContext.Provider value={{User:User,setUser:setUser}}>
        {compo}
        </LoginContext.Provider>
      </div>
    );
}

export default main
