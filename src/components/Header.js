import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <>
            <div className="welcome">
                <h1>Hi there </h1>
                <h3>My name is Ansh</h3>
                <p>Find me <a target='_blank' href='https://www.linkedin.com/in/ansh-khattar-b3077918b/'>here</a></p>
            </div>
            <div className="navbar">
                <ul className="navbar-list">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/experience">Experience</NavLink></li>
                    <li><NavLink to="/work">Work Samples</NavLink></li>
                    <li><NavLink to="/projects">Projects</NavLink></li>
                    <li><NavLink to="/skills">Skills</NavLink></li>
                    <li><NavLink to="/education">Education</NavLink></li>
                    <li><NavLink to="/education">Contact</NavLink></li>
                </ul>
            </div>
        </>
    )
}
