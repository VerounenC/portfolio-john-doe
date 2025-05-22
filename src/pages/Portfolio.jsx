import React from "react";
import banner from "../assets/img/banner.jpg";
import "../styles/Portfolio.css";

export default function Portfolio() {
    const projects = [
        {
            title: "Fresh Food",
            description: "Site de vente de produits frais en ligne",
            tech: "Site réalisé avec PHP et MySQL",
            img: require("../assets/img/portfolio/fresh-food.jpg"),
            url: "#"
        },
        {
            title: "Restaurant Akira",
            description: "Site de vente de produits frais en ligne",
            tech: "Site réalisé avec WordPress",
            img: require("../assets/img/portfolio/restaurant-japonais.jpg"),
            url: "#"
        },
        {
            title: "Espace bien-être",
            description: "Site vitrine pour un centre de relaxation et de soins naturels",
            tech: "Site réalisé avec LARAVEL",
            img: require("../assets/img/portfolio/espace-bien-etre.jpg"),
            url: "#"
        },
        {
            title: "SEO",
            description: "Amélioration du référencement d’un site e-commerce",
            tech: "Utilisation des outils SEO",
            img: require("../assets/img/portfolio/seo.jpg"),
            url: "#"
        },
        {
            title: "Création d'une API",
            description: "Création d'une API RESTFUL publique",
            tech: "PHP - SYMFONY",
            img: require("../assets/img/portfolio/coder.jpg"),
            url: "#"
        },
        {
            title: "Maquette d’un site web",
            description: "Création d’un prototype d’un site",
            tech: "Réalisé avec FIGMA",
            img: require("../assets/img/portfolio/screens.jpg"),
            url: "#"
        },
    ];

    return (
        <div>
            {/* Hero Banner */}
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
            <section className="container text-center my-5">
                <h2 className="fw-bold">Portfolio</h2>
                <p className="text-muted">Voici quelques-unes de mes réalisation.</p>
                <div className="blue-line mx-auto -my-4"></div>
            </section>

            {/* Cards */} 
            <section className="container mb-5">
                <div className="row">
                    {projects.map((project, index) => (
                        <div key={index} className="col-lg-4 col-md-6 col-12 mb-4">
                            <div className="card h-100 shadow-sm">
                                <img src={project.img} className="card-img-top" alt={project.title} />
                                <div className="card-body text-center">
                                    <h5 className="card-title fw-bold">{project.title}</h5>
                                    <p className="card-text">{project.description}</p>
                                    <a href={project.url} className="btn btn-primary">Voir le site</a>
                                </div>
                                <div className="card-footer text-center text-muted small">
                                    {project.tech}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}