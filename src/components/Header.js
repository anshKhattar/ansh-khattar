import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <>
            <div className="welcome">
                <h1>Hi there </h1>
                <h3>My name is Ansh</h3>
                <p>Welcome to my website</p>
            </div>
            <div className="navbar">
                <ul className="navbar-list">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/experience">Experience</NavLink></li>
                    <li><NavLink to="/work">Work Samples</NavLink></li>
                    <li><NavLink to="/projects">Projects</NavLink></li>
                    <li><NavLink to="/skills">Skills</NavLink></li>
                    <li><NavLink to="/education">Education</NavLink></li>
                </ul>
            </div>
        </>
    )
}
