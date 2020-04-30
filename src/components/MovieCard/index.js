import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Card = styled.div`
	display: inline-block;
	width: 120px;
	margin: 0 16px 0 0;
	overflow: hidden;
`;

const MovieImage = styled.div`
	height: 170px;
	width: 100%;
	background-image: ${({ image }) => `url(${image})}`};
	background-size: 100% 100%;
	background-repeat: no-repeat;
	background-position: center;
	border-radius: 6px;
`;

const MovieInfo = styled.div`
	color: grey;
	font-weight: 500;
`;

const MovieName = styled.div`
	font-weight: 500;
	font-size: 12px;
	margin: 4px 0 2px 0;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
`;

const MovieRating = styled.div`
	font-weight: 600;
	font-size: 10px;
	color: #9c9c9c;
`;

const MovieCard = ({ movie }) => {
	return (
		<Link to={`/movie/${movie.id}`}>
			<Card>
				<MovieImage
					image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
				/>
				<MovieInfo>
					<MovieName>{movie.title}</MovieName>
					<MovieRating>{movie.vote_average}</MovieRating>
				</MovieInfo>
			</Card>
		</Link>
	);
};

export default MovieCard;
