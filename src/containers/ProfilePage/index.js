import React, { Component } from "react";
import {
	DEFAULT_USER_IMAGE,
	GRAVATAR_BASE_URL,
} from "../../constants";
import styled from "styled-components";
import { connect } from "react-redux";
import {
	fetchToken,
	createSession,
	fetchUserDetails,
	deleteSession
} from "./actions";
import Card from "./components/Card";
import HorizontalScrollWrapper from "../../components/HorizontalScrollWrapper";
import SectionTitle from "../../components/SectionTitle";
import Divider from "../../components/Divider";

const Container = styled.div`
	padding: 0 0 24px 0;
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
		const {
			handleCreateSession,
			handleFetchUserDetails,
			// sessionId
		} = this.props;
		const requestToken = this.getUrlParameter("request_token");
		const sessionId = localStorage.getItem('sessionId');
		if (!sessionId && requestToken) {
			handleCreateSession(requestToken);
		} else if (sessionId) {
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
		const {
			user,
			watchlistMovies,
			favouriteMovies,
			watchlistTVShows,
			favouriteTVShows,
			handleDeleteSession
		} = this.props;
		return (
			<Container>
				{Object.keys(user).length > 0 ? (
					<Container>
						<UserImage src={user.avatar.gravatar.hash} />
						<UserName>{user.username}</UserName>
						<LoginSignupButton onClick={handleDeleteSession}>
							Logout
						</LoginSignupButton>
						<Divider />
						<Wrapper>
							<SectionTitle>Watchlist Movies</SectionTitle>
							<HorizontalScrollWrapper>
								{watchlistMovies.length > 0 &&
									watchlistMovies.map(movie => (
										<Card redirectTo="/movie" format={movie} key={movie.id} />
									))}
							</HorizontalScrollWrapper>
						</Wrapper>
						<Wrapper>
							<SectionTitle>Favourite Movies</SectionTitle>
							<HorizontalScrollWrapper>
								{favouriteMovies.length > 0 &&
									favouriteMovies.map(movie => (
										<Card redirectTo="/movie" format={movie} key={movie.id} />
									))}
							</HorizontalScrollWrapper>
						</Wrapper>
						<Wrapper>
							<SectionTitle>Watchlist TV Shows</SectionTitle>
							<HorizontalScrollWrapper>
								{watchlistTVShows.length > 0 &&
									watchlistTVShows.map(show => (
										<Card redirectTo="/tv-show" format={show} key={show.id} />
									))}
							</HorizontalScrollWrapper>
						</Wrapper>
						<Wrapper>
							<SectionTitle>Favourite TV Shows</SectionTitle>
							<HorizontalScrollWrapper>
								{favouriteTVShows.length > 0 &&
									favouriteTVShows.map(show => (
										<Card redirectTo="/tv-show" format={show} key={show.id} />
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
	profileDetails: { sessionId, user, watchlistMovies, favouriteMovies, watchlistTVShows, favouriteTVShows }
}) => {
	return {
		sessionId,
		user,
		watchlistMovies,
		favouriteMovies,
		watchlistTVShows,
		favouriteTVShows,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		handleFetchToken: () => dispatch(fetchToken()),
		handleCreateSession: payload => dispatch(createSession(payload)),
		handleFetchUserDetails: payload => dispatch(fetchUserDetails(payload)),
		handleDeleteSession: () => dispatch(deleteSession())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
