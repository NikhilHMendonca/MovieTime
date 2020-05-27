import React from "react";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
    from {bottom: 0; opacity: 0;}
    to {bottom: 16px; opacity: 1;}
`;

const fadeOut = keyframes`
    from {bottom: 16px; opacity: 1;}
    to {bottom: 0; opacity: 0;}
`;

const Container = styled.div`
	position: fixed;
	bottom: 16px;
	left: 16px;
	width: calc(100% - 64px);
	padding: 16px;
	background-color: rgba(0, 0, 0, 0.9);
	color: #fff;
	border-radius: 4px;
	z-index: 1000;
	font-size: 12px;
	-webkit-animation: ${fadeIn} 0.5s, ${fadeOut} 0.5s 4s;
	animation: ${fadeIn} 0.5s, ${fadeOut} 0.5s 4s;
`;

const Snackbar = ({ message }) => <Container>{message}</Container>;

export default Snackbar;
