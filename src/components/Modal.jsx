import React from 'react'

function Modal({ isOpen, rating, handleCloseModal }) {
    if (!isOpen) return
    return (
        <div className="modal-overlay">
            <div className="modal">
                <h2>Thank You!</h2>
                <p>You rated us {rating} star{rating > 1 ? "s" : ""}</p>
                <button onClick={handleCloseModal} className='close-btn'>Close</button>
            </div>
        </div>
    )
}

export default Modal
