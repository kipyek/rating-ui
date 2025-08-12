import React, { useState } from 'react'
const App = () => {
  const [rating, setRating] = useState()
  const [hover, setHover] = useState()
  const stars = Array.from({ length: 5 }, (_, i) => i + 1)
  console.log(hover)

  return (
    <div className="rating-container">
      <h1>Rate your Experience</h1>
      <div className="stars">
        {stars.map((star) => (
          <span
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
            onClick={() => setRating(star)}
            className="star"
            style={{color: star <= (hover || rating) ? 'gold' : '#ccc' }}
          >
            {'\u2605'}
          </span>
        ))}
      </div>
    </div>
  )

}
export default App;