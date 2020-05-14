import React from 'react';
import Card from "../../../../components/Card";
import { Wrapper, SectionTitle } from "../../../HomePage/HomePageStyles";

const SimilarMovies = ({ similarMovies }) => {
    return (
        <Wrapper>
            <SectionTitle>Similar movies</SectionTitle>
            {similarMovies.length > 0 &&
                similarMovies.map(movie => (
                    <Card format={movie} redirectTo="/movie" key={movie.id} />
                ))}
        </Wrapper>

    )
}

export default SimilarMovies;