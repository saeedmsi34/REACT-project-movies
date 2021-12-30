import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react/cjs/react.development'


export default function Movies() {
    const [trendingMovies, setTrendingMovies] = useState([]);

    async function getTrendingMovies() {
        let { data } = await axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=f1aca93e54807386df3f6972a5c33b50`)
        setTrendingMovies(data.results.slice(0, 16));
    
      }






 useEffect(() =>
 getTrendingMovies("movie",setTrendingMovies),
  []);
 

  let imgPrifx = 'https://image.tmdb.org/t/p/w500'

    return (
        <div className='container-fluid bg-dark'>
              <div className='row'>
      <div className='col-md-4'>
        <div className='item mt-5'>
          <div className='brdr my-4 w-25'></div>
          <h2 className='mt-4'>Trending Movies <br />

            To Watch <br /> Right NOW </h2>
          <p className='text-muted my-4'>Trending Movies  To Watch</p>
          <div className='brdr  my-4 '></div>
          </div>
          </div>
          {trendingMovies.map((movie, index) => <div key={index} className='col-md-2 pt-3'>
            <div className='movie'>
              <img className='w-100' src={imgPrifx + movie.poster_path} alt="movie.title" />
              <h3 className='h6 my-2'>{movie.title}</h3>
            </div>
          </div>
          )}
        </div>
        </div>
    )
}
