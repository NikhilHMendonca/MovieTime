import React, { Fragment } from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../HomePage/HomePageStyles";
import dayjs from "dayjs";
import { IMAGE_BASE_URL_500 } from "../../../../constants";
import Divider from "../../../../components/Divider";

const MovieName = styled.div`
	font-size: 18px;
	margin: 16px 0 4px 0;
	text-align: center;
	font-weight: 700;
	color: #212020;
`;

const MovieOverview = styled.div`
	font-size: 12px;
	margin: 8px 0;
	text-align: justify;
`;

const MovieReleaseDate = styled.div`
	font-size: 12px;
	margin: 8px 0;
`;

const MovieRuntime = styled.div`
	font-size: 12px;
	margin: 8px 0;
`;

const MovieGenre = styled.div`
	font-size: 12px;
	margin: 8px 0 16px 0;
	text-align: center;
	font-weight: 600;
	color: grey;
`;

const MoviePopularity = styled.div`
	font-size: 12px;
	margin: 8px 0;
`;

const MovieImage = styled.div`
	width: 135px;
	height: 200px;
	background-image: ${({ url }) => `url(${url})`};
	background-position: center;
	background-repeat: no-repeat;
	background-size: contain;
	position: absolute;
	top: -185px;
	left: 0;
	right: 0;
	margin: 0 auto;
	border-radius: 10px;
`;

const MovieInfo = ({ movie }) => {
	return (
		<Fragment>
			<MovieImage url={`${IMAGE_BASE_URL_500}${movie.poster_path}`} />
			<MovieName>{movie.title}</MovieName>
			<MovieGenre>
				{movie.genres.map(genre => genre.name).join(" • ")}
			</MovieGenre>
			<SectionTitle>Overview</SectionTitle>
			<MovieOverview>{movie.overview}</MovieOverview>
			<MovieReleaseDate>
				Release date: {dayjs(movie.release_date).format("DD MMMM YYYY")}
			</MovieReleaseDate>
			<MovieRuntime>Duration: {movie.runtime} mins</MovieRuntime>
			<MoviePopularity>Rating: {movie.vote_average}</MoviePopularity>
			<Divider />
		</Fragment>
	);
};

export default MovieInfo;
