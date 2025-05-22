import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { BsMap, BsPinMap, BsPhone, BsEnvelope, BsGlobe } from "react-icons/bs";
import "../styles/Legal.css"

const Legal = () => {
    return (
        <div className="container py-5">
           <h2 className="text-center fw-bold">Mentions légales</h2>
                <div className="blue-bar mx-auto my-3"></div>
                
                <Accordion defaultActiveKey="2" className="mt-4">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Éditeur du site</Accordion.Header>
                            <Accordion.Body>
                                <h2 className="mb-1 fw-bold">John Doe</h2>
                                <p className="mb-1"><BsMap /> 40 rue Laure Diebold<br /><BsPinMap /> 69009 Lyon, France</p>
                                <p className="mb-1"><BsPhone /> 10 20 30 40 50</p>
                                <p className="mb-3"><BsEnvelope /> john.doe@gmail.com</p>
                            </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Hébergeur</Accordion.Header>
                            <Accordion.Body>
                                <h2 className="fw-bold">alwaysdata</h2>
                                <p className="mb-4"><BsMap /> 91 Rue du Faubourg Saint-Honoré, 75008 Paris</p>
                                <p className="mb-4"><BsGlobe /> <a href="www.alwaysdata.com"><small>www.alwaysdata.com</small></a></p>
                            </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Crédit</Accordion.Header>
                            <Accordion.Body>
                                <h2 className="mb-1 fw-bold">Crédits</h2>
                                <p className="mb-2">Ce site a été réalisé par John Doe, étudiant au <a href="https://www.centre-europeen-formation.fr/accueil-eleve/?mrasn=1443374.1794566.qnOzJYI2">Centre Européen de formation</a></p>
                                <p className="mb-2">Les image utilisées sur site sont libres de droits et ont été obtenues sur le site <a href="https://pixabay.com/">Pixabay</a></p>
                                <p className="mb-4">La favicon de ce site a été fournie par <a href="https://www.flaticon.com/free-icons/john-doe">John doe Icons erstellt von Freepik - Flaticon</a></p>
                            </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
        </div>
    )
}

export default Legal