import React, { FC, InputHTMLAttributes, useState } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import { CheckboxWrapper, StyledInput, Label } from "./styled";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { connect } from "react-redux";
import { AppState } from "../../store";
import { updateStages, StagesAction } from "../../store/stages/actions";
import { StageType } from "../../common/types";

// type Props = InputHTMLAttributes<HTMLInputElement> & {
// 	label: string;
// 	name?: string;
// 	checked: boolean;
// 	id: number | string;
// 	checkSteps: (payload: boolean, id: number | string) => void;
// };

type Props = {
	label: string;
	name?: string;
	checked: boolean;
	stages: Array<StageType>;
	stageId: number;
	stepId: number;
	type: string;
	updateStages: (
		stages: Array<StageType>,
		checked: boolean,
		stageId: number,
		stepId: number
	) => void;
};

const Input: FC<Props> = ({
	label,
	name,
	type = "text",
	checked,
	stageId,
	stepId,
	stages,
	updateStages,
}) => {
	// const [isChecked, setIsChecked] = useState(true);

	const handleChange = (event) => {
		updateStages(stages, event.target.checked, stageId, stepId);
	};

	return (
		<>
			{type === "checkbox" ? (
				<CheckboxWrapper>
					<div
						style={{
							paddingLeft: "10px",
						}}
					>
						<Checkbox
							style={{ margin: 0, transform: "scale(1.5)" }}
							checked={checked}
							onChange={handleChange}
							name='checkbox'
							color='primary'
						/>
						<Label>{label}</Label>
					</div>
				</CheckboxWrapper>
			) : (
				<StyledInput id={name} type={type} />
			)}
		</>
	);
};

export default connect(null, { updateStages })(Input);
