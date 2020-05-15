import React, { Fragment } from "react";
import Card from "../Card";
import SectionTitle from "../SectionTitle";
import Wrapper from "../HorizontalScrollWrapper";

const SimilarContent = ({ similarContent, title, redirectTo }) => {
	return (
		<Wrapper>
			{similarContent.length > 0 && (
				<Fragment>
					<SectionTitle>{title}</SectionTitle>
					{similarContent.map(content => (
						<Card
							format={content}
							redirectTo={redirectTo || "/movie"}
							key={content.id}
						/>
					))}
				</Fragment>
			)}
		</Wrapper>
	);
};

export default SimilarContent;
