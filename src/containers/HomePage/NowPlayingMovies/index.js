import React, { Component } from 'react';
import axios from 'axios';
import { Container, Wrapper, SectionTitle } from '../HomePageStyles.js';
import MovieCard from '../../../components/MovieCard/index.js';

class NowPlayingMovies extends Component {
	state = {
		loadingNowPlayingMovies: true,
		nowPlayingMovies: []
	}

	componentDidMount() {
		axios.get('https://api.themoviedb.org/3/movie/now_playing', {params: {api_key:'8ccc0bdb740b43b01bbfa64bd20639c0', language: 'en'}})
		.then(response => {
			this.setState({ loadingNowPlayingMovies: false, nowPlayingMovies: response.data.results });
		})
		.catch(error => {
			console.log({ error });
		});
	}

	render() {
		const { loadingNowPlayingMovies, nowPlayingMovies } = this.state;
		const moviesList = nowPlayingMovies.slice(0, 5);
		return (
			<Container>
			<SectionTitle>Now Playing</SectionTitle>
			{loadingNowPlayingMovies ? (
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

export default NowPlayingMovies;