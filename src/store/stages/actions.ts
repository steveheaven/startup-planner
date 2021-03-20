import { ThunkDispatch } from "redux-thunk";
import { StageType } from "../../common/types";

export const UPDATE_STAGES = "stages/UPDATE_STAGES" as "stages/UPDATE_STAGES";

export type Dispatch = ThunkDispatch<{}, {}, StagesAction>;

export const updateStages = (
	stages: Array<StageType>,
	checked,
	stageId,
	stepId
) => ({
	type: UPDATE_STAGES,
	payload: { stages, checked, stageId, stepId },
});

export type StagesAction = ReturnType<typeof updateStages>;
