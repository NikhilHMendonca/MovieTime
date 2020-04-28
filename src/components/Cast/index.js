import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: inline-block;
`;

const Character = styled.div`
    font-size: 14px;
    font-weight: 700;
`;

const Name = styled.div`
    font-size: 12px;
    font-weight: 500;
`;

const Profile = styled.div`
    height: 100px;
    width: 100px;
    background-image: ${({ url }) => `url(https://image.tmdb.org/t/p/w200${url})`};
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
`;

const Cast = ({ cast }) => {
    return (
        <Container>
            <Profile url={cast.profile_path} />
            <Character>{cast.character}</Character>
            <Name>{cast.name}</Name>
        </Container>
    )
};

export default Cast;