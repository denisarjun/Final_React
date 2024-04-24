import axios from "axios"

const apiKey = process.env.REACT_APP_APIKEY
const baseUrl = process.env.REACT_APP_BASEURL

export const getMovieList = async () => {
    const movie = await axios.get(`${baseUrl}/movie/popular?api_key=${apiKey}`)
        return movie.data.results
}

export const searchMovie = async (q) => {
    const search = await axios.get(`${baseUrl}/search/movie?query=${q}&api_key=${apiKey}`)
    return search.data
}

export const rateMovie = async (movieId, ratingValue) => {
    const response = await axios.post(`${baseUrl}/movie/${movieId}/rating?api_key=${apiKey}`, {
      value: ratingValue // Menyertakan nilai rating dalam tubuh permintaan
    });
  
    return response.data; // Mengembalikan data yang diterima dari server
  };
  