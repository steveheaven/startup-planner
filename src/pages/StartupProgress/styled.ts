import styled from "styled-components";
import { theme } from "../../common//theme";

export const Wrapper = styled.ul`
	background-color: white;
	padding: 2rem 4rem 4rem 4rem;
	height: auto;
	width: 40rem;
	border-radius: ${theme.radius.basic};
`;
export const HeadLine = styled.h2`
	text-align: left;
	font-size: ${theme.fontSize.xxLarge};
`;
export const StepsWrapper = styled.div`
	padding: 1rem 0;
	position: relative;
	left: -1rem;
	top: 2rem;
`;
