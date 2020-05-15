import React, { Fragment } from "react";
import Cast from "../Cast";
import SectionTitle from "../SectionTitle";
import styled from "styled-components";
import Divider from "../Divider";

const Container = styled.div`
	width: 100%;
	overflow-x: scroll;
	white-space: nowrap;
`;

const Casts = ({ casts, title }) => {
	return (
		<Fragment>
			{casts.length > 0 && (
				<Fragment>
					<SectionTitle>{title || "Casts"}</SectionTitle>
					<Container>
						{casts.map(cast => (
							<Cast cast={cast} key={cast.cast_id || cast.id} />
						))}
					</Container>
					<Divider />
				</Fragment>
			)}
		</Fragment>
	);
};

export default Casts;
