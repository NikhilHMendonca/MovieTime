import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import {
	fetchTVShowDetails,
	fetchSimilarTVShows,
	fetchTVShowReviews,
	fetchTVShowCredits,
	saveWatchlistTVShow,
	saveFavouriteTVShow,
	fetchIsTVShowSaved
} from "./actions";
import "react-tabs/style/react-tabs.css";
import SimilarContent from "../../components/SimilarContent";
import Reviews from "../../components/Reviews";
import Casts from "../../components/Casts";
import styled from "styled-components";
import TVShowInfo from "./components/TVShowInfo";
import TVShowSeasons from "./components/TVShowSeasons";
import { STORED_SESSION_ID } from "../../constants";
import CircularLoader from "../../components/CircularLoader";
import { showSnackbar } from "../App/actions";

const Container = styled.div`
	border: 1px solid #38c3a3;
	padding: 8px;
	border-radius: 4px;
	position: relative;
	margin: 190px 0 72px 0;
`;

class TVShowDetailsPage extends Component {
	componentDidMount() {
		const {
			handleFetchTvShowDetails,
			handleFetchSimilarTvShows,
			handleFetchTvShowCredits,
			handleFetchTvShowReviews,
			handleFetchIsTVShowSaved
		} = this.props;
		const { tvShowId } = this.props.match.params;
		handleFetchTvShowDetails(tvShowId);
		handleFetchTvShowCredits();
		handleFetchTvShowReviews();
		handleFetchSimilarTvShows();
		if (STORED_SESSION_ID) handleFetchIsTVShowSaved();
	}

	componentWillReceiveProps(nextProps) {
		const {
			handleFetchTvShowDetails,
			handleFetchSimilarTvShows,
			handleFetchTvShowCredits,
			handleFetchTvShowReviews,
			handleFetchIsTVShowSaved,
			match: {
				params: { tvShowId }
			}
		} = this.props;

		const { tvShowId: updatedtvShowId } = nextProps.match.params;
		if (updatedtvShowId !== tvShowId) {
			handleFetchTvShowDetails(updatedtvShowId);
			handleFetchTvShowCredits();
			handleFetchTvShowReviews();
			handleFetchSimilarTvShows();
			if (STORED_SESSION_ID) handleFetchIsTVShowSaved();
		}
	}

	validateIsUserLoggedIn = (callback, errorMessage) => {
		const { user, handleShowSnackbar } = this.props;
		if (Object.keys(user).length > 0) {
			// callback to be called if user is logged in
			callback();
		} else {
			// if not then show snackbar to login
			handleShowSnackbar(errorMessage);
		}
	};

	render() {
		const {
			tvShow,
			tvShowCredits,
			tvShowReviews,
			similarTvShows,
			handleSaveWatchlistTVShow,
			handleSaveFavouriteTVShow,
			savedTVShow,
			isFetchingTVShowDetails
		} = this.props;
		return (
			<Fragment>
				{!isFetchingTVShowDetails && Object.keys(tvShow).length > 0 ? (
					<Container>
						<TVShowInfo
							tvShow={tvShow}
							savedTVShow={savedTVShow}
							handleSaveWatchlistTVShow={() =>
								this.validateIsUserLoggedIn(
									handleSaveWatchlistTVShow,
									"Please login to add to Watchlist"
								)
							}
							handleSaveFavouriteTVShow={() =>
								this.validateIsUserLoggedIn(
									handleSaveFavouriteTVShow,
									"Please login to add to Favourites"
								)
							}
						/>
						<TVShowSeasons tvShow={tvShow} />
						<Casts casts={tvShowCredits} />
						<Reviews reviews={tvShowReviews} />
						<SimilarContent
							similarContent={similarTvShows}
							title="Similar TV Shows"
							redirectTo="/tv-show"
						/>
					</Container>
				) : (
					<CircularLoader centered />
				)}
			</Fragment>
		);
	}
}

const mapStateToProps = ({
	tvShowDetails: {
		isFetchingTVShowDetails,
		tvShow,
		tvShowCredits,
		tvShowReviews,
		similarTvShows,
		savedTVShow
	},
	profileDetails: { user }
}) => {
	return {
		isFetchingTVShowDetails,
		tvShow,
		tvShowCredits,
		tvShowReviews,
		similarTvShows,
		savedTVShow,
		user
	};
};

const mapDispatchToProps = dispatch => {
	return {
		handleFetchTvShowDetails: payload => dispatch(fetchTVShowDetails(payload)),
		handleFetchTvShowCredits: () => dispatch(fetchTVShowCredits()),
		handleFetchTvShowReviews: () => dispatch(fetchTVShowReviews()),
		handleFetchSimilarTvShows: () => dispatch(fetchSimilarTVShows()),
		handleSaveWatchlistTVShow: payload =>
			dispatch(saveWatchlistTVShow(payload)),
		handleSaveFavouriteTVShow: payload =>
			dispatch(saveFavouriteTVShow(payload)),
		handleFetchIsTVShowSaved: () => dispatch(fetchIsTVShowSaved()),
		handleShowSnackbar: payload => dispatch(showSnackbar(payload))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(TVShowDetailsPage);
