export type StageType = {
	id: number;
	stageName?: string;
	steps?: Array<StepType>;
	stageCompleted?: boolean;
	disabled?: boolean;
	stageNumber?: number;
	checked?: boolean;
};
export type StepType = {
	id: number;
	stepName?: string;
	checked: boolean;
};
