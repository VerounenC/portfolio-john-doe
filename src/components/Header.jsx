import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../styles/Header.css";

function Header() {
    return (
        <header className="bg-dark text-light shadow-sm">
            <nav className="navbar navbar-expand-lg navbar-dark navbar">

                <div className="container">
                    <NavLink to="/" className="navbar-brand fw-bold text-uppercase text-light">
                        John Doe
                    </NavLink>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto text-uppercase">
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link text-light">
                                        Accueil
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/services" className="nav-link text-light">
                                        Services
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/portfolio" className="nav-link text-light">
                                        Portfolio
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/contact" className="nav-link text-light">
                                        Contact
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/legal" className="nav-link text-light">
                                        Mention Legales
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;