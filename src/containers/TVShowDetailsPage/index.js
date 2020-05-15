import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import {
	fetchTVShowDetails,
	fetchSimilarTVShows,
	fetchTVShowReviews,
	fetchTVShowCredits
} from "./actions";
import "react-tabs/style/react-tabs.css";
import SimilarContent from "../../components/SimilarContent";
import Reviews from "../../components/Reviews";
import Casts from "../../components/Casts";
import styled from "styled-components";
import TVShowInfo from "./components/TVShowInfo";
import TVShowSeasons from "./components/TVShowSeasons";

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
			handleFetchTvShowReviews
		} = this.props;
		const { tvShowId } = this.props.match.params;
		handleFetchTvShowDetails(tvShowId);
		handleFetchTvShowCredits();
		handleFetchTvShowReviews();
		handleFetchSimilarTvShows();
	}

	componentWillReceiveProps(nextProps) {
		const {
			handleFetchTvShowDetails,
			handleFetchSimilarTvShows,
			handleFetchTvShowCredits,
			handleFetchTvShowReviews,
			match: { params: { tvShowId } }
		} = this.props;

		const { tvShowId: updatedtvShowId } = nextProps.match.params;
		if (updatedtvShowId !== tvShowId) {
			handleFetchTvShowDetails(updatedtvShowId);
			handleFetchTvShowCredits();
			handleFetchTvShowReviews();
			handleFetchSimilarTvShows();
		}
	}

	render() {
		const { tvShow, tvShowCredits, tvShowReviews, similarTvShows } = this.props;
		return (
			<Container>
				{Object.keys(tvShow).length > 0 && (
					<Fragment>
						<TVShowInfo tvShow={tvShow} />
						<TVShowSeasons tvShow={tvShow} />
						<Casts casts={tvShowCredits} />
						<Reviews reviews={tvShowReviews} />
						<SimilarContent
							similarContent={similarTvShows}
							title="Similar TV Shows"
							redirectTo="/tv-show"
						/>
					</Fragment>
				)}
			</Container>
		);
	}
}

const mapStateToProps = ({
	tvShowDetails: {
		isFetchingTVShowDetails,
		tvShow,
		tvShowCredits,
		tvShowReviews,
		similarTvShows
	}
}) => {
	return {
		isFetchingTVShowDetails,
		tvShow,
		tvShowCredits,
		tvShowReviews,
		similarTvShows
	};
};

const mapDispatchToProps = dispatch => {
	return {
		handleFetchTvShowDetails: payload => dispatch(fetchTVShowDetails(payload)),
		handleFetchTvShowCredits: () => dispatch(fetchTVShowCredits()),
		handleFetchTvShowReviews: () => dispatch(fetchTVShowReviews()),
		handleFetchSimilarTvShows: () => dispatch(fetchSimilarTVShows())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(TVShowDetailsPage);
