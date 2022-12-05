import React, { useEffect, useState } from "react";
import MovieCard from './MovieCard';
import './App.css'
import SearchIcon from './search.svg'

// API LINK : http://www.omdbapi.com/?apikey=[yourkey]&
// API link : http://www.omdbapi.com/?i=tt3896198&apikey=56d8e504;



const API_URL = `http://www.omdbapi.com/?apikey=56d8e504`



const App = () => {

    const [movies, setMovies] = useState([]);
    const [SearchTerm, setSearchTerm] = useState([]);




    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        console.log(data.Search);
        setMovies(data.Search);
    }


    useEffect(() => {
        searchMovies(SearchTerm);
    }, [])



    return (
        <div className="app">
            <h1>MovieApp</h1>
            <div className="search">
                <input placeholder="Search for movies" value={SearchTerm} onChange={(e) => { setSearchTerm(e.target.value) }} />
                <img src={SearchIcon} alt="search" onClick={() => searchMovies(SearchTerm)} />
            </div>
            {movies?.length > 0 ? (<div className="container">

                {
                    movies.map((movies) => <MovieCard movie={movies} />)
                }
                {/* <MovieCard movie={movies[0]} /> */}

            </div>) :
                (
                    <div className=" ">
                        <h2>No Movies found</h2>
                    </div>
                )
            }


        </div>

    )
}

export default App;