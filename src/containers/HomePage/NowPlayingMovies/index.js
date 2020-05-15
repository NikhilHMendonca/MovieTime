import React, { Component } from 'react';
import { Container } from '../HomePageStyles.js';
import SectionTitle from "../../../components/SectionTitle";
import Wrapper from "../../../components/HorizontalScrollWrapper";

import Card from '../../../components/Card';
import Loader from '../../../components/Loader/index.js';

class NowPlayingMovies extends Component {
	componentDidMount() {
		const { fetchNowPlayingMovies } = this.props;
		fetchNowPlayingMovies();
	}

	render() {
		const { nowPlayingMoviesList, fetchingNowPlayingMovies } = this.props;
		const moviesList = nowPlayingMoviesList.slice(0, 5);
		return (
			<Container>
			<SectionTitle>Now Playing</SectionTitle>
			{fetchingNowPlayingMovies ? (
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

export default NowPlayingMovies;