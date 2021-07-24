import React from 'react'
import {Link} from 'react-router-dom'


function category() {
    
    return (
        <ul className="nav sub-group-menu">
              <li className="nav-item">
                <Link to="/cat/cat00"  className="nav-link">
                    <i className="fas fa-angle-right"></i>cat-00</Link>
            </li>
            <li className="nav-item">
                <Link to="/cat/cat0" className="nav-link">
                    <i className="fas fa-angle-right"></i>cat-0</Link>
            </li>
            <li className="nav-item">
                <Link to="/cat/cat1" className="nav-link">
                    <i className="fas fa-angle-right"></i>cat-1</Link>
            </li>
            <li className="nav-item">
                <Link to="/cat/cat2" className="nav-link">
                    <i className="fas fa-angle-right"></i>cat-2</Link>
            </li>
            <li className="nav-item">
                <Link to="/cat/cat3" className="nav-link">
                    <i className="fas fa-angle-right"></i>cat-3</Link>
            </li>
            <li className="nav-item">
                <Link to="/cat/cat4" className="nav-link">
                    <i className="fas fa-angle-right"></i>cat-4</Link>
            </li>
        </ul>
    )
}

export default category
