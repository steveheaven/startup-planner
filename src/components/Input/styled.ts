import styled from "styled-components";

import { theme } from "../../common/theme";

export const CheckboxWrapper = styled.div`
	width: auto;
`;

export const StyledInput = styled.input`
	border-radius: ${theme.radius.basic};
	font-size: ${theme.fontSize.medium};
	font-weight: 100;
	padding: 1rem 1.2rem;
`;

export const Label = styled.button`
	font-size: ${theme.fontSize.medium};
	margin-bottom: 0.6rem;
	background-color: transparent;
	border: none;
	outline: none;
`;
