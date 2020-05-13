import React, { Fragment } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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

const Title = styled.div`
	font-size: 18px;
	font-weight: 500;
	color: #141d2b;
	margin: 16px 0;
`;

const RouteLink = styled(Link)`
	text-decoration: none;
	width: 100%;
`;

const DummySearchBar = styled.div`
	padding: 12px 8px;
	color: grey;
	border-radius: 8px;
`;

const Header = () => {
	return (
		<Fragment>
			<Fragment>
				<Title>MovieTime</Title>
				<Container>
					<RouteLink to="/search">
						<DummySearchBar>Search for Movies / TV Shows</DummySearchBar>
					</RouteLink>
				</Container>
			</Fragment>
		</Fragment>
	);
};

export default Header;
