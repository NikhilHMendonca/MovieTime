import React from 'react';
import styled from 'styled-components';

const Author = styled.div`
    font-size: 12px;
    font-weight: 700;
    `;
    
const Content = styled.div`    
    font-size: 10px;
`;

const Review = ({ review }) => {
    return (
        <div>
            <Author>{review.author}</Author>
            <Content>{review.content}</Content>
        </div>
    )
}

export default Review;