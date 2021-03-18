import { useState } from 'react';
import { getMovies } from "../utils/movieService.js";
import Movie from './Movie';


 const Movies = () => {
    const [data, setData] = useState([]);
    
    const handleClick = async () => {
        const movies = await getMovies();
        setData(movies)
    };
    
    return (
        <>
            <h1>Velkommen til min React App!</h1>
            <p>Her ser du en oversikt over tittel på filmer og navn på skuespillere:</p>
            <button type="button" onClick={handleClick}>Trykk her</button>
            {data.map(movie => <Movie title={movie.title} actor={movie.actor} />)}
        </>
    );
};

export default Movies;