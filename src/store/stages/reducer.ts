import { StageType } from "../../common/types";
import { UPDATE_STAGES, StagesAction } from "./actions";
import { List } from "immutable";
import { attrIsTrueForEach } from "../../utils/attr-is-true-for-each";

export type StageState = Iterable<StageType>;

const initialState = [
	{
		id: 0,
		stageNumber: 1,
		stageName: "Foundation",
		steps: [
			{ id: 0, stepName: "Setup virtual office", checked: false },
			{ id: 1, stepName: "Set mission & vison", checked: false },
			{ id: 2, stepName: "Select business name", checked: false },
			{ id: 3, stepName: "Buy domains", checked: false },
		],
		stageCompleted: false,
		disabled: false,
	},
	{
		id: 1,
		stageNumber: 2,
		stageName: "Discovery",
		steps: [
			{ id: 0, stepName: "Create roadmap", checked: false },
			{ id: 1, stepName: "Competitor analysis", checked: false },
		],
		stageCompleted: false,
		disabled: true,
	},
	{
		id: 2,
		stageNumber: 3,
		stageName: "Delivery",
		steps: [
			{ id: 0, stepName: "Release marketing website", checked: false },
			{ id: 1, stepName: "Release MVP", checked: false },
		],
		stageCompleted: false,
		disabled: true,
	},
];

const reducer = (
	state: StageState = initialState,
	action: StagesAction
): StageState => {
	switch (action.type) {
		case UPDATE_STAGES:
			const {
				stageId,
				stepId,
				checked,
				isLocalStorage,
				stages,
			} = action.payload;
			const previousState = List(isLocalStorage ? stages : state);
			// update checked state for any step in any stage

			let returnData: List<StageType>;
			if (!isLocalStorage) {
				const updatedState = previousState
					.setIn([stageId, "steps", stepId, "checked"], checked)
					.toArray();
				const updatedStateList = List(updatedState);

				const setStageCompleted = (completed: boolean) => {
					return updatedStateList.setIn([stageId, "stageCompleted"], completed);
				};

				if (attrIsTrueForEach(updatedState[stageId].steps, "step")) {
					returnData =
						// if the user finishes the last stage, do not set the next stage's attribute disabled to false, it would create a new stage
						stageId < updatedState.length - 1
							? setStageCompleted(true).setIn([stageId + 1, "disabled"], false)
							: setStageCompleted(true);
				} else {
					returnData = setStageCompleted(false);
				}
				const returnDataArr = returnData.toArray();
				localStorage.setItem("stagesData", JSON.stringify(returnDataArr));
				return returnDataArr;
			}
			return previousState;
		default:
			return state;
	}
};

export default reducer;
