import React, { Fragment } from "react";
import FormGroup from "@material-ui/core/FormGroup";
import { connect } from "react-redux";
import { AppState } from "../../store";

import { HeadLine, Wrapper, StepsWrapper } from "./styled";

import Input from "../../components/Input";
import StageHeadline from "./StageHeadline";

const StartupProgress = ({ stages }) => {
	return (
		<Wrapper>
			<HeadLine>My startup Progress</HeadLine>
			{stages.map((stage, stageId) => {
				return (
					<Fragment key={stageId}>
						<StageHeadline
							completed={true}
							id={stage.id}
							stageName={stage.stageName}
						/>
						<StepsWrapper>
							<FormGroup>
								{stage.steps.map((step, stepId) => {
									return (
										<Fragment key={stepId}>
											<Input
												stageId={stageId}
												stepId={stepId}
												stages={stages}
												label={step?.stepName}
												type='checkbox'
												checked={step?.checked}
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

export default connect(mapStateToProps)(StartupProgress);
