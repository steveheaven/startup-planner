import React, { FC } from "react";
import FormGroup from "@material-ui/core/FormGroup";
import { connect } from "react-redux";
import { AppState } from "../../../store";

import { Stage, StageNumber, CheckedImg } from "./styled";

type Props = {
	stageName: string;
	id: number;
	completed: boolean;
};

const StageHeadline: FC<Props> = ({ stageName, id, completed }) => {
	return (
		<>
			<div>
				<StageNumber>{id}</StageNumber>
				<Stage>{stageName}</Stage>
				{completed ? <CheckedImg src='checked.svg' alt='Checked' /> : null}
			</div>
		</>
	);
};

export default StageHeadline;
