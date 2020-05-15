import React, { Fragment } from "react";
import SectionTitle from "../SectionTitle";
import Review from "../Review";
import Divider from "../Divider";

const Reviews = ({ reviews, title }) => {
	return (
		<div>
			{reviews.length > 0 && (
				<Fragment>
					<SectionTitle>{title || "Reviews"}</SectionTitle>
					{reviews.map(review => (
						<Review review={review} key={review.id} />
					))}
					<Divider />
				</Fragment>
			)}
		</div>
	);
};

export default Reviews;
