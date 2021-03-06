import React from "react";
import styled from "styled-components";
import { IMAGE_BASE_URL_200, DEFAULT_USER_IMAGE } from "../../constants";
import { Link } from "react-router-dom";

const Container = styled.div`
	display: inline-block;
	vertical-align: top;
	margin: 8px;
	text-align: center;
`;

const Character = styled.div`
	font-size: 12px;
	font-weight: 700;
	white-space: normal;
	max-width: 100px;
	color: #000;
`;

const Name = styled.div`
	font-size: 10px;
	font-weight: 500;
	margin: 4px 0;
	color: #000;
`;

const Profile = styled.div`
	height: 100px;
	width: 100px;
	background-image: ${({ url }) =>
		url ? `url(${IMAGE_BASE_URL_200}/${url})` : `url(${DEFAULT_USER_IMAGE})`};
	background-repeat: no-repeat;
	background-size: contain;
	background-position: center;
	border-radius: 50%;
	border: 1px solid #347768;
`;

const RouteLink = styled(Link)`
	text-decoration: none;
`;

const Cast = ({ cast }) => {
	return (
		<RouteLink to={`/person/${cast.id}`}>
			<Container>
				<Profile url={cast.profile_path} />
				<Character>{cast.character}</Character>
				<Name>{cast.name}</Name>
			</Container>
		</RouteLink>
	);
};

export default Cast;
