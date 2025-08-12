import React from 'react'

function Star({ setHover, setRating, rating, hover }) {
    const stars = Array.from({ length: 5 }, (_, i) => i + 1)
    return (
        <div>
            {stars.map((star) => (
                <span
                    onMouseEnter={() => setHover(star)}
                    onMouseLeave={() => setHover(0)}
                    onClick={() => setRating(star)}
                    className="star"
                    style={{ color: star <= (hover || rating) ? 'gold' : '#ccc' }}
                >
                    {'\u2605'}
                </span>
            ))}
        </div>
    )
}

export default Star
