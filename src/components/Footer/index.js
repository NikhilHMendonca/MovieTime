import React from "react";
import styled from "styled-components";
import { TMDB_LOGO } from "../../constants";

const Container = styled.div`
	display: flex;
	justify-content: center;
	padding: 16px 0 60px 0;
	font-size: 14px;
`;

const Logo = styled.img`
	width: 100px;
	margin: 0 8px;
`;

const Footer = () => {
	return (
		<Container>
			Proud user of <Logo src={TMDB_LOGO} alt="TMDB Logo" />
		</Container>
	);
};

export default Footer;
