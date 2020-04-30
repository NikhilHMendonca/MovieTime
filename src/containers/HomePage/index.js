import React from 'react';
import styled from 'styled-components';
import { MdPlaylistAdd, MdFace, MdMovie, MdTv } from 'react-icons/md';
import UpcomingMovies from "./UpcomingMovies/index.js";
import NowPlayingMovies from "./NowPlayingMovies/index.js";
import TopRatedMovies from "./TopRatedMovies/index.js";
import PopularMovies from "./PopularMovies/index.js";
import Header from '../../components/Header';
import { Link } from 'react-router-dom';

const Footer = styled.div`
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	height: 60px;
	background-color: #e2e2e2;
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
	color: #141d2b;
`;

const Container = styled.div`
	padding: 0 0 48px 0;
`;

const RedirectLink = styled(Link)`
	display: inline-block;
	text-decoration: none;
	width: 100%;
	color: inherit;
`;

const HomePage = () => (
	<Container>
		<Header />
		<UpcomingMovies />
		<NowPlayingMovies />
		<TopRatedMovies />
		<PopularMovies />
		<Footer>
				<FooterOption>
			<RedirectLink to="/">
					<MdMovie size="22px" color="#141d2b" /><div>Movies</div>
			</RedirectLink>
				</FooterOption>
				<FooterOption>
			<RedirectLink to="/tvshows">
					<MdTv size="22px" color="#141d2b" /><div>TV Shows</div>
			</RedirectLink>
				</FooterOption>
				<FooterOption>
			<RedirectLink to="/watchlist">
					<MdPlaylistAdd  size="22px" color="#141d2b" /><div>Watchlist</div>
			</RedirectLink>
				</FooterOption>
				<FooterOption>
			<RedirectLink to="/profile">
					<MdFace  size="22px" color="#141d2b" /><div>Profile</div>
			</RedirectLink>
				</FooterOption>
		</Footer>
	</Container>
);

export default HomePage;