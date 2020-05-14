import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import {
	fetchTVShowDetails,
	fetchSimilarTVShows,
	fetchTVShowReviews,
	fetchTVShowCredits
} from "./actions";
import { IMAGE_BASE_URL_500 } from "../../constants";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Cast from "../../components/Cast";
import {
	SectionTitle,
	Wrapper
} from "../../containers/HomePage/HomePageStyles";
import styled from "styled-components";
import Review from "../../components/Review";
import Card from "../../components/Card";

const Casts = styled.div`
	width: 100%;
	overflow-x: scroll;
	white-space: nowrap;
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

	render() {
		const { tvShow, tvShowCredits, tvShowReviews, similarTvShows } = this.props;
		return (
			<div>
				{Object.keys(tvShow).length > 0 && (
					<div>
						<img
							src={`${IMAGE_BASE_URL_500}${tvShow.poster_path}`}
							width={300}
							height={200}
						/>
						<div>{tvShow.name}</div>
						<div>{tvShow.overview}</div>
						<div>First episode aired: {tvShow.first_air_date}</div>
						<div>Last episode aired: {tvShow.last_air_date}</div>
						<div>
							Created by: {tvShow.created_by.map(creator => creator.name)}
						</div>
						<div>Created by: {tvShow.genres.map(genre => genre.name)}</div>
						<div>Last episode aired: {tvShow.last_air_date}</div>
						<div>Popularity: {tvShow.popularity}</div>
						<div>Vote Average: {tvShow.vote_average}</div>
						<Tabs>
							<TabList>
								{tvShow.seasons.map(season => (
									<Tab>{season.name}</Tab>
								))}
							</TabList>
							{tvShow.seasons.map(season => (
								<TabPanel>{season.overview}</TabPanel>
							))}
						</Tabs>
						<Fragment>
							<SectionTitle>Cast</SectionTitle>
							<Casts>
								{tvShowCredits.map(cast => (
									<Cast key={cast.id} cast={cast} />
								))}
							</Casts>
						</Fragment>
						<Fragment>
							<SectionTitle>Reviews</SectionTitle>
							{tvShowReviews.map(review => (
								<Review key={review.id} review={review} />
							))}
						</Fragment>
						<Fragment>
							<SectionTitle>Reviews</SectionTitle>
							{tvShowReviews.map(review => (
								<Review key={review.id} review={review} />
							))}
						</Fragment>
						<Fragment>
							<SectionTitle>Similar TV Shows</SectionTitle>
							<Wrapper>
								{similarTvShows.map(show => (
									<Card key={show.id} redirectTo="/tv-show" movie={show} />
								))}
							</Wrapper>
						</Fragment>
					</div>
				)}
			</div>
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
