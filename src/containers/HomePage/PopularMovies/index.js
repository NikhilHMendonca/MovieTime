import React, { Component } from 'react';
import axios from 'axios';
import { Container, Wrapper, SectionTitle } from '../HomePageStyles.js';
import MovieCard from '../../../components/MovieCard/index.js';

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
						<MovieCard movie={movie} key={movie.id} />
					))}
				</Wrapper>
			)}
			</Container>
		)
	}
}

export default PopularMovies;