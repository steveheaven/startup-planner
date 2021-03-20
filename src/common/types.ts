export type StageType = {
	id: number;
	stageName?: string;
	steps: Array<StepType>;
};
export type StepType = {
	id: number;
	stepName?: string;
	checked: boolean;
};
