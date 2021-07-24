import React from 'react'
import {Link} from 'react-router-dom'

function teacher() {
    return (
        <ul className="nav sub-group-menu">
            <li className="nav-item">
                <Link to="/allTeachers" className="nav-link">
                    <i className="fas fa-angle-right"></i>All Teachers</Link>
            </li>
            <li className="nav-item">
                <Link to="/addTeacher" className="nav-link">
                    <i className="fas fa-angle-right"></i>Add Teacher</Link>
            </li>
        </ul>
    )
}

export default teacher
