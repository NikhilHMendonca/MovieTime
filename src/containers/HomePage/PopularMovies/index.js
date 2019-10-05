import React, { Component } from 'react';
import axios from 'axios';
import { Container, Wrapper, Card, MovieInfo, MovieImage, MovieName, MovieRating, SectionTitle } from '../HomePageStyles.js';

class PopularMovies extends Component {
	state = {
		loadingPopularMovies: true,
		popularMovies: []
	}

	componentDidMount() {
		axios.get('https://api.themoviedb.org/3/movie/popular', {params: {api_key:'8ccc0bdb740b43b01bbfa64bd20639c0', language: 'en'}})
		.then(response => {
			this.setState({ loadingPopularMovies: false, popularMovies: response.data.results });
		})
		.catch(error => {
			console.log({ error });
		});
	}

	render() {
		const { loadingPopularMovies, popularMovies } = this.state;
		const moviesList = popularMovies.slice(0, 5);
		return (
			<Container>
			<SectionTitle>Popular</SectionTitle>
			{loadingPopularMovies ? (
				<div>Loading...</div>
			) : (
				<Wrapper>
					{moviesList.map(movie => (
						<Card key={movie.id}>
							<MovieImage image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
							<MovieInfo>
								<MovieName>{movie.title}</MovieName>
								<MovieRating>{movie.vote_average}</MovieRating>
							</MovieInfo>
						</Card>
					))}
				</Wrapper>
			)}
			</Container>
		)
	}
}

export default PopularMovies;