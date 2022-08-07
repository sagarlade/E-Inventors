import React from 'react';
import { NavLink } from 'react-router-dom';
import '../style/respo.css';
function Navbar() {
    return (
        <>
            <div>
                <nav className="navbar navbar-expand-lg py-3">
                    <div className="container-fluid">
                        <NavLink className="navbar-brand" to="#"><img src={require('../assest/thoms.webp')}/></NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav  mb-2 mb-lg-0">
                                <li className="nav-item one">
                                    <NavLink className="nav-link s_1 text-white" to="/">Home</NavLink>
                                </li>
                                <li className="nav-item two">
                                    <NavLink className="nav-link s_1 text-white" to="/about">About</NavLink>
                                </li>
                                <li className="nav-item three">
                                    <NavLink className="nav-link s_1 text-white" to="/service">Service</NavLink>
                                </li>
                                <li className="nav-item four">
                                    <NavLink className="nav-link s_1 text-white" to="/masterclass">Master class</NavLink>
                                </li>
                                
                                <li className="nav-item five">
                                    <NavLink className="nav-link s_1 text-white" to="/contact">Contact</NavLink>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default Navbar;