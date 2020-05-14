import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
import { connect } from "react-redux";
import { fetchSearchResults } from "./actions";
import { IMAGE_BASE_URL_200, DEFAULT_USER_IMAGE } from "../../constants";
import { Link } from 'react-router-dom';

const Container = styled.div`
  // width: calc(100vw - 32px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  border: 1px solid #142d2b
  border-radius: 4px;
  margin: 16px 0; 
`;

const SearchBar = styled.input`
	width: 100%;
	height: 40px;
	box-shadow: none;
	border: none;
	font-size: 16px;
	font-weight: 500;
	padding: 0 8px;
	background: transparent;

	&:focus,
	&:active {
		outline: none;
	}
`;

const SearchButton = styled.button`
	border: none;
	box-shadow: none;
	background: none;

	&:focus,
	&:active {
		outline: none;
	}
`;

const ResultContainer = styled.div`
	display: flex;
	justify-content: left;
	align-items: flex-start;
	margin: 8px 0;
`;

const ResultImage = styled.div`
	width: 60px;
	height: 60px;
	background-image: url(${({ src }) => src});
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
`;

const ResultInfoWrapper = styled.div`
	margin: 8px;
`;

const ResultTitle = styled.div`
	font-size: 18px;
	font-weight: 500;
`;
const ResultSubtitle = styled.div`
	font-size: 14px;
	font-weight: 700;
	text-transform: capitalize;
	color: #2e8066;
`;

const RouteLink = styled(Link)`
	text-decoration: none;
`;

class SearchPage extends Component {
	state = {
		searchedValue: ""
	};

	handleOnSearch = event => {
		const { handleFetchSearchResults } = this.props;
		if (event.target.value.length > 0) {
			handleFetchSearchResults(event.target.value);
		}
		this.setState({ searchedValue: event.target.value });
	};

	render() {
		const { searchedValue } = this.state;
		const { searchResults } = this.props;
		return (
			<Fragment>
				<Container>
					<SearchBar
						type="text"
						value={searchedValue}
						onChange={this.handleOnSearch}
						placeholder="Search for your Movie/Tv show"
					/>
					<SearchButton>
						<FiSearch size="32px" style={{ color: "grey", margin: "0 8px" }} />
					</SearchButton>
				</Container>
				<div>
					{searchResults.length > 0 &&
						searchedValue.length > 0 &&
						searchResults.slice(0, 5).map(result => {
							let image = DEFAULT_USER_IMAGE;
							if (result.profile_path)
								image = `${IMAGE_BASE_URL_200}${result.profile_path}`;
							else if (result.poster_path)
								image = `${IMAGE_BASE_URL_200}${result.poster_path}`;
							// let redirect = '/search-details'
							return (
								<RouteLink to={result.media_type === 'movie' ? `/movie/${result.id}` : `/tv-show/${result.id}`} key={result.id}>
									<ResultContainer >
										<ResultImage src={image} />
										<ResultInfoWrapper>
											<ResultTitle>{result.title || result.name}</ResultTitle>
											<ResultSubtitle>
												{result.known_for_department || result.media_type}
											</ResultSubtitle>
										</ResultInfoWrapper>
									</ResultContainer>
								</RouteLink>
							);
						})}
				</div>
			</Fragment>
		);
	}
}

const mapStateToProps = ({ searches: { searchResults } }) => {
	return {
		searchResults
	};
};

const mapDispatchToProps = dispatch => {
	return {
		handleFetchSearchResults: payload => dispatch(fetchSearchResults(payload))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
