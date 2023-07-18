import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {BiPlay} from "react-icons/bi"
import {AiOutlinePlus} from "react-icons/ai"
const ApiKey = "72f3246fcb4b9547dd31790c096f2598";
const url = "https://api.themoviedb.org/3";
const upcoming = "upcoming";
const topRated = "top_rated";
const nowPlaying = "now_playing";
const popular = "popular";
const imgUrl = "https://image.tmdb.org/t/p/original"

const Card = ({img})=>(
  <img className='card' src={img} alt='card' />
)

const Row = ({title,arr=[{
 
}] })=>(
  <div className='row'>
    <h2>{title}</h2>
    <div>
      {
        arr.map((item,index) =>(
          <Card key={index} img={`${imgUrl}/${item.poster_path}`} />
        ))
      }
    </div>
  </div>
)
const Home = () => {

  const [upcomingMovies,setUpcomingMovies] = useState([]);
  const [popularMovies,setPopularMovies] = useState([]);
  const [topRatedMovies,setTopRatedMovies] = useState([]);
  const [nowPlayingMovies,setNowPlayingMovies] = useState([]);

  useEffect(()=>{
    const fetchUpcoming = async()=>{
      const {data: {results}} = await axios.get(`${url}/movie/${upcoming}?api_key=${ApiKey}`);
      setUpcomingMovies(results)
    };
    const fetchPopular = async()=>{
      const {data: {results}} = await axios.get(`${url}/movie/${popular}?api_key=${ApiKey}`);
      setPopularMovies(results)
    };
    const fetchTopRated = async()=>{
      const {data: {results}} = await axios.get(`${url}/movie/${topRated}?api_key=${ApiKey}`);
      setTopRatedMovies(results)
    };
    const fetchNowPlaying = async()=>{
      const {data: {results}} = await axios.get(`${url}/movie/${nowPlaying}?api_key=${ApiKey}`);
      setNowPlayingMovies(results)
    };

    fetchUpcoming();
    fetchPopular();
    fetchTopRated();
    fetchNowPlaying();
  },[])

  return (
    <section className='home'>
      <div className='banner' style={{
        backgroundImage: popularMovies[2] ? `url(${`${imgUrl}/${popularMovies[2].poster_path}`})`: "rgb(16,16,16)",
      }}>
        {popularMovies[2] && <h1>{popularMovies[2].original_title}</h1>}
        {popularMovies[2] && <p>{popularMovies[2].overview}</p>}
        <div>
        <button><BiPlay />Play</button>
        <button>My List <AiOutlinePlus /></button>
        </div>
      </div>

      <Row title={"Upcoming"} arr={upcomingMovies}/>
      <Row title={"Popular"} arr={popularMovies}/>
      <Row title={"Top Rated"} arr={topRatedMovies}/>
      <Row title={"Now Playing"} arr={nowPlayingMovies}/>
    </section>
  )
}

export default Home
