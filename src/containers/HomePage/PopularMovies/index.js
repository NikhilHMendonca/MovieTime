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
		const { fetchPopularMovies } = this.props;
		fetchPopularMovies();
	}

	render() {
		const { fetchingPopularMovies, popularMoviesList } = this.props;
		const moviesList = popularMoviesList.slice(0, 5);
		return (
			<Container>
			<SectionTitle>Popular</SectionTitle>
			{fetchingPopularMovies ? (
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