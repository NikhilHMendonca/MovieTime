import React, { Component } from 'react';
import axios from 'axios';
import { Container, Wrapper, SectionTitle } from '../HomePageStyles.js';
import MovieCard from '../../../components/MovieCard/index.js';

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
						<MovieCard movie={movie} key={movie.id} />
					))}
				</Wrapper>
			)}
			</Container>
		)
	}
}

export default UpcomingMovies;