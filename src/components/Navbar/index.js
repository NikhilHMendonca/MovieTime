import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { MdPlaylistAdd, MdFace, MdMovie, MdTv } from "react-icons/md";

const Container = styled.div`
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

const NavbarOption = styled.div`
	text-align: center;
	width: 25%;
	font-size: 12px;
	font-weight: 500;
	color: #141d2b;
`;

const RedirectLink = styled(Link)`
	display: inline-block;
	text-decoration: none;
	width: 100%;
	color: inherit;
`;

const Navbar = () => {
	return (
		<Container>
			<NavbarOption>
				<RedirectLink to="/">
					<MdMovie size="22px" color="#141d2b" />
					<div>Movies</div>
				</RedirectLink>
			</NavbarOption>
			<NavbarOption>
				<RedirectLink to="/tvshows">
					<MdTv size="22px" color="#141d2b" />
					<div>TV Shows</div>
				</RedirectLink>
			</NavbarOption>
			<NavbarOption>
				<RedirectLink to="/watchlist">
					<MdPlaylistAdd size="22px" color="#141d2b" />
					<div>Watchlist</div>
				</RedirectLink>
			</NavbarOption>
			<NavbarOption>
				<RedirectLink to="/profile">
					<MdFace size="22px" color="#141d2b" />
					<div>Profile</div>
				</RedirectLink>
			</NavbarOption>
		</Container>
	);
};

export default Navbar;
