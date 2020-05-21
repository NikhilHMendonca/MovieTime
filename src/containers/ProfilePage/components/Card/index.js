import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { IMAGE_BASE_URL_500 } from "../../../../constants";

const Card = styled.div`
	display: inline-block;
	width: 90px;
	margin: 0 16px 0 0;
	overflow: hidden;
`;

const FormatImage = styled.div`
	height: 120px;
	width: 100%;
	background-image: ${({ image }) => `url(${image})}`};
	background-size: 100% 100%;
	background-repeat: no-repeat;
	background-position: center;
	border-radius: 6px;
	background-color: #dedede;
`;

const FormatInfo = styled.div`
	font-weight: 500;
`;

const FormatName = styled.div`
	font-weight: 600;
	font-size: 12px;
	margin: 4px 0 2px 0;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	color: #544d4d;
`;

const FormatRating = styled.div`
	font-weight: 600;
	font-size: 10px;
	color: #9c9c9c;
`;

const MovieCard = ({ format, redirectTo }) => {
    return (
        <Link to={`${redirectTo}/${format.id}`}>
			<Card>
				<FormatImage image={`${IMAGE_BASE_URL_500}${format.poster_path}`} />
				<FormatInfo>
					<FormatName>{format.title || format.name}</FormatName>
					<FormatRating>{format.vote_average}</FormatRating>
				</FormatInfo>
			</Card>
		</Link>
    )
}

export default MovieCard;