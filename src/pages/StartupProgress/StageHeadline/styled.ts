import styled from "styled-components";
import { theme } from "../../../common/theme";

export const CheckedImg = styled.img`
	height: 3.5rem;
	float: right;
	position: relative;
	top: -4rem;
	left: -1rem;
`;

export const StageNumber = styled.span`
	background-color: ${theme.color.primary};
	color: white;
	margin-right: 10px;
	width: 45px;
	height: 45px;
	border-radius: 50%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	float: left;
	font-weight: bold;
`;
export const Stage = styled.li`
	font-size: ${theme.fontSize.xxLarge};
	margin: 2.5rem 0 0 7rem;
	/* background-color: red; */
	font-weight: bold;
`;
