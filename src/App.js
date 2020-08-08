import React, { useState, useEffect } from "react";
//import axios from "axios";
import "./App.css";
import api from "./api";

export default function App() {
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [duration, setDuration] = useState("");
  const [data, setData] = useState([]);

  // useEffect(() => {

  // });

  useEffect(() => {
    const result = api.get("/posts/1");
    setData(result.data);
    console.log(data);
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label>Movie name</label>
        <input
          type="text"
          value={name}
          id="name-input"
          onChange={(e) => setName(e.target.value)}
        />
        <label>Movie Ratings</label>
        <input
          type="text"
          value={rating}
          id="ratings-input"
          onChange={(e) => setRating(e.target.value)}
        />
        <label>Duration</label>
        <input
          type="text"
          value={duration}
          id="duration-input"
          onChange={(e) => setDuration(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
