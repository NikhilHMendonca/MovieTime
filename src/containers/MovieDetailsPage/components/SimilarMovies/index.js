import React from 'react';
import MovieCard from "../../../../components/MovieCard";
import { Wrapper, SectionTitle } from "../../../HomePage/HomePageStyles";

const SimilarMovies = ({ similarMovies }) => {
    return (
        <Wrapper>
            <SectionTitle>Similar movies</SectionTitle>
            {similarMovies.length > 0 &&
                similarMovies.map(movie => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
        </Wrapper>

    )
}

export default SimilarMovies;