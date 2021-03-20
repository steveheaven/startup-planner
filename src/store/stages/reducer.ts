import { StageType } from "../../common/types";
import { UPDATE_STAGES, StagesAction } from "./actions";
import { List } from "immutable";

type StageState = Iterable<StageType>;

const initialState = [
	{
		id: 1,
		stageName: "Foundation",
		steps: [
			{ id: 0, stepName: "Setup virtual office", checked: false },
			{ id: 1, stepName: "Set mission & vison", checked: false },
			{ id: 2, stepName: "Select business name", checked: false },
			{ id: 3, stepName: "Buy domains", checked: false },
		],
		completed: false,
	},
	{
		id: 2,
		stageName: "Discovery",
		steps: [
			{ id: 0, stepName: "Create roadmap", checked: false },
			{ id: 1, stepName: "Competitor analysis", checked: false },
		],
		completed: false,
	},
	{
		id: 3,
		stageName: "Delivery",
		steps: [
			{ id: 0, stepName: "Release marketing website", checked: false },
			{ id: 1, stepName: "Release MVP", checked: false },
		],
		completed: false,
	},
];

const reducer = (
	state: StageState = initialState,
	action: StagesAction
): StageState => {
	switch (action.type) {
		case UPDATE_STAGES:
			const { stageId, stepId, checked } = action.payload;
			const previousState = List(state);
			const updatedState = previousState.setIn(
				[stageId, "steps", stepId, "checked"],
				checked
			);
			return updatedState;
		default:
			return state;
	}
};

export default reducer;
