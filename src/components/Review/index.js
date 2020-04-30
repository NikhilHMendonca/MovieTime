import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    margin: 16px 0;
`;

const Author = styled.div`
    margin: 8px 0;
    font-size: 12px;
    font-weight: 700;
    `;
    
const Content = styled.div`    
    font-size: 10px;
`;

const Review = ({ review }) => {
    return (
        <Container>
            <Author>{review.author}</Author>
            <Content>{review.content}</Content>
        </Container>
    )
}

export default Review;