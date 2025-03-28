import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FeedbackForm() {
  const [form, setForm] = useState({
    name: "",
    movie: "",
    rating: "",
    comments: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingReviews = JSON.parse(localStorage.getItem("reviews")) || [];
    const updatedReviews = [...existingReviews, form];
    localStorage.setItem("reviews", JSON.stringify(updatedReviews));

    alert("Thank you for your feedback!");
    navigate("/reviews");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <label>Name:</label>
      <input
        type="text"
        name="name"
        onChange={handleChange}
        value={form.name}
        required
      />

      <label>Movie:</label>
      <select name="movie" onChange={handleChange} value={form.movie} required>
        <option value="">Select</option>
        <option value="jananagan">Jananagan</option>
        <option value="Leo">Leo</option>
        <option value="Goat">Goat</option>
      </select>

      <label>Rating (1-5):</label>
      <input
        type="number"
        name="rating"
        min="1"
        max="5"
        value={form.rating}
        onChange={handleChange}
        required
      />

      <label>Comments:</label>
      <textarea name="comments" onChange={handleChange} value={form.comments} />

      <button type="submit">Submit</button>
    </form>
  );
}