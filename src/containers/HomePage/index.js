import React from 'react';
import styled from 'styled-components';
import { MdPlaylistAdd, MdFace, MdMovie, MdTv } from 'react-icons/md';
import UpcomingMovies from "./UpcomingMovies/index.js";
import NowPlayingMovies from "./NowPlayingMovies/index.js";
import TopRatedMovies from "./TopRatedMovies/index.js";
import PopularMovies from "./PopularMovies/index.js";
import Header from '../../components/Header';

// const Header = styled.div`
// 	background-color: #141d2b;
// 	height: 80px;
// 	margin: 0 16px;
// `;

const Footer = styled.div`
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	height: 60px;
	background-color: #141d2b;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 14px;
	color: #fff;
`;

const FooterOption = styled.div`
	text-align: center;
	width: 25%;
	font-size: 12px;
	font-weight: 500;
`;

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
		<Footer>
			<FooterOption><MdMovie size="22px" /><div>Movies</div></FooterOption>
			<FooterOption><MdTv size="22px" /><div>TV Shows</div></FooterOption>
			<FooterOption><MdPlaylistAdd  size="22px" /><div>Watchlist</div></FooterOption>
			<FooterOption><MdFace  size="22px" /><div>Profile</div></FooterOption>
		</Footer>
	</Container>
);

export default HomePage;