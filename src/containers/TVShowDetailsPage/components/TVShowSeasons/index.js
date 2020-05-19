import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Divider from "../../../../components/Divider";
import SectionTitle from "../../../../components/SectionTitle";
import styled from "styled-components";

const Container = styled.div`
	margin: 16px 0;
`;

const TVShowSeasons = ({ tvShow }) => {
	return (
		<Container>
			<SectionTitle>Seasons</SectionTitle>
			<Tabs>
				<TabList style={{ overflowX: "scroll", whiteSpace: "nowrap" }}>
					{tvShow.seasons.map(season => (
						<Tab
							style={{
								padding: 12,
								color: "#2e8066",
								fontWeight: 600
							}}
							key={`Tab-${season.id}`}
						>
							{season.name}
						</Tab>
					))}
				</TabList>
				{tvShow.seasons.map(season => (
					<TabPanel style={{ fontSize: 12 }} key={`TabPanel-${season.id}`}>
						{season.overview}
					</TabPanel>
				))}
				<Divider />
			</Tabs>
		</Container>
	);
};

export default TVShowSeasons;
