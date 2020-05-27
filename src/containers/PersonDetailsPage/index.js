import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { fetchPersonDetails, fetchPersonMovies } from "./actions";
import styled from "styled-components";
import { IMAGE_BASE_URL_200, DEFAULT_USER_IMAGE } from "../../constants";
import dayjs from "dayjs";
import SectionTitle from "../../components/SectionTitle";
import Divider from "../../components/Divider";
import Card from "../../components/Card";
import HorizontalScrollWrapper from "../../components/HorizontalScrollWrapper";
import CircularLoader from "../../components/CircularLoader";

const PersonImage = styled.div`
	width: 150px;
	height: 150px;
	border-radius: 50%;
	border: 5px solid #fff;
	margin: 0 auto;
	background-image: ${({ src }) =>
		`url(${IMAGE_BASE_URL_200}${src})` || `url(${DEFAULT_USER_IMAGE})`};
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
`;

const BPIWrapper = styled.div`
	overflow: hidden;
`;

const BackdropPersonImage = styled.div`
	width: 100%;
	height: 200px;
	background-image: ${({ src }) =>
		`url(${IMAGE_BASE_URL_200}${src})` || `url(${DEFAULT_USER_IMAGE})`};
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	filter: blur(30px);
`;

const Wrapper = styled.div`
	position: absolute;
	top: 120px;
	left: 0;
	right: 0;
	padding: 8px 8px 72px 8px;
`;

const PersonName = styled.div`
	text-align: center;
	color: red;
	font-size: 20px;
	font-weight: 500;
`;

const PersonBirthday = styled.div`
	font-size: 14px;
	font-weight: 400;
	margin: 8px 0;
`;

const PersonBiography = styled.div`
	font-size: 12px;
	font-weight: 400;
`;

const PersonKFD = styled.div`
	font-size: 14px;
	font-weight: 500;
	color: grey;
	margin: 8px 0 24px 0;
	text-align: center;
`;

const PersonPopularity = styled.div`
	font-size: 14px;
	font-weight: 400;
	margin: 8px 0;
`;

const PersonPOB = styled.div`
	font-size: 14px;
	font-weight: 400;
	margin: 8px 0;
`;

class ActorDetailsPage extends Component {
	componentDidMount() {
		const {
			handleFetchPersonDetails,
			handleFetchPersonMovies,
			match: {
				params: { personId }
			}
		} = this.props;
		handleFetchPersonDetails(personId);
		handleFetchPersonMovies();
	}

	render() {
		const { person, personMovies, isFetchingPersonDetails } = this.props;
		const movies =
			Object.keys(personMovies).length > 0 &&
			personMovies.cast &&
			personMovies.cast.length > 0 &&
			personMovies.cast.sort((a, b) => {
				if (a.vote_average < b.vote_average) return 1;
				if (a.vote_average > b.vote_average) return -1;
				else return 0;
			});
		return (
			<Fragment>
				{!isFetchingPersonDetails && Object.keys(person).length > 0 ? (
					<div>
						<BPIWrapper>
							{person.profile_path && (
								<BackdropPersonImage
									src={person.profile_path}
								></BackdropPersonImage>
							)}
						</BPIWrapper>
						<Wrapper>
							{person.profile_path && (
								<PersonImage src={person.profile_path}></PersonImage>
							)}
							<PersonName>{person.name}</PersonName>
							<PersonKFD>{person.known_for_department}</PersonKFD>
							<PersonBirthday>
								Date of Birth: {dayjs(person.birthday).format("DD MMM YYYY")}
							</PersonBirthday>
							<PersonPopularity>
								Popularity: {person.popularity}
							</PersonPopularity>
							<PersonPOB>Place of Birth: {person.place_of_birth}</PersonPOB>
							<Divider />
							<SectionTitle>Biography</SectionTitle>
							<PersonBiography>{person.biography}</PersonBiography>
							<Divider />
							{movies && movies.length > 0 && (
								<Fragment>
									<SectionTitle>Movies</SectionTitle>
									<HorizontalScrollWrapper>
										{personMovies.cast.map(movie => (
											<Card redirectTo="/movie" format={movie} key={movie.id} />
										))}
									</HorizontalScrollWrapper>
								</Fragment>
							)}
						</Wrapper>
					</div>
				) : (
					<CircularLoader centered />
				)}
			</Fragment>
		);
	}
}

const mapStateToProps = ({
	personDetails: { person, isFetchingPersonDetails, personMovies }
}) => {
	return {
		person,
		isFetchingPersonDetails,
		personMovies
	};
};

const mapDispatchToProps = dispatch => {
	return {
		handleFetchPersonDetails: payload => dispatch(fetchPersonDetails(payload)),
		handleFetchPersonMovies: () => dispatch(fetchPersonMovies())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ActorDetailsPage);
