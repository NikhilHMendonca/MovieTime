import React, { Component } from 'react';
import { Container, Wrapper, SectionTitle } from '../HomePageStyles.js';
import Card from '../../../components/Card';
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
						<Card movie={movie} redirectTo="/movie" key={movie.id} />
					))}
				</Wrapper>
			)}
			</Container>
		)
	}
}

export default UpcomingMovies;