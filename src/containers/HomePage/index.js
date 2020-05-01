import React from 'react';
import styled from 'styled-components';
import UpcomingMovies from "./UpcomingMovies/index.js";
import NowPlayingMovies from "./NowPlayingMovies/index.js";
import TopRatedMovies from "./TopRatedMovies/index.js";
import PopularMovies from "./PopularMovies/index.js";
import Header from '../../components/Header';

const Container = styled.div`
	padding: 0 0 48px 0;
`;

const HomePage = () => (
	<Container>
		<Header />
		<UpcomingMovies />
		<NowPlayingMovies />
		<TopRatedMovies />
		<PopularMovies />
	</Container>
);

export default HomePage;