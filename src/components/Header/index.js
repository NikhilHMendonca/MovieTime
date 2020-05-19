import React from "react";
import styled from "styled-components";
import VideoCamera from "../../images/video-cameras.png";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
	display: flex;
	align-items: center;
`;

const Title = styled.div`
	font-size: 24px;
	font-weight: 600;
	color: #46bd97;
	margin: 16px 4px;
`;

const RouteLink = styled(Link)`
	text-decoration: none;
`;

const Header = () => {
	return (
		<RouteLink to="/">
			<Wrapper>
				<img src={VideoCamera} height="40px" alt="MovieTime Logo" />
				<Title>MovieTime</Title>
			</Wrapper>
		</RouteLink>
	);
};

export default Header;
