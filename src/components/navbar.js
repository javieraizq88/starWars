import React from "react";
import { Link } from "react-router-dom";

const Navbar = props => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light " id="navbar">
                <div className="collapse navbar-collapse " id="navbarNav">
                    <ul className="navbar-nav" id="navbar-item">
                        <li className="nav-item" >
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/people">People</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/films">Films</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/starships">Starships</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/vehicles">Vehicles</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/species">Species</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/planets">Planets</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;

