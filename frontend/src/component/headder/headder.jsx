import React, { useContext } from 'react'
import {Link} from'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import {LoginContext} from '../context'

function headder() {
    const {User} = useContext(LoginContext)
    var element=''
     var toggler=false;
     var toggler2=false;
    const handler=(e)=>{
        toggler = !toggler
        if (toggler) {
            element = document.getElementById("wrapper");
             element.classList.add("sidebar-collapsed");
          }
          else{
            element = document.getElementById("wrapper");
            element.classList.remove("sidebar-collapsed");
          }
        e.preventDefault();
        
    }
    const handler2=(e)=>{
        toggler = !toggler
        if(toggler){
            element = document.getElementById("wrapper");
            element.classList.add("sidebar-collapsed-mobile");
          }
          else{
            element = document.getElementById("wrapper");
            element.classList.remove("sidebar-collapsed-mobile");
          }
        e.preventDefault();
    }
    const handler3=(e)=>{
        toggler2 = !toggler2
        if(toggler2){
            element = document.getElementById("mobile-navbar");
            element.classList.add("show");
          }
          else{
            element = document.getElementById("mobile-navbar");
            element.classList.remove("show");
          }
        e.preventDefault();
    }
    return (
        <div className="navbar navbar-expand-md header-menu-one bg-light">
        <div className="nav-bar-header-one">
            <div className="header-logo">
                
            </div>
             <div className="toggle-button sidebar-toggle">
                <button type="button" onClick={handler} className="item-link">
                    <span className="btn-icon-wrap">
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                </button>
            </div>
        </div>
        <div className="d-md-none mobile-nav-bar">
           <button className="navbar-toggler pulse-animatio" onClick={handler3} type="button" data-toggle="collapse" data-target="#mobile-navbar" aria-expanded="false">
                <i className="far fa-arrow-alt-circle-down"></i>
            </button>
            <button type="button" onClick={handler2} className="navbar-toggler sidebar-toggle-mobile">
                <i className="fas fa-bars"></i>
            </button>
        </div>
        <div className="header-main-menu collapse navbar-collapse" id="mobile-navbar">
            <ul className="navbar-nav">
                <li className="navbar-item header-search-bar">
                    <div className="input-group stylish-input-group">
                        <span className="input-group-addon">
                            <button type="submit">
                                <span className="flaticon-search" aria-hidden="true"></span>
                            </button>
                        </span>
                        <input type="text" className="form-control" placeholder="Find Something . . ."/>
                    </div>
                </li>
            </ul>
            <ul className="navbar-nav">
                <li className="navbar-item dropdown header-admin">
                    <div className="dropdown-menu-right">
                    <Dropdown>
                        <div className="item-header">
                           <Dropdown.Toggle variant={null}>
                            <h6 className="item-title">{User.user.name}<br></br></h6>
                            <span>{User.previlage}</span>
                            </Dropdown.Toggle>    
                        </div>
                        <Dropdown.Menu className="item-content">
                            <ul className="settings-list">
                            <Dropdown.Item> <li><i className="flaticon-user"></i>My Profile</li></Dropdown.Item>
                            <Dropdown.Item>  <li><i className="flaticon-list"></i>Task</li></Dropdown.Item>
                            <Dropdown.Item>  <li><i className="flaticon-chat-comment-oval-speech-bubble-with-text-lines"></i>Message</li></Dropdown.Item>
                            <Dropdown.Item> <li><i className="flaticon-gear-loading"></i>Account Settings</li></Dropdown.Item>
                            <Dropdown.Item href="https://avsarts.tech"> <li><i className="flaticon-turn-off"></i>Log Out</li></Dropdown.Item>
                            </ul>
                        </Dropdown.Menu>
                    </Dropdown>
                    </div>
                </li>
                <li className="navbar-item dropdown header-message">
                    <span className="navbar-nav-link dropdown-toggle" role="button" data-toggle="dropdown"
                        aria-expanded="false">
                        <i className="far fa-envelope"></i>
                        <div className="item-title d-md-none text-16 mg-l-10">Message</div>
                        <span>0</span>
                    </span>

                    <div className="dropdown-menu dropdown-menu-right">
                        <div className="item-header">
                            <h6 className="item-title">0 Message</h6>
                        </div>
                        <div className="item-content">
                           <h3>Coming soon</h3>
                        </div>
                    </div>
                </li>
                <li className="navbar-item dropdown header-notification">
                    <span className="navbar-nav-link dropdown-toggle" role="button" data-toggle="dropdown"
                        aria-expanded="false">
                        <i className="far fa-bell"></i>
                        <div className="item-title d-md-none text-16 mg-l-10">Notification</div>
                        <span>0</span>
                    </span>

                    <div className="dropdown-menu dropdown-menu-right">
                        <div className="item-header">
                            <h6 className="item-title">0 Notifiacations</h6>
                        </div>
                        <div className="item-content">
                            <h3>Coming Soon</h3>
                        </div>
                    </div>
                </li>
                 <li className="navbar-item dropdown header-language">
                    <span className="navbar-nav-link dropdown-toggle" role="button" 
                    data-toggle="dropdown" aria-expanded="false"><i className="fas fa-globe-americas"></i>EN</span>
                    <div className="dropdown-menu dropdown-menu-right">
                        <Link className="dropdown-item" to='/'>English</Link>
                        <Link className="dropdown-item" to='/'>Spanish</Link>
                        <Link className="dropdown-item" to='/'>Franchis</Link>
                        <Link className="dropdown-item" to='/'>Chiness</Link>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    )
}

export default headder

