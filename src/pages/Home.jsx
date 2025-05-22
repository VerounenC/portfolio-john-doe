import React, { useEffect, useState } from "react";
import heroImage from "../assets/img/hero-bg.jpg"
import profilImage from "../assets/img/john-doe-about.jpg"
import "../styles/Home.css"

export default function Home() {
    const [githubData, setGithubData] = useState(null);

    useEffect(() => {
        fetch("https://api.github.com/users/github-john-doe")
        .then(response => response.json())
        .then(data => setGithubData(data))
        .catch(error => console.error("Erreur Github :", error));
    }, []);

    return (
        <div>
            {/* Hero */}
            <section className="hero d-flex flex-column justify-content-center align-items-center text-white text-center"
            style={{ backgroundImage: `url(${heroImage})`}}
            >
                <h1>Bonjour, je suis John Doe</h1>
                <h2>Développeur web full stack</h2>
                <button className="btn btn-danger mt-4" data-bs-toggle="modal" data-bs-target="#githubModal">
                    En savoir plus
                </button>
            </section>

            
            <section className="container my-5 shadow bg-white rounded">

                {/* Présentation */}
                
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <div className="p-4">
                            <h3 className="mb-4 section-title">À propos de moi</h3>
                            <div className="title-line"></div>

                            <div className="row align-items-center">
                                <div className="d-flex align-items-center">
                                    <img
                                        src={profilImage}
                                        alt="John Doe"
                                        className="img-fluid shadow"
                                    />
                                </div>

                                 <p>
                                    Je suis un développeur web passioné par la création dínterfaces modernes et accessibles.
                                    Actuellement en formation au CEF, je recherche une alternance pour continuer à évoluer dans ce domain.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Compétences */}
                    <div className="col-md-6 mb-4">
                        <div className="p-4">
                            <h3 className="mb-4 section-title">Compétences</h3>
                            <div className="title-line"></div>
                            
                            <div className="mb-3">
                                <label>HTML / CSS</label>
                                <div className="progress">
                                    <div className="progress-bar bg-success" style={{ width: "90%" }}>90%</div>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label>JavaScript</label>
                                <div className="progress">
                                    <div className="progress-bar bg-info" style={{ width: "80%" }}>80%</div>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label>React</label>
                                <div className="progress">
                                    <div className="progress-bar bg-warning text-dark" style={{ width: "75%" }}>75%</div>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label>Git / GitHub</label>
                                <div className="progress">
                                    <div className="progress-bar bg-dark" style={{ width: "70%" }}>70%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                
            </section>

            {/* Modale GitHub */}
            <div className="modal fade" id="githubModal" tabIndex="-1" aria-labelledby="githubModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="githubModalLabel">Profil GitHub</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Fermer" />
                        </div>
                        <div className="modal-body">
                            {githubData ? (
                                <div className="text-center">
                                    <img 
                                        src={githubData.avatar_url}
                                        alt="Avatar GitHub"
                                        className="img-fluid rounded-circle mb-3"
                                        width="100"
                                    />
                                    <h6>{githubData.name || githubData.login}</h6>
                                    <p>{githubData.bio}</p>
                                    <p>
                                        <a href={githubData.html_url} target="_blank" rel="noopener noreferrer">
                                            Voir le profil
                                        </a>
                                    </p>
                                </div>
                            ) : (
                                <p>Chargement des données GitHub...</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}