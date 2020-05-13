import React, { Component } from 'react';
import { Container, Wrapper, SectionTitle } from '../HomePageStyles.js';
import Card from '../../../components/Card';
import Loader from '../../../components/Loader/index.js';

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
				<Loader />
			) : (
				<Wrapper>
					{moviesList.map(movie => (
						<Card movie={movie} redirectTo="/movie" key={movie.id} />
					))}
				</Wrapper>
			)}
			</Container>
		)
	}
}

export default TopRatedMovies;