import React, { Component, Fragment } from "react";
import axios from "axios";
import styled from "styled-components";
import Cast from '../../components/Cast';
import Review from "../../components/Review";
import MovieCard from "../../components/MovieCard";
import { Wrapper, SectionTitle } from "../HomePage/HomePageStyles";
import dayjs from 'dayjs';
import { IMAGE_BASE_URL_500 } from "../../constants";

const Container = styled.div`
	border: 1px solid #38c3a3;
    padding: 8px 8px 8px 8px;
    border-radius: 4px;
    position: relative;
	margin: 190px 0 0 0;
`;

const MovieName = styled.div`
	font-size: 18px;
	margin: 16px 0 4px 0;
	text-align: center;
	font-weight: 700;
	color: #212020;
`;
	
const MovieOverview = styled.div`
	font-size: 12px;
	margin: 8px 0;
	text-align: justify;

`;

const MovieReleaseDate = styled.div`
	font-size: 12px;
	margin: 8px 0;
`;

const MovieRuntime = styled.div`
	font-size: 12px;
	margin: 8px 0;
`;

const MovieGenre = styled.div`
	font-size: 12px;
	margin: 8px 0 16px 0;
	text-align: center;
	font-weight: 600;
	color: grey;
`;

const MoviePopularity = styled.div`
	font-size: 12px;
	margin: 8px 0;
`;

const MovieImage = styled.div`
	width: 135px;
	height: 200px;
	background-image: ${({ url }) => `url(${url})`};
	background-position: center;
	background-repeat: no-repeat;
	background-size: contain;
	position: absolute;
    top: -185px;
    left: 0;
	right: 0;
	margin: 0 auto;
    border-radius: 10px;
`;

const Casts = styled.div`
    width: 100%;
    overflow-x: scroll;
    white-space: nowrap;
`;

class MovieDetailsPage extends Component {
	state = {
		movieDetails: {},
		casts: [],
		reviews: [],
        similarMovies: [],
        images: {}
	};

	componentDidMount() {
		const { movieId } = this.props.match.params;
		axios
			.get(`https://api.themoviedb.org/3/movie/${movieId}`, {
				params: { api_key: "8ccc0bdb740b43b01bbfa64bd20639c0", language: "en" }
			})
			.then(response => {
				this.setState({ movieDetails: response.data });
			})
			.catch(error => {
				console.log({ error });
			});

		axios
			.get(`https://api.themoviedb.org/3/movie/${movieId}/credits`, {
				params: { api_key: "8ccc0bdb740b43b01bbfa64bd20639c0", language: "en" }
			})
			.then(response => {
				this.setState({ casts: response.data.cast });
			})
			.catch(error => {
				console.log({ error });
            });
            
        axios
			.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews`, {
				params: { api_key: "8ccc0bdb740b43b01bbfa64bd20639c0", language: "en" }
			})
			.then(response => {
				this.setState({ reviews: response.data.results });
			})
			.catch(error => {
				console.log({ error });
            });
            
        axios
			.get(`https://api.themoviedb.org/3/movie/${movieId}/similar`, {
				params: { api_key: "8ccc0bdb740b43b01bbfa64bd20639c0", language: "en" }
			})
			.then(response => {
				this.setState({ similarMovies: response.data.results });
			})
			.catch(error => {
				console.log({ error });
            });
            
        axios
			.get(`https://api.themoviedb.org/3/movie/${movieId}/images`, {
				params: { api_key: "8ccc0bdb740b43b01bbfa64bd20639c0", language: "en" }
			})
			.then(response => {
				this.setState({ images: response.data });
			})
			.catch(error => {
				console.log({ error });
			});
	}

	render() {
		const { movieDetails, casts, reviews, similarMovies } = this.state;
		return (
			<Container>
				{Object.keys(movieDetails).length > 0 && (
					<Fragment>
						<MovieImage
							url={`${IMAGE_BASE_URL_500}${movieDetails.poster_path}`}
						/>
						<MovieName>{movieDetails.title}</MovieName>
						<MovieGenre>{movieDetails.genres.map(genre => genre.name).join(' • ')}</MovieGenre>
						<SectionTitle>Overview</SectionTitle>
						<MovieOverview>{movieDetails.overview}</MovieOverview>
						<MovieReleaseDate>Release date: {dayjs(movieDetails.release_date).format('DD MMMM YYYY')}</MovieReleaseDate>
						<MovieRuntime>
							Duration: {movieDetails.runtime} mins
						</MovieRuntime>
						<MoviePopularity>Rating: {movieDetails.vote_average}</MoviePopularity>
						<Casts>
							<SectionTitle>Cast</SectionTitle>
							{casts.length > 0 &&
								casts.map(cast => (
									<Cast cast={cast} key={cast.id} />
								))}
						</Casts>
                        <div>
							<SectionTitle>Reviews</SectionTitle>
							{reviews.length > 0 &&
								reviews.map(review => (
									<Review review={review} key={review.id} />
								))}
						</div>
                        <Wrapper>
							<SectionTitle>Similar movies</SectionTitle>
							{similarMovies.length > 0 &&
								similarMovies.map(movie => (
									<MovieCard movie={movie} key={movie.id} />
								))}
						</Wrapper>
					</Fragment>
				)}
			</Container>
		);
	}
}

export default MovieDetailsPage;
