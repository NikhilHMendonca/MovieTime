import React, { Component, Fragment } from "react";
import { DEFAULT_USER_IMAGE, GRAVATAR_BASE_URL } from "../../constants";
import styled from "styled-components";
import { connect } from "react-redux";
import { fetchToken, createSession, fetchUserDetails } from "./actions";
import Card from "./components/Card";
import HorizontalScrollWrapper from "../../components/HorizontalScrollWrapper";
import SectionTitle from "../../components/SectionTitle";
import Divider from "../../components/Divider";

const Container = styled.div`
	// text-align: center;
	padding: 0 0 72px 0;
`;

const UserImage = styled.div`
	height: 100px;
	width: 100px;
	background-image: ${({ src }) =>
		src
			? `url(${GRAVATAR_BASE_URL}/${src}?s=200)`
			: `url(${DEFAULT_USER_IMAGE})`};
	background-repeat: no-repeat;
	background-size: contain;
	background-position: center;
	border-radius: 50%;
	border: 1px solid #347768;
	margin: 16px auto;
`;

const LoginSignupButton = styled.button`
	font-size: 18px;
	color: #208066;
	font-weight: 600;
	border: 1px solid #208066;
	padding: 12px;
	border-radius: 4px;
	background: #edfffa;
	margin: 16px auto;
	min-width: 200px;
	display: block;
`;

const UserName = styled.div`
	font-size: 20px;
	color: #208066;
	font-weight: 600;
	text-align: center;
`;

const Wrapper = styled.div`
	margin: 16px 0;
`;

class Profile extends Component {
	componentDidMount() {
		const { handleCreateSession, handleFetchUserDetails } = this.props;
		const sessionId = localStorage.getItem("sessionId");
		const requestToken = this.getUrlParameter("request_token");
		if (!sessionId) {
			handleCreateSession(requestToken);
		} else {
			handleFetchUserDetails();
		}
	}

	getUrlParameter = name => {
		name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
		var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
		var results = regex.exec(window.location.search);
		return results === null
			? false
			: decodeURIComponent(results[1].replace(/\+/g, " "));
	};

	handleOnLoginSignup = () => {
		const { handleFetchToken } = this.props;
		handleFetchToken();
	};

	render() {
		const { user, watchlistMovies, favouriteMovies } = this.props;
		return (
			<Container>
				{Object.keys(user).length > 0 ? (
					<Container>
						<UserImage src={user.avatar.gravatar.hash} />
						<UserName>{user.username}</UserName>
						<Divider />
						<Wrapper>
							<SectionTitle>Watchlist</SectionTitle>
							<HorizontalScrollWrapper>
								{watchlistMovies.length > 0 &&
									watchlistMovies.map(movie => (
										<Card
											redirectTo="/movie"
											format={movie}
											key={movie.id}
										/>
									))}
							</HorizontalScrollWrapper>
						</Wrapper>
						<Wrapper>
							<SectionTitle>Favourite</SectionTitle>
							<HorizontalScrollWrapper>
								{favouriteMovies.length > 0 &&
									favouriteMovies.map(movie => (
										<Card
											redirectTo="/movie"
											format={movie}
											key={movie.id}
										/>
									))}
							</HorizontalScrollWrapper>
						</Wrapper>
					</Container>
				) : (
					<Container>
						<UserImage src={DEFAULT_USER_IMAGE} />
						<UserName>Guest</UserName>
						<LoginSignupButton onClick={this.handleOnLoginSignup}>
							Login/Signup
						</LoginSignupButton>
					</Container>
				)}
			</Container>
		);
	}
}

const mapStateToProps = ({
	profileDetails: { sessionId, user, watchlistMovies, favouriteMovies }
}) => {
	return {
		sessionId,
		user,
		watchlistMovies,
		favouriteMovies
	};
};

const mapDispatchToProps = dispatch => {
	return {
		handleFetchToken: () => dispatch(fetchToken()),
		handleCreateSession: payload => dispatch(createSession(payload)),
		handleFetchUserDetails: payload => dispatch(fetchUserDetails(payload))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
