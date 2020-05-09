import React, { Component } from 'react';
import { Container, Wrapper, SectionTitle } from '../HomePageStyles.js';
import MovieCard from '../../../components/MovieCard/index.js';
import Loader from '../../../components/Loader/index.js';

class UpcomingMovies extends Component {
	componentDidMount() {
		const { fetchUpcomingMovies } = this.props;
		fetchUpcomingMovies();
	}

	render() {
		const { upcomingMoviesList, fetchingUpcomingMovies } = this.props;
		return (
			<Container>
			<SectionTitle>Upcoming</SectionTitle>
			{fetchingUpcomingMovies ? (
				<Loader />
			) : (
				<Wrapper>
					{upcomingMoviesList.slice(0, 5).map(movie => (
						<MovieCard movie={movie} key={movie.id} />
					))}
				</Wrapper>
			)}
			</Container>
		)
	}
}

export default UpcomingMovies;