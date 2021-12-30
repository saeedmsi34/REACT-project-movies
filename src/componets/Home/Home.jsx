import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react/cjs/react.development'


export default function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [trendingTv, setTrendingTv] = useState([]);
  const [trendingGallery, setTrendingGallery] = useState([]);
  const [trendingPeaple, setTrendingPeaple] = useState([]);

  async function getTrendingMovies(mediaType='movie',callback='setTrendingMovies') {
    let { data } = await axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=f1aca93e54807386df3f6972a5c33b50`)
    callback(data.results.slice(0,16));

  }
  
 

  // getTrendingMovies("movie",setTrendingMovies),
  // getTrendingMovies("tv",setTrendingTv),
  // getTrendingMovies("gallery",setTrendingGallery),
  // getTrendingMovies("person",setTrendingPeaple),
  //   []);



 useEffect(() => {
  console.log('test did mount')
  getTrendingMovies("movie",setTrendingMovies),
  getTrendingMovies("tv",setTrendingTv),
  getTrendingMovies("gallery",setTrendingGallery),
  getTrendingMovies("person",setTrendingPeaple)
    return () => {
        console.log('test wil un mount')
    }
}, [])




    

  let imgPrifx = 'https://image.tmdb.org/t/p/w500'



  return (
      <div className='container-fluid'>

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
              <img  className='w-100' src={imgPrifx + movie.poster_path} alt="movie.title" />
              <h3 className='h6 my-2'>{movie.title}</h3>
            </div>
          </div>
          )}
        </div>
    
 

        <div className='row my-5'>
      <div className='col-md-4'>
        <div className='item mt-5'>
          <div className='brdr my-4 w-25'></div>
          <h2 className='mt-4'>Trending TV <br />

            To Watch <br /> Right NOW </h2>
          <p className='text-muted my-4'>Trending TV  To Watch</p>
          <div className='brdr  my-4 '></div>
          </div>
          </div>
          {trendingTv.map((movie, index) => <div key={index} className='col-md-2 pt-3'>
            <div className='movie'>
              {/* <Link to={`/MovieDetails/${movie.id}`}> */}
              <img   className='w-100' src={imgPrifx + movie.poster_path} alt="movie.name" />

              {/* </Link> */}
              <h3 className='h6 my-2'>{movie.name}</h3>
            </div>
          </div>
          )}
        </div>



        <div className='row my-5'>
      <div className='col-md-4'>
        <div className='item mt-5'>
          <div className='brdr my-4 w-25'></div>
          <h2 className='mt-4'>Trending Gallery <br />

            To Watch <br /> Right NOW </h2>
          <p className='text-muted my-4'>Trending Gallery  To Watch</p>
          <div className='brdr  my-4 '></div>
          </div>
          </div>
          {trendingGallery.map((movie, index) => <div key={index} className='col-md-2 pt-3'>
            <div className='movie'>
              <img className='w-100' src={imgPrifx + movie.poster_path} alt="movie.name" />
              <h3 className='h6 my-2'>{movie.name}</h3> <h3 className='h6 my-2'>{movie.title}</h3>
            </div>
          </div>
          )}
        </div>

        <div className='row mt-5'>
      <div className='col-md-4'>
        <div className='item mt-5'>
          <div className='brdr my-4 w-25'></div>
          <h2 className='mt-4'>Trending Peaple <br />

            To Watch <br /> Right NOW </h2>
          <p className='text-muted my-4'>Trending Peaple  To Watch</p>
          <div className='brdr  my-4 '></div>
          </div>
          </div>
          {trendingPeaple.map((movie, index) => <div key={index} className='col-md-2 pt-3'>
            <div className='movie'>
              <img className='w-100' src={imgPrifx + movie.profile_path} alt="movie.name" />
              <h3 className='h6 my-2'>{movie.name}</h3>
            </div>
          </div>
          )}
        </div>
        </div>
  )
}
