import { feedBackMessage } from './data/feedBackMessages'
import { useState } from 'react'
import Star from './Star'
import Modal from './Modal'

function Rating({ title }) {
    const [hover, setHover] = useState()
    const [rating, setRating] = useState(0)
    const [isModalVisible, setIsModalVisible] = useState(false)

    const handleCloseModal = () => {
        setIsModalVisible(!isModalVisible)
    }

    const handleOpenModal = () => {
        if (rating < 1) {
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
            <Modal
                isOpen={isModalVisible}
                rating={rating}
                handleCloseModal={handleCloseModal}
            />
        </div>
    )
}

export default Rating
