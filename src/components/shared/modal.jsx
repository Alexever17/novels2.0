import React from 'react';

const Modal = ({ showModal, modalContent, toggleModal }) => {
    return showModal && modalContent ? (
        <div className="modal">
            <div className="modal__outer" onClick={(e) => toggleModal(e)} ></div>
            <div className="modal__inner">
                <button className="modal__inner__button modal__inner__button--close" onClick={(e) => toggleModal(e)}>X Close</button>
                {
                    modalContent.name ? (
                        <div className="modal__inner__headline">
                            {modalContent.name}
                        </div>
                    ) : null
                }
                {
                    modalContent.picSource ? (
                        <div className="modal__inner__image-wrapper">
                            <img src={modalContent.picSource} alt="Book cover" />
                        </div>
                    ) : null
                }
                {
                    modalContent.ranking ? (
                        <h4 className="modal__inner__ranking">
                            Rating: {modalContent.ranking}/10
                            </h4>
                    ) : null
                }
                {
                    modalContent.url ? (
                        <a href={modalContent.url} target="_blank" rel="noopener noreferrer" className="modal__inner__button modal__inner__button--external">Novelupdates.com</a>
                    ) : null
                }
                {
                    modalContent.description ? (
                        <div className="modal__inner__description">
                            <h4>Description:</h4>
                            <p>{modalContent.description}</p>
                        </div>
                    ) : null
                }
            </div>
        </div>
    ) : null
}

export default Modal;