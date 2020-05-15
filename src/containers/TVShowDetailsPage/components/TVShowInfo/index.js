import React from "react";
import { IMAGE_BASE_URL_500 } from "../../../../constants";
import styled from "styled-components";
import dayjs from "dayjs";
import Divider from "../../../../components/Divider";

const TVShowImage = styled.div`
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

const TVShowName = styled.div`
	font-size: 20px;
	margin: 16px 0 4px 0;
	text-align: center;
	font-weight: 700;
	color: #2e8066;
`;

const TVShowOverview = styled.div`
	font-size: 12px;
	margin: 8px 0;
	text-align: justify;
`;

const TVShowDate = styled.div`
	font-size: 12px;
	margin: 8px 0;
`;

const TVShowGenre = styled.div`
	font-size: 12px;
	margin: 8px 0 16px 0;
	text-align: center;
	font-weight: 600;
	color: grey;
`;

const TVShowPopularity = styled.div`
	font-size: 12px;
	margin: 8px 0;
`;

const TVShowInfo = ({ tvShow }) => {
	return (
		<div>
			<TVShowImage url={`${IMAGE_BASE_URL_500}${tvShow.poster_path}`} />
			<TVShowName>{tvShow.name}</TVShowName>
			<TVShowGenre>
				{tvShow.genres.map(genre => genre.name).join(" • ")}
			</TVShowGenre>
			<TVShowOverview>{tvShow.overview}</TVShowOverview>
			<TVShowDate>
				First episode aired:{" "}
				{dayjs(tvShow.first_air_date).format("DD MMMM YYYY")}
			</TVShowDate>
			<TVShowDate>
				Last episode aired: {dayjs(tvShow.last_air_date).format("DD MMMM YYYY")}
			</TVShowDate>
			<TVShowDate>
				Created by: {tvShow.created_by.map(creator => creator.name)}
			</TVShowDate>
			<TVShowPopularity>Popularity: {tvShow.popularity}</TVShowPopularity>
			<TVShowDate>Vote Average: {tvShow.vote_average}</TVShowDate>
			<Divider />
		</div>
	);
};

export default TVShowInfo;
