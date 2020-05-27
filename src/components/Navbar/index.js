import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { MdSearch, MdFace, MdMovie, MdTv } from "react-icons/md";
import { GRAVATAR_BASE_URL, DEFAULT_USER_IMAGE } from "../../constants";

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

const NavbarName = styled.div`
	color: ${({ color }) => color};
`;

const UserImage = styled.div`
	height: 20px;
	width: 20px;
	background-image: ${({ src }) =>
		src
			? `url(${GRAVATAR_BASE_URL}/${src}?s=100)`
			: `url(${DEFAULT_USER_IMAGE})`};
	background-repeat: no-repeat;
	background-size: contain;
	background-position: center;
	border-radius: 50%;
	border: 1px solid #347768;
	margin: ${({ src }) => src ? '2px auto' : '16px auto'};
`;

const Navbar = ({ handleSaveNavbarOption, activeTab, user }) => {
	return (
		<Container>
			<NavbarOption onClick={() => handleSaveNavbarOption("homePage")}>
				<RedirectLink to="/">
					<MdMovie
						size="22px"
						color={activeTab === "homePage" ? "#2e8066" : "#141d2b"}
					/>
					<NavbarName color={activeTab === "homePage" ? "#2e8066" : "#141d2b"}>
						Movies
					</NavbarName>
				</RedirectLink>
			</NavbarOption>
			<NavbarOption onClick={() => handleSaveNavbarOption("tvShowsPage")}>
				<RedirectLink to="/tvshows">
					<MdTv
						size="22px"
						color={activeTab === "tvShowsPage" ? "#2e8066" : "#141d2b"}
					/>
					<NavbarName
						color={activeTab === "tvShowsPage" ? "#2e8066" : "#141d2b"}
					>
						TV Shows
					</NavbarName>
				</RedirectLink>
			</NavbarOption>
			<NavbarOption onClick={() => handleSaveNavbarOption("searchPage")}>
				<RedirectLink to="/search">
					<MdSearch
						size="22px"
						color={activeTab === "searchPage" ? "#2e8066" : "#141d2b"}
					/>
					<NavbarName
						color={activeTab === "searchPage" ? "#2e8066" : "#141d2b"}
					>
						Search
					</NavbarName>
				</RedirectLink>
			</NavbarOption>
			<NavbarOption onClick={() => handleSaveNavbarOption("profilePage")}>
				<RedirectLink to="/profile">
					{Object.keys(user).length > 0 && user.avatar.gravatar.hash ? <UserImage src={user.avatar.gravatar.hash} /> :  <MdFace
						size="22px"
						color={activeTab === "profilePage" ? "#2e8066" : "#141d2b"}
					/>}
					<NavbarName
						color={activeTab === "profilePage" ? "#2e8066" : "#141d2b"}
					>
						Profile
					</NavbarName>
				</RedirectLink>
			</NavbarOption>
		</Container>
	);
};

export default Navbar;
