// Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row">
          {/* Colonne 1 : Coordonnées */}
          <div className="col-md-4 mb-4">
            <h5>John Doe</h5>
            <address>
              40 rue Laure Diebold<br />
              69009 Lyon, France<br />
              <a href="tel:+331020304050">10 20 30 40 50</a><br />
              <a href="mailto:john.doe@gmail.com">john.doe@gmail.com</a>
            </address>
            <div className="d-flex gap-3">
                <a href="https://github.com/github-john-doe" target="_blank" rel="noreferrer noopener">
                <FaGithub className="footer-icon"/>
                </a>
                <a href="https://twitter.com/johndoe" target="_blank" rel="noreferrer noopener">
                <FaTwitter className="footer-icon"/>
                </a>
                <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noreferrer noopener">
                <FaLinkedin className="footer-icon"/>
                </a>
              </div>
          </div>

          {/* Colonne 2 : Navigation */}
          <div className="col-md-4 mb-4">
            <h5>Navigation</h5>
            <ul className="list-unstyled">
              <li><Link to="/">Accueil</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/legal">Mentions légales</Link></li>
            </ul>
          </div>

          {/* Colone 3 : Réalisations */}
          <div className="col-md-4 mb-4">
            <h5>Mes dernières réalisations</h5>
            <ul className="list-unstyled">
              <li><Link to="/portfolio">Fresh Food</Link></li>
              <li><Link to="/portfolio">Restaurant Akira</Link></li>
              <li><Link to="/portfolio">Espace bien-être</Link></li>
              <li><Link to="/portfolio">SEO</Link></li>
              <li><Link to="/portfolio">Création d'une API</Link></li>
              <li><Link to="/portfolio">Maquette d'un site</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
