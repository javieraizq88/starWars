import React from "react";
import { Link } from "react-router-dom";


const Navbar = props => {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light" id= "navbar">
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/people">People</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/planets">Planets</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/vehicles">Vehicles</Link>
                    </li>
                </ul>
            </div>
        </nav>
        </>
    )
}

export default Navbar;

