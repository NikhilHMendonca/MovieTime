import React, { Component } from 'react';
import { Container } from '../HomePageStyles.js';
import SectionTitle from "../../../components/SectionTitle";
import Wrapper from "../../../components/HorizontalScrollWrapper";
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
						<Card format={movie} redirectTo="/movie" key={movie.id} />
					))}
				</Wrapper>
			)}
			</Container>
		)
	}
}

export default TopRatedMovies;