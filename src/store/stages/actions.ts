import { ThunkDispatch } from "redux-thunk";
import { StageType } from "../../common/types";

export const UPDATE_STAGES = "stages/UPDATE_STAGES" as "stages/UPDATE_STAGES";

export type Dispatch = ThunkDispatch<{}, {}, StagesAction>;

export const updateStages = (
	stages?: Iterable<StageType>,
	isLocalStorage?: boolean,
	checked?: boolean,
	stageId?: number,
	stepId?: number
) => {
	return {
		type: UPDATE_STAGES,
		payload: { stages, checked, stageId, stepId, isLocalStorage },
	};
};

export type StagesAction = ReturnType<typeof updateStages>;
