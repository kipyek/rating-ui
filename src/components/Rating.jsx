import { feedBackMessage } from './data/feedBackMessages'
import { useState } from 'react'
import Star from './Star'

function Rating({ title }) {
    const [hover, setHover] = useState()
    const [rating, setRating] = useState(0)
    const [isModalVisible, setIsModalVisible] = useState(false)

    const handleCloseModal = () => {
        setIsModalVisible(!isModalVisible)
    }

    const handleOpenModal = () => {
        if (rating < 1){
             window.alert("Please rate us!!")
             return
        }
        setIsModalVisible(!isModalVisible)
    }

    return (
        <div>
            <h1>{title}</h1>
            <div className="stars">
                <Star
                    setHover={setHover}
                    setRating={setRating}
                    rating={rating}
                    hover={hover}
                />
            </div>
            <p className="feedback"> {feedBackMessage[rating - 1]} </p>
            <button onClick={handleOpenModal} className="submit-btn">Submit</button>
            {isModalVisible && (
                <div className="modal-overlay">
                    <div className="modal">
                        <h2>Thank You!</h2>
                        <p>You rated us {rating} star{rating > 1 ? "s" : ""}</p>
                        <button onClick={handleCloseModal} className='close-btn'>Close</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Rating
