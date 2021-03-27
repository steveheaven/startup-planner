import configs from "../config";
// import type { NextApiRequest, NextApiResponse } from "next";

export default async function getSuccessData() {
	// req: NextApiRequest,
	// res: NextApiResponse
	const response = await fetch(configs.apiUrl, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	});
	console.log(response.body);
	return response.body;
}
