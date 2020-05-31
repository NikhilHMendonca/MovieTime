import React from "react";
import styled from "styled-components";
import SectionTitle from "../../../../components/SectionTitle";
import { MdTrendingUp } from "react-icons/md";
import { IMAGE_BASE_URL_200 } from "../../../../constants";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
	padding: 0 0 60px 0;
`;

const Container = styled.div`
	margin: 16px 0;
	display: flex;
	justify-content: flex-start;
`;

const TopicImage = styled.div`
	width: 50px;
	height: 70px;
	background-image: ${({ src }) => `url(${IMAGE_BASE_URL_200}/${src})`};
	background-position: center;
	background-repeat: no-repeat;
	background-size: contain;
`;

const TopicTitle = styled.div`
	font-size: 16px;
	font-weight: 600;
	color: #104810;
	margin: 0 16px;
`;

const TopicCategory = styled.div`
	font-size: 14px;
	font-weight: 400;
	color: #293829;
	margin: 0 16px;
	text-transform: capitalize;
`;

const RouteLink = styled(Link)`
	text-decoration: none;
`;

const Trending = ({ trending }) => {
	return (
		<Wrapper>
			<SectionTitle>Trending</SectionTitle>
			<div>
				{trending.length > 0 &&
					trending.slice(0, 5).map(topic => {
						let redirectTo = "/movie";
						if (topic.media_type === "tv") redirectTo = "/tv-show";
						else if (topic.media_type === "person") redirectTo = "/person";
						return (
							<RouteLink to={`${redirectTo}/${topic.id}`} key={topic.id}>
								<Container>
									<TopicImage src={topic.poster_path} />
									<div>
										<TopicTitle>{topic.title || topic.name}</TopicTitle>
										<TopicCategory>{topic.media_type}</TopicCategory>
									</div>
									<MdTrendingUp size="22px" color={"#2e8066"} />
								</Container>
							</RouteLink>
						);
					})}
			</div>
		</Wrapper>
	);
};

export default Trending;
