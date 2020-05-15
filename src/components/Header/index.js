import React, { Fragment } from "react";
import styled from "styled-components";

const Title = styled.div`
	font-size: 20px;
	font-weight: 500;
	color: #141d2b;
	margin: 16px 0;
`;

const Header = () => {
	return (
		<Fragment>
			<Title>MovieTime</Title>
		</Fragment>
	);
};

export default Header;
