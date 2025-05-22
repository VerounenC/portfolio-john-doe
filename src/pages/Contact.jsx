import React from "react";
import { BsMap, BsPinMap, BsPhone, BsEnvelope } from "react-icons/bs";
import "../styles/Contact.css";

export default function Contact() {
    return (
        <div>
            {/* Title */}
            <section className="text-center my-5">
                <h2 className="fw-bold">Contact</h2>
                <p className="text-muted">Pour me contacter en cue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.</p>
                <div className="underline mx-auto"></div>
            </section>

            {/* Form + Contact detail */}
            <div className="container mb-5">
                <div className="row shadow rounded p-4 bg-white">
                    {/* Form */}
                    <div className="col-md-6 mb-4">
                        <h5 className="fw-bold border-bottom border-primary pb-2">Formulaire de contact</h5>
                        <form>
                            <input type="text" className="form-control mb-3" placeholder="Votre nom" />
                            <input type="email" className="form-control mb-3" placeholder="Votre adresse email" />
                            <input type="text" className="form-control mb-3" placeholder="Votre numéro de téléphone" />
                            <input type="text" className="form-control mb-3" placeholder="Sujet" />
                            <textarea className="form-control mb-3" rows="5" placeholder="Votre message"></textarea>
                            <button type="submit" className="btn btn-primary">Envoyer</button>
                        </form>
                    </div>

                    {/* Contact detail */}
                    <div className="col-md-6">
                        <h5 className="fw-bold border-bottom border-primary pb-2">Mes coordonnées</h5>
                        <p className="mb-1 fw-bold">John Doe</p>
                        <p className="mb-1"><BsMap /> 40 rue Laure Diebold<br /><BsPinMap /> 69009 Lyon, France</p>
                        <p className="mb-1"><BsPhone /> 10 20 30 40 50</p>
                        <p className="mb-3"><BsEnvelope /> john.doe@gmail.com</p>
                        <div className="ratio ratio-16x9">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5565.2539315082095!2d4.796403976715944!3d45.7786657124015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1747838750573!5m2!1sfr!2sfr"  
                            style={{ border: "0", width: "600", height: "450" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                            title="Adresse John Doe"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}