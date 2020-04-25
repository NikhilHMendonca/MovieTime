import React, { Component } from 'react';
import axios from 'axios';
import { Container, Wrapper, Card, MovieInfo, MovieImage, MovieName, MovieRating, SectionTitle } from '../HomePageStyles.js';
import { Link } from 'react-router-dom';

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
						<Link to={`/movie/${movie.id}`} key={movie.id}>
							<Card>
								<MovieImage image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
								<MovieInfo>
									<MovieName>{movie.title}</MovieName>
									<MovieRating>{movie.vote_average}</MovieRating>
								</MovieInfo>
							</Card>
						</Link>
					))}
				</Wrapper>
			)}
			</Container>
		)
	}
}

export default NowPlayingMovies;