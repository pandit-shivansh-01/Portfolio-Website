import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <>

<nav className="navbar navbar-expand-lg fixed-top " data-spy="affix" data-offset-top="0">
        <div className="container">
            <Link className="navbar-brand" href="#" ><img src="/imgs/logo.png" alt=""/></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto align-items-center">
                    <li className="nav-item">
                        <Link className="nav-link" to="#home">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#service">Service</Link>
                    </li>                   
                    <li className="nav-item">
                        <Link className="nav-link" to="#portfolio">Hobbies</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#resume">Resume</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#blog">Blog</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#contact">Contact</Link>
                    </li>
                    
                </ul>
            </div>
        </div>          
    </nav>
    </>
  )
}

export default Header