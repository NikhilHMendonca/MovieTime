import React, { Component } from 'react';
import axios from 'axios';
import { Container, Wrapper, Card, MovieInfo, MovieImage, MovieName, MovieRating, SectionTitle } from '../HomePageStyles.js';

class UpcomingMovies extends Component {
	state = {
		loadingUpcomingMovies: true,
		upcomingMovies: []
	}

	componentDidMount() {
		axios.get('https://api.themoviedb.org/3/movie/upcoming', {params: {api_key:'8ccc0bdb740b43b01bbfa64bd20639c0', language: 'en'}})
		.then(response => {
			this.setState({ loadingUpcomingMovies: false, upcomingMovies: response.data.results });
		})
		.catch(error => {
			console.log({ error });
		});
	}

	render() {
		const { loadingUpcomingMovies, upcomingMovies } = this.state;
		const moviesList = upcomingMovies.slice(0, 5);
		return (
			<Container>
			<SectionTitle>Upcoming</SectionTitle>
			{loadingUpcomingMovies ? (
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

export default UpcomingMovies;