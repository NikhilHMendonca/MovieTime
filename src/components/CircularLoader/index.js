import React from 'react';
import styled, { keyframes } from 'styled-components'

const Spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  `;

const Loader = styled.div`
    border: 4px solid #f3f3f3;
    border-radius: 50%;
    border-top: 4px solid #2e8066;
    width: 20px;
    height: 20px;
    -webkit-animation: ${Spin} 1s linear infinite; /* Safari */
    animation: ${Spin} 1s linear infinite;
    margin: 0 auto;
    position: ${({ centered }) => (centered ? 'absolute' : '')};
	top: ${({ centered }) => (centered ? '50%' : '')};
	left: ${({ centered }) => (centered ? '0' : '')};
	right: ${({ centered }) => (centered ? '0' : '')};
    transform: ${({ centered }) => (centered ? 'translateY(-50%)' : '')};
`;


const CircularLoader = ({ centered }) => {
    return (
        <Loader centered={centered} />
    )
}

export default CircularLoader;