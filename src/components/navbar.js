import React from "react";
import { Link } from "react-router-dom";

const Navbar = props => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light " id="navbar">
            <a class="navbar-brand" href="/">Star Wars</a>
                <div className="collapse navbar-collapse " id="navbarNav">
                    <ul className="navbar-nav mr-auto border-right" id="navbar-item">
                        {/* <li className="nav-item" >
                            <Link className="nav-link border-left " to="/">Home<span class="sr-only">(current)</span></Link>
                        </li> */}
                        <li className="nav-item">
                            <Link className="nav-link border-left" to="/people">People</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link border-left" to="/films">Films</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link border-left" to="/starships">Starships</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link border-left" to="/vehicles">Vehicles</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link border-left" to="/species">Species</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link border-left" to="/planets">Planets</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;

