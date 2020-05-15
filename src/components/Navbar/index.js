import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { MdSearch, MdFace, MdMovie, MdTv } from "react-icons/md";

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

class Navbar extends Component {
	state = {
		activeTab: 0
	};

	handleTabChange = tab => {
		this.setState({ activeTab: tab });
	};

	render() {
		const { activeTab } = this.state;
		return (
			<Container>
				<NavbarOption onClick={() => this.handleTabChange(0)}>
					<RedirectLink to="/">
						<MdMovie
							size="22px"
							color={activeTab === 0 ? "#2e8066" : "#141d2b"}
						/>
						<NavbarName color={activeTab === 0 ? "#2e8066" : "#141d2b"}>
							Movies
						</NavbarName>
					</RedirectLink>
				</NavbarOption>
				<NavbarOption onClick={() => this.handleTabChange(1)}>
					<RedirectLink to="/tvshows">
						<MdTv size="22px" color={activeTab === 1 ? "#2e8066" : "#141d2b"} />
						<NavbarName color={activeTab === 1 ? "#2e8066" : "#141d2b"}>
							TV Shows
						</NavbarName>
					</RedirectLink>
				</NavbarOption>
				<NavbarOption onClick={() => this.handleTabChange(2)}>
					<RedirectLink to="/search">
						<MdSearch
							size="22px"
							color={activeTab === 2 ? "#2e8066" : "#141d2b"}
						/>
						<NavbarName color={activeTab === 2 ? "#2e8066" : "#141d2b"}>
							Search
						</NavbarName>
					</RedirectLink>
				</NavbarOption>
				<NavbarOption onClick={() => this.handleTabChange(3)}>
					<RedirectLink to="/profile">
						<MdFace
							size="22px"
							color={activeTab === 3 ? "#2e8066" : "#141d2b"}
						/>
						<NavbarName color={activeTab === 3 ? "#2e8066" : "#141d2b"}>
							Profile
						</NavbarName>
					</RedirectLink>
				</NavbarOption>
			</Container>
		);
	}
}

export default Navbar;
