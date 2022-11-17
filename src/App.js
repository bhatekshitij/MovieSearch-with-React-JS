import React, { useEffect } from "react";
import './App.css'
import SearchIcon from './search.svg'

// API LINK : http://www.omdbapi.com/?apikey=[yourkey]&
// API link : http://www.omdbapi.com/?i=tt3896198&apikey=56d8e504;



const API_URL = `http://www.omdbapi.com/?apikey=56d8e504`

const App = () => {

    var async = require('async');
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        console.log(data)
    }
    useEffect(() => {
        searchMovies('superman');
    }, [])
    return (
        <div className="app">
            <h1>MovieApp</h1>
            <div className="search">
                <input placeholder="Search for movies" value="Superman" onChange={() => { }} />
                <img src={SearchIcon} alt="search" />
            </div>
        </div>

    )
}

export default App;