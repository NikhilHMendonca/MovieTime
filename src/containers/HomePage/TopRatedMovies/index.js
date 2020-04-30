import React, { Component } from 'react';
import axios from 'axios';
import { Container, Wrapper, SectionTitle } from '../HomePageStyles.js';
import MovieCard from '../../../components/MovieCard/index.js';

class TopRatedMovies extends Component {
	state = {
		loadingTopRatedMovies: true,
		topRatedMovies: []
	}

	componentDidMount() {
		axios.get('https://api.themoviedb.org/3/movie/top_rated', {params: {api_key:'8ccc0bdb740b43b01bbfa64bd20639c0', language: 'en'}})
		.then(response => {
			this.setState({ loadingTopRatedMovies: false, topRatedMovies: response.data.results });
		})
		.catch(error => {
			console.log({ error });
		});
	}

	render() {
		const { loadingTopRatedMovies, topRatedMovies } = this.state;
		const moviesList = topRatedMovies.slice(0, 5);
		return (
			<Container>
			<SectionTitle>Top Rated</SectionTitle>
			{loadingTopRatedMovies ? (
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