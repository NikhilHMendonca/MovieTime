import React from 'react';
import { SectionTitle } from "../../../HomePage/HomePageStyles";
import Review from "../../../../components/Review";
import Divider from '../../../../components/Divider';


const Reviews = ({ reviews }) => {
    return (
        <div>
            <SectionTitle>Reviews</SectionTitle>
            {reviews.length > 0 &&
                reviews.map(review => (
                    <Review review={review} key={review.id} />
                ))}
            <Divider />
        </div>
    )
} 

export default Reviews;