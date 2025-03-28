import React, { useEffect, useState } from 'react';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  useEffect(()=>{
    const stored=JSON.parse(localStorage.getItem("reviews")) || [];
    setReviews(stored);
  }, []); 

  return (
    <div className="review-list">
      <h2>All Movie Reviews</h2>
      {reviews.length===0?(
        <p>No reviews submitted yet</p>):
        (
        <ul>
          {reviews.map((review, index) => (
            <li className="review-card" key={index}>
              <strong>{review.name}</strong> reviewed <em>{review.movie}</em>
              <br></br>
              Rating: {review.rating}/5
              <br></br>
              {review.comments && <p>{review.comments}</p>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}