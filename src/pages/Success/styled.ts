import styled from "styled-components";
import { theme } from "../../common/theme";

export const Wrapper = styled.div`
	width: 50%;
	margin: 20rem auto;
	background-color: white;
	height: auto;
	padding: 5rem;
	display: flex;
	text-align: center;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	border-radius: ${theme.radius.basic};
	@media (max-width: 550px) {
		width: 90%;
		display: block;
		padding: 3rem 0 0 0;
	}
`;
export const ContentWrapper = styled.div`
	margin: 2rem;
`;
export const StyledButton = styled.button`
	padding: 2rem 6rem;
	letter-spacing: 0.2rem;
	border: none;
	background-color: ${theme.color.primary};
	color: white;
	outline: none;
	border-radius: ${theme.radius.basic};
`;
