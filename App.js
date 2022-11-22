import SearchIcon from './logo.svg'
import './App.css'
import {useState,useEffect} from 'react';
import Moviecard from './Moviecard/Moviecard'
const apiurl='https://www.omdbapi.com/?apikey=ffe28387'


function App(){
  const [movies,setMovies]=useState([]);
  const [searchterm,setSearchterm]=useState('');

  const searchmovies=async(title)=>{
      const response=await fetch(`${apiurl}&s=${title}`);
      const data=await response.json();
      setMovies(data.Search);
  }

  // useEffect(()=>{
  //   searchmovies("");
  // })





  return(
    <div className="app">
      <h1>MovieBase</h1>
      <div className="search">
        <input type="text" placeholder=" " value={searchterm }
          onChange={(e)=>{
            setSearchterm(e.target.value)

          }}/>
        <img src={SearchIcon} alt="search" 
          onClick={()=>{
              searchmovies(searchterm)
          }}/>
      </div>
      {
        movies?.length>0 ?
          (
            <div className="container">
              {
                movies.map((movie)=>(
                  <Moviecard movie1={movie} />
                
                ))
              }
           
            </div>


        ):
        (
          <div className="empty">
          <h2>No moves
          </h2></div>
        )
      }
      
    </div>
  )
}

export default App