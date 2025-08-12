import React, { useState } from 'react'
import Star from './Star'

function Rating({title}) {
    const [rating, setRating] = useState()
    const [hover, setHover] = useState()
    const feedBackMessage = ["Terrible","Poor","Fair","Good","Excellent"]
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
            <p className="feedback">
             {feedBackMessage[rating-1]}
            </p>
        </div>
    )
}

export default Rating
