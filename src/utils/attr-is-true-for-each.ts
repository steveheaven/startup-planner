import { StageType } from "../common/types";

// checks if every attribute of inserted array is true based on which attribute you want to check
export const attrIsTrueForEach = (
	arr: Array<any>,
	completedDecision: "stages" | "step"
): boolean => {
	if (completedDecision === "stages") {
		return arr.every((el) => {
			return el.stageCompleted === true;
		});
	} else if (completedDecision === "step") {
		return arr.every((el) => {
			return el.checked === true;
		});
	}
};
