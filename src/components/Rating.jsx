import React from 'react'
import Star from './Star'

function Rating({ setHover, setRating, rating, hover }) {
    return (
        <div>
            <h1>Rate your Experience</h1>
            <div className="stars">
                <Star
                    setHover={setHover}
                    setRating={setRating}
                    rating={rating}
                    hover={hover}
                />
            </div>
        </div>
    )
}

export default Rating
