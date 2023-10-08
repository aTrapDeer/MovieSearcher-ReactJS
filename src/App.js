import React from 'react';
import { useState, useEffect } from 'react';

import "./App.css";
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';


const API_URL = 'http://www.omdbapi.com?apikey=efa49ab7'


const App = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [movies, setMovies] = useState([]);
    

    const searchMovies = async (title) => {
            const response = await fetch(`${API_URL}&s=${title}`);
            const data = await response.json();
            setMovies(data.Search);
        }

    return (
        <div className="app">
        <h1>
            Movie Search
        </h1>
        
        <div className="search">
            <input
                placeholder="Search for a movie"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <img
            src={SearchIcon}
            alt="Search"
            onClick={() => searchMovies(searchTerm)}
            />
        </div>

        {
            movies?.length > 0
            ? (
                <div className="container">
                {movies.map((movie) => (
                    <MovieCard movie={movie} />
                ))}
                </div>
            ) : 
            (
                <div className="empty">
                    <h2>No movies found</h2>
                </div>
            )
        }
        </div>
      
    );

}
export default App;