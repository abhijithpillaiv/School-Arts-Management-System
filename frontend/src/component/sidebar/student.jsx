import React from 'react'
import {Link} from 'react-router-dom'

function student() {
    return (
        <ul className="nav sub-group-menu">
             <li className="nav-item">
                <Link to="/selectedStudents/null" className="nav-link">
                    <i className="fas fa-angle-right"></i>Selected Students</Link>
            </li>
            <li className="nav-item">
                <Link to="/allStudents" className="nav-link">
                    <i className="fas fa-angle-right"></i>All Students</Link>
            </li>
            <li className="nav-item">
                <Link to="/addStudent/null" className="nav-link">
                    <i className="fas fa-angle-right"></i>Add Student</Link>
            </li>
        </ul>
    )
}

export default student
