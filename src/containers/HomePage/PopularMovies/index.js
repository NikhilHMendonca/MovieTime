import React, { Component } from 'react';
import { Container } from '../HomePageStyles.js';
import SectionTitle from "../../../components/SectionTitle";
import Wrapper from "../../../components/HorizontalScrollWrapper";
import Card from '../../../components/Card';
import Loader from '../../../components/Loader/index.js';

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
				<Loader />
			) : (
				<Wrapper>
					{moviesList.map(movie => (
						<Card format={movie} redirectTo="/movie" key={movie.id} />
					))}
				</Wrapper>
			)}
			</Container>
		)
	}
}

export default PopularMovies;