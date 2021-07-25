import React from 'react'
import {Link} from 'react-router-dom'
import Student from './student'
import Teacher from './teacher'
import Category from './category'
import Class from './clas'
import  logo from './logo.jpeg'

function side() {
    return (
        <div>
            <div className="sidebar-main sidebar-menu-one sidebar-expand-md sidebar-color">
                <div className="mobile-sidebar-header d-md-none">
                    <div className="header-logo">
                        <Link to='/'><img src={logo}  width='50px' height='50px' alt="logo"/></Link>
                    </div>
                </div>
                <div className="sidebar-menu-content">
                    <ul className="sidebar-menu-content">
                        <ul className="nav nav-sidebar-menu sidebar-toggle-view">
                            <li className="nav-item ">
                                <Link to="/" className="nav-link">
                                    <i className="flaticon-dashboard"></i>
                                    <span>Dashboard</span>
                                </Link>
                            </li>
                            <li className="nav-item sidebar-nav-item">
                                <span  className="nav-link">
                                    <i className="flaticon-classmates"></i>
                                    <span>Students</span>
                                </span>
                                {
                                < Student/>
                            } </li>
                            <li className="nav-item sidebar-nav-item">
                                <span  className="nav-link">
                                    <i className="flaticon-multiple-users-silhouette"></i>
                                    <span>Teachers</span>
                                </span>
                                {
                                < Teacher />
                            } </li>
                            <li className="nav-item sidebar-nav-item">
                                <span className="nav-link">
                                    <i className="flaticon-couple"></i>
                                    <span>Category</span>
                                </span>
                                {
                                < Category  />
                            } </li>
                            <li className="nav-item sidebar-nav-item">
                                <span className="nav-link">
                                    <i className="flaticon-list"></i>
                                    <span>Class</span>
                                </span>
                                {
                                < Class  />
                            } </li>
                             
                        </ul>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default side
