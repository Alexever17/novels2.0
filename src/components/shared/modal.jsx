import React from 'react';
import Button from "./button";

//this gets updates once setState is triggered in app.js
const Modal = ({ showModal, modalContent, toggleModal }) => {
    //if showmodal and modalcontent are there, render the modal
    return showModal && modalContent ? (
        <div className="modal">
        {/* you can click the modal away by tapping outside of it */}
            <div className="modal__outer" onClick={(e) => toggleModal(e)} ></div>
            <div className="modal__inner">
            {/* and also by clicking the closing button duh */}
                <Button
                    classname={"modal__inner__button modal__inner__button--close red"}
                    text={"Close"}
                    onclick={(e) => toggleModal(e)}
                />
                {
                    modalContent.name ? (
                        <h1 className="modal__inner__headline">
                            {modalContent.name}
                        </h1>
                    ) : null
                }
                {
                    modalContent.picSource ? (
                        <div className="modal__inner__image-wrapper">
                            <img src={modalContent.picSource} alt={"Book cover for " + modalContent.name} />
                        </div>
                    ) : null
                }
                {
                    modalContent.ranking ? (
                        <h3 className="modal__inner__ranking">
                            Rating: {modalContent.ranking}/10
                            </h3>
                    ) : null
                }
                {
                    modalContent.url ? (
                        <a href={modalContent.url} target="_blank" rel="noopener noreferrer" style={{textDecoration:"none"}}>
                            <Button
                                classname={"modal__inner__button modal__inner__button--external"}
                                text={"Further Info"}
                            />
                        </a>
                    ) : null
                }
                {
                    modalContent.description ? (
                        <div className="modal__inner__description">
                            <h3>Description:</h3>
                            <p>{modalContent.description}</p>
                        </div>
                    ) : null
                }
            </div>
        </div>
    ) : null
}

export default Modal;