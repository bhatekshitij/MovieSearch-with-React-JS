import React, { useEffect, useState } from "react";
import MovieCard from './MovieCard';
import './App.css'
import SearchIcon from './search.svg'

// API LINK : http://www.omdbapi.com/?apikey=[yourkey]&
// API link : http://www.omdbapi.com/?i=tt3896198&apikey=56d8e504;



const API_URL = `http://www.omdbapi.com/?apikey=56d8e504`
const movie1 = {
    "Title": "Batman v Superman: Dawn of Justice (Ultimate Edition)",
    "Year": "2016",
    "imdbID": "tt18689424",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BN2I4OTllM2MtMWVhNC00MjkzLWJlMDUtN2FhMGQ2ZGVjMjllXkEyXkFqcGdeQXVyMTEyNzgwMDUw._V1_SX300.jpg"
}



const App = () => {

    const [movies, setMovies] = useState([]);
    const [SearchTerm, setSearchTerm] = useState([]);



    var async = require('async');
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        console.log(data.Search);
        setMovies(data.Search);
    }


    useEffect(() => {
        searchMovies('superman');
    }, [])



    return (
        <div className="app">
            <h1>MovieApp</h1>
            <div className="search">
                <input placeholder="Search for movies" value={SearchTerm} onChange={() => { }} />
                <img src={SearchIcon} alt="search" />
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