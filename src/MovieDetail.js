// MovieDetail.js

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { rateMovie } from './api';

const MovieDetail = () => {
  const { movieId } = useParams();
  const [userRating, setUserRating] = useState(null);

  const handleRateMovie = async (rating) => {
    try {
      await rateMovie(movieId, rating);
      setUserRating(rating);
      // Tambahkan logika atau umpan balik sesuai kebutuhan Anda
    } catch (error) {
      // Tangani error jika permintaan gagal
      console.error('Error rating the movie:', error.message);
      // Tambahkan logika atau umpan balik kesalahan sesuai kebutuhan Anda
    }
  };


return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>
      <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
      <p>Release Date: {movie.release_date}</p>
      <p>Duration: {movie.runtime} minutes</p>
      <p>Genre: {movie.genres.map(genre => genre.name).join(', ')}</p>
      <p>Cast: {movie.cast.map(actor => actor.name).join(', ')}</p>
      <p>Director: {movie.director}</p>
      <p>Language: {movie.original_language}</p>
      <p>Rating: {movie.vote_average}/10</p>
      <a href={`https://www.youtube.com/watch?v=${movie.trailerKey}`} target="_blank" rel="noopener noreferrer">Watch Trailer</a>
      <Rating onRate={handleRateMovie} />
      {userRating && <p>Your rating: {userRating}</p>}
    </div>
  );
  
};

export default MovieDetail;
