import React, { useState } from 'react'
import Rating from './components/Rating'
const App = () => {
  const [rating, setRating] = useState()
  const [hover, setHover] = useState()
 

  return (
    <div className="rating-container">
      <Rating
        setHover={setHover}
        setRating={setRating}
        rating={rating}
        hover={hover}
      />
    </div>
  )

}
export default App;