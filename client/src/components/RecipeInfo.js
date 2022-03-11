import React from 'react'
import "./RecipeInfo.css"
import { useState } from 'react'
import axios from 'axios'

export default function RecipeInfo(props) {

    const [comment, setComment] = useState('')
    const [rating, setRating] = useState(1)

    const handleComment = e => {
        setComment(e.target.value)
    }

    const handleRating = e => {
        setRating(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const recipeData = {
            recipeLink: props.recipeLink,
            rating: parseInt(rating),
            comments: comment
        }
        axios.post('/recipe', recipeData)
            .then(() => {
                setComment('')
                setRating(1)
                alert("Your Comment Has Been Added!")
            })
    }


  return (
    <div>
        <form onSubmit={(e) => handleSubmit(e)}>
            <label>Comment: </label>
            <input 
                type="text"
                placeholder="delicious..."
                name="keyword"
                value={comment}
                onChange={handleComment}
            />
            <label id="rating-label">Rating: </label>
            <select name="rating" value={rating} onChange={handleRating}>
                <option value="1">⭐️</option>
                <option value="2">⭐️⭐️</option>
                <option value="3">⭐️⭐️⭐️</option>
            </select>
            <button className="btn"> SUBMIT</button>
        </form>
    </div>
  )
}
