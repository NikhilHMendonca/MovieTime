import React, { Component } from 'react';
import { Container } from '../HomePageStyles.js';
import SectionTitle from "../../../components/SectionTitle";
import Wrapper from "../../../components/HorizontalScrollWrapper";
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
					{upcomingMoviesList.map(movie => (
						<Card format={movie} redirectTo="/movie" key={movie.id} />
					))}
				</Wrapper>
			)}
			</Container>
		)
	}
}

export default UpcomingMovies;