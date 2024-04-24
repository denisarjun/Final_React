import React, { useEffect, useState } from 'react';
import './App.css';
import { getMovieList, searchMovie, rateMovie } from "./api"; 

const App = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result);
    });
  }, []);

  const handleRateMovie = async (movieId, ratingValue) => { 
    try {
      await rateMovie(movieId, ratingValue);
      // Tambahkan umpan balik atau perbarui UI setelah rating berhasil disimpan
    } catch (error) {
      console.error('Error rating the movie:', error.message);
      // Tambahkan penanganan error sesuai kebutuhan
    }
  };

  const PopularMovieList = () => {
    return popularMovies.map((movie, i) => (
      <div className="Movie-wrapper" key={i}>
        <div className="Movie-title">{movie.title}</div>
        <img className="Movie-image" src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`} />
        <div className="Movie-date">{movie.release_date}</div>
        <div className="Movie-rate">{movie.vote_average}</div>
        <button className="Movie-rate-button" onClick={() => handleRateMovie(movie.id, 5)}>Rate 5</button> {/* Tombol untuk memberikan rating */}
      </div>
    ));
  };

  const search = async (q) => {
    if (q.length > 3) {
      const query = await searchMovie(q);
      setPopularMovies(query.results);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Denmovie</h1>
        <input 
          placeholder="Cari Film..." 
          className="Movie-search" 
          onChange={({ target }) => search(target.value)} 
        />
        <div className="Movie-container">
          <PopularMovieList />
        </div>
      </header>
    </div>
  );
};

export default App;
