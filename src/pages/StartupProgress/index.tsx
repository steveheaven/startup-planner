import React, { Fragment, useEffect, FC } from "react";
import FormGroup from "@material-ui/core/FormGroup";
import { connect } from "react-redux";
import { AppState } from "../../store";
import { HeadLine, Wrapper, StepsWrapper } from "./styled";
import Input from "../../components/Input";
import StageHeadline from "./StageHeadline";
import { attrIsTrueForEach } from "../../utils/attr-is-true-for-each";
import { updateStages } from "../../store/stages/actions";
import { StageType } from "../../common/types";
import { useRouter } from "next/router";
import { Success } from "../Success";

type Props = {
	stages: Array<StageType>;
	updateStages: typeof updateStages;
};

const StartupProgress: FC<Props> = ({ stages, updateStages }) => {
	const router = useRouter();
	const projectIsFinished = attrIsTrueForEach(stages, "stages");

	useEffect(() => {
		const storageData = localStorage.getItem("stagesData");
		if (!!storageData) {
			updateStages(JSON.parse(storageData), true);
		}
	}, [updateStages, router, projectIsFinished]);

	return projectIsFinished ? (
		<Success />
	) : (
		<Wrapper>
			<HeadLine>My startup Progress</HeadLine>
			{stages?.map((stage, stageId) => {
				const { stageCompleted, stageName, disabled, stageNumber } = stage;

				return (
					<Fragment key={stageId}>
						<StageHeadline
							completed={stageCompleted}
							id={stageNumber}
							stageName={stageName}
						/>
						<StepsWrapper>
							<FormGroup>
								{stage.steps?.map((step, stepId) => {
									const { stepName, checked } = step;
									return (
										<Fragment key={stepId}>
											<Input
												disabled={disabled}
												stageId={stageId}
												stepId={stepId}
												stages={stages}
												label={stepName}
												type='checkbox'
												checked={checked}
											/>
										</Fragment>
									);
								})}
							</FormGroup>
						</StepsWrapper>
					</Fragment>
				);
			})}
		</Wrapper>
	);
};

const mapStateToProps = (state: AppState) => ({
	stages: state.stages,
});

export default connect(mapStateToProps, { updateStages })(StartupProgress);
