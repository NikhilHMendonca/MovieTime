import React, { Fragment } from 'react';
import Cast from "../../../../components/Cast";
import { SectionTitle } from "../../../HomePage/HomePageStyles";
import styled from 'styled-components';
import Divider from '../../../../components/Divider';

const Container = styled.div`
width: 100%;
overflow-x: scroll;
white-space: nowrap;
`;

const Casts = ({ casts }) => {
    return (
        <Fragment>
            <SectionTitle>Cast</SectionTitle>
            <Container>
                {casts.length > 0 &&
                    casts.map(cast => <Cast cast={cast} key={cast.cast_id} />)}
            </Container>
            <Divider />
        </Fragment>
    )
}

export default Casts;