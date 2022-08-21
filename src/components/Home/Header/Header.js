import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <NavLink className="navbar-brand" to="/">JIRA</NavLink>
            <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <NavLink 
                            className={({ isActive }) => isActive ? 'nav-link bg-light text-dark' : 'nav-link'} 
                            style={({ isActive }) => isActive ? { fontWeight: 'bold' } : {}} 
                            to="/home">
                                Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink 
                            className={({ isActive }) => isActive ? 'nav-link bg-light text-dark' : 'nav-link'} 
                            style={({ isActive }) => isActive ? { fontWeight: 'bold' } : {}} 
                            to="/about">
                                About
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink 
                            className={({ isActive }) => isActive ? 'nav-link bg-light text-dark' : 'nav-link'} 
                            style={({ isActive }) => isActive ? { fontWeight: 'bold' } : {}} 
                            to="/contact">
                                Contact
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink 
                            className={({ isActive }) => isActive ? 'nav-link bg-light text-dark' : 'nav-link'} 
                            style={({ isActive }) => isActive ? { fontWeight: 'bold' } : {}} 
                            to="/login">
                                Login
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink 
                            className={({ isActive }) => isActive ? 'nav-link bg-light text-dark' : 'nav-link'} 
                            style={({ isActive }) => isActive ? { fontWeight: 'bold' } : {}} 
                            to="/profile">
                                Profile
                        </NavLink>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
}
