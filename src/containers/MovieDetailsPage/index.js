import React, { Component, Fragment } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
    color: #fff;
`;

const MovieName = styled.div`
    font-size: 24px;
    margin: 16px 0 4px 0;
`;

const MovieTagline = styled.div`
    font-size: 14px;
    margin: 4px 0 16px 0;
`;

const MovieOverview = styled.div`
    font-size: 14px;
    margin: 8px 0;
`;

const MovieReleaseDate = styled.div`
    font-size: 16px;
    margin: 8px 0;
`;

const MovieRuntime = styled.div`
    font-size: 12px;
    font-weight: 700;
    margin: 8px 0;

`;

const MovieGenre = styled.div`
    font-size: 12px;
    font-style: italic;
    margin: 8px 0;

`;

const MoviePopularity = styled.div`
    font-size: 16px;
    margin: 8px 0;

`;

const MovieImage = styled.div`
    width: 100%;
    height: 200px;
    background-image: ${({ url }) => `url(${url})`};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

class MovieDetailsPage extends Component {
    state = {
        movieDetails: {},
    }


    componentDidMount() {
        const { movieId } = this.props.match.params;
		axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, {params: {api_key:'8ccc0bdb740b43b01bbfa64bd20639c0', language: 'en'}})
		.then(response => {
			this.setState({ movieDetails: response.data });
		})
		.catch(error => {
			console.log({ error });
		});
	}

    render() {
        const { movieDetails } = this.state;
        console.log(movieDetails);
        // https://image.tmdb.org/t/p/w500/
        return (
            <Container>
                {Object.keys(movieDetails).length > 0 && (
                    <Fragment>
                        <MovieImage url={`https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`}/>
                        <MovieName>{movieDetails.title}</MovieName>
                        <MovieTagline>{movieDetails.tagline}</MovieTagline>
                        <MovieOverview>{movieDetails.overview}</MovieOverview>
                        <MovieReleaseDate>{movieDetails.release_date}</MovieReleaseDate>
                        <MovieRuntime>Release date: {movieDetails.runtime} mins</MovieRuntime>
                        <MoviePopularity>{`${Math.ceil(movieDetails.popularity)}%`}</MoviePopularity>
                        <MovieGenre>
                            {movieDetails.genres.map(genre => (
                                <span key={genre.id}>{genre.name}</span>
                            ))}
                        </MovieGenre>
                    </Fragment>
                )}
            </Container>
        )
    }
}

export default MovieDetailsPage;