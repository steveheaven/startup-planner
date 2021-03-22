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

type Props = {
	stages?: any;
	updateStages?: typeof updateStages;
	returnData?: any;
};

export const Success: FC<Props> = ({ stages, updateStages, returnData }) => {
	// console.log(returnData);
	// const router = useRouter();
	const [randomData, setRandomData] = useState(null);
	const [loading, setLoading] = useState(true);

	// const onClickHandler = useCallback((e) => {
	// 	localStorage.removeItem("stagesData");
	// 	Router.push({
	// 		pathname: "/",
	// 	});
	// });
	const onClickHandler = useCallback((e) => {
		// updateStages(stages, false);
		localStorage.removeItem("stagesData");
		Router.reload();
	}, []);

	useEffect(() => {
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
						{/* <Link href='/'> */}
						<StyledButton onClick={onClickHandler}>NEW PROJECT</StyledButton>
						{/* </Link> */}
					</ContentWrapper>
				</>
			)}
		</Wrapper>
	);
};

const mapStateToProps = (state: AppState) => ({
	stages: state.stages,
});

export default connect(mapStateToProps, { updateStages })(Success);

export const getServerSideProps: GetStaticProps = async (context) => {
	console.log("trigged");
	// const url = "https://uselessfacts.jsph.pl/random.json";
	// const config = {
	// 	headers: {
	// 		"Content-Type": "application/json",
	// 	},
	// };
	// const res = await fetch(url, config).then((res) => res.json());
	// console.log(res);
	const getData = async () => {
		const url = "https://uselessfacts.jsph.pl/random.json";
		const config = {
			headers: {
				"Content-Type": "application/json",
			},
		};
		const res = await fetch(url, config).then((res) => res.json());
		return res;
	};
	let returnData;
	getData()
		.then((res) => {
			console.log(res);
			returnData = res;
		})
		.catch((err) => console.log(err));
	return {
		props: {
			returnData,
		},
	};
};
