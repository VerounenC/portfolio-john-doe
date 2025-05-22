import React from "react";
import banner from "../assets/img/banner.jpg"
import { FaPaintBrush, FaCode, FaSearch } from "react-icons/fa";
import "../styles/Services.css";

export default function Services() {
    return (
        <div>
            {/* Hero image */}
            <section 
                className="hero-banner"
                style={{
                    backgroundImage: `url(${banner})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "300px"
                }}>
            </section>

            {/* Title */}
            <section className="conatiner text-center my-5">
                <h2 className="fw-bold">Mon offre de services</h2>
                <p className="text-muted">Voici les prestations sur lesquelles je peux intervenir</p>
                <div className="separator-line mx-auto mb-4"></div>
            </section>

            {/* Card */}
            <div className="container-md">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-4 mb-4">
                        <div className="card service-card h-100 text-center p-4">
                            <div className="d-flex justify-content-center mb-3">
                                <FaPaintBrush size={40} className="text-primary mb-3" />
                            </div>
                            <h5 className="fw-bold">UX Design</h5>
                            <p>
                            L'UX Design est une discipline qui consiste à concevoir des produits (sites web, applications mobile, logiciels, objets connectés, etc.) en plaçant l'utilisateur au centre des préoccupant.
                                L'objectif est de rendre l'expérience utilisateur la plus fluid et agréable possible. 
                            </p>
                        </div>
                    </div>

                    <div className="col-12 col-sm-12 col-md-4 mb-4">
                        <div className="card service-card h-100 text-center p-4">
                            <div className="d-flex justify-content-center mb-3">
                                <FaCode size={40} className="text-primary mb-3" />
                            </div>
                            <h5 className="fw-bold">Développement web</h5>
                            <p>
                            Le développement de sites web consiste à créer des sites internet en utilisant des langages de programmation (HTML, CSS, JavaScript, PHP, etc.) 
                            et des frameworks (Bootstrap, React, Angular, etc.) 
                            </p>
                        </div>
                    </div>

                    <div className="col-12 col-sm-12 col-md-4 mb-4">
                        <div className="card service-card h-100 text-center p-4">
                            <div className="d-flex justify-content-center mb-3">
                                <FaSearch size={40} className="text-primary mb-3" />
                            </div>
                            <h5 className="fw-bold">Référencement</h5>
                            <p>
                            Le référencement naturel (SEO) est une technique qui consiste à optimiser un site web pour le faire remonter dans les résultats des moteurs de recherche (Google, Bing, Yahoo, etc.). 
                            L'objectif est d'attirer un maximum de visiteurs qualifiés sur le site. 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}