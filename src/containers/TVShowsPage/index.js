import React, { Component } from "react";
import styled from 'styled-components';
import { Container } from "../HomePage/HomePageStyles";
import SectionTitle from "../../components/SectionTitle";
import Wrapper from "../../components/HorizontalScrollWrapper";
import Loader from "../../components/Loader";
import Card from "../../components/Card";
import { connect } from "react-redux";
import { fetchPopularTvShows, fetchTopRatedTvShows } from "./actions";

const ParentWrapper = styled.div`
	padding: 0 0 60px 0;
`;
class TVShows extends Component {
	componentDidMount() {
		const {
			handleFetchPopularTvShows,
			handleFetchTopRatedTvShows
		} = this.props;
		handleFetchPopularTvShows();
		handleFetchTopRatedTvShows();
	}

	render() {
		const {
			popularTvShows,
			isfetchingPopularMovies,
			isfetchingTopRatedMovies,
			topRatedTvShows
		} = this.props;
		return (
			<ParentWrapper>
				<Container>
					<SectionTitle>Popular</SectionTitle>
					{isfetchingPopularMovies ? (
						<Loader />
					) : (
						<Wrapper>
							{popularTvShows.map(show => (
								<Card format={show} redirectTo="/tv-show" key={show.id} />
							))}
						</Wrapper>
					)}
				</Container>
				<Container>
					<SectionTitle>Top Rated</SectionTitle>
					{isfetchingTopRatedMovies ? (
						<Loader />
					) : (
						<Wrapper>
							{topRatedTvShows.map(show => (
								<Card format={show} redirectTo="/tv-show" key={show.id} />
							))}
						</Wrapper>
					)}
				</Container>
			</ParentWrapper>
		);
	}
}

const mapStateToProps = ({
	tvShows: {
		isfetchingPopularMovies,
		popularTvShows,
		isfetchingTopRatedMovies,
		topRatedTvShows
	}
}) => {
	return {
		isfetchingPopularMovies,
		popularTvShows,
		isfetchingTopRatedMovies,
		topRatedTvShows
	};
};

const mapDispatchToProps = dispatch => {
	return {
		handleFetchPopularTvShows: () => dispatch(fetchPopularTvShows()),
		handleFetchTopRatedTvShows: () => dispatch(fetchTopRatedTvShows())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(TVShows);
