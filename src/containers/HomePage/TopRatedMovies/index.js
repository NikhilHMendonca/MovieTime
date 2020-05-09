import React, { Component } from 'react';
import { Container, Wrapper, SectionTitle } from '../HomePageStyles.js';
import MovieCard from '../../../components/MovieCard/index.js';

class TopRatedMovies extends Component {
	componentDidMount() {
		const { fetchTopRatedMovies } = this.props;
		fetchTopRatedMovies();
	}

	render() {
		const { fetchingTopRatedMovies, topRatedMoviesList } = this.props;
		const moviesList = topRatedMoviesList.slice(0, 5);
		return (
			<Container>
			<SectionTitle>Top Rated</SectionTitle>
			{fetchingTopRatedMovies ? (
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

export default TopRatedMovies;