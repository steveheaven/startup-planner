import React, { FC, useState } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import { CheckboxWrapper, StyledInput, Label } from "./styled";
import { connect } from "react-redux";
import { updateStages } from "../../store/stages/actions";
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
	stages: Iterable<StageType>;
	stageId: number;
	stepId: number;
	type: string;
	disabled: boolean;
	updateStages: (
		stages: Iterable<StageType>,
		isLocalStorage: boolean,
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
	disabled,
}) => {
	// the initial state of checkbox has to be true to prevent initial double-click on checkbox to change the value
	const [isChecked, setIsChecked] = useState(true);

	const handleChange = () => {
		// calling action with parameters to change the redux state
		updateStages(stages, false, isChecked, stageId, stepId);
	};

	return (
		<>
			{type === "checkbox" ? (
				<CheckboxWrapper>
					<div
						style={{
							paddingLeft: "10px",
						}}
						onClick={() => {
							if (!disabled) {
								setIsChecked(!isChecked);
								handleChange();
							}
						}}
					>
						<Checkbox
							style={{ margin: 0, transform: "scale(1.5)" }}
							checked={checked}
							onChange={handleChange}
							name='checkbox'
							color='primary'
							disabled={disabled}
						/>
						<Label disabled={disabled}>{label}</Label>
					</div>
				</CheckboxWrapper>
			) : (
				<StyledInput id={name} type={type} />
			)}
		</>
	);
};

export default connect(null, { updateStages })(Input);
