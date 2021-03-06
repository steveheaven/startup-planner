import React, { FC, useCallback, useEffect, useState } from "react";
import { Wrapper, ContentWrapper, StyledButton } from "./styled";
import fetch from "node-fetch";
import configs from "../../config";
import Router from "next/router";
import Spinner from "../../components/Spinner";
import { connect } from "react-redux";
import { AppState } from "../../store";
import { updateStages } from "../../store/stages/actions";
import { GetStaticProps } from "next";
import getSuccessData from "../../api/success";

type Props = {
	stages?: any;
	updateStages?: typeof updateStages;
	returnData?: any;
};

export const Success: FC<Props> = ({ stages, updateStages, returnData }) => {
	const [randomData, setRandomData] = useState(null);
	const [loading, setLoading] = useState(true);
	console.log(returnData);
	const onClickHandler = useCallback((e) => {
		localStorage.removeItem("stagesData");
		Router.reload();
	}, []);

	useEffect(() => {
		// I know, it's nasty to use normal axios call inside a component instead of SSG, nevertheless for some reason the getStaticProps function doesn't work. This should be done ASAP because of performance reasons.
		const fetchData = async () => {
			const config = {
				headers: {
					"Content-Type": "application/json",
				},
			};
			const res = await fetch(configs.apiUrl, config).then((res) => res.json());
			setRandomData(res);
			setLoading(false);
		};
		fetchData();
	}, [setRandomData]);

	return (
		<Wrapper>
			{loading ? (
				<Spinner />
			) : (
				<>
					<ContentWrapper>{randomData?.text}</ContentWrapper>
					<ContentWrapper>
						<StyledButton onClick={onClickHandler}>NEW PROJECT</StyledButton>
					</ContentWrapper>
				</>
			)}
		</Wrapper>
	);
};

export const getStaticProps: GetStaticProps = async (context) => {
	console.log("trigged");
	console.log(context);
	const returnData = await getSuccessData();
	// const url = "https://uselessfacts.jsph.pl/random.json";
	// const config = {
	// 	headers: {
	// 		"Content-Type": "application/json",
	// 	},
	// };
	// const res = await fetch(url, config).then((res) => res.json());
	// console.log(res);
	// const getData = async () => {
	// 	const url = "https://uselessfacts.jsph.pl/random.json";
	// 	const config = {
	// 		headers: {
	// 			"Content-Type": "application/json",
	// 		},
	// 	};
	// 	const res = await fetch(url, config).then((res) => res.json());
	// 	return res;
	// };
	// let returnData;
	// getData()
	// 	.then((res) => {
	// 		console.log(res);
	// 		returnData = res;
	// 	})
	// 	.catch((err) => console.log(err));
	return {
		props: {
			returnData,
		},
	};
};
function req(req: any, res: any) {
	throw new Error("Function not implemented.");
}

function res(req: (req: any, res: any) => void, res: any) {
	throw new Error("Function not implemented.");
}
const mapStateToProps = (state: AppState) => ({
	stages: state.stages,
});

export default connect(mapStateToProps, { updateStages })(Success);
