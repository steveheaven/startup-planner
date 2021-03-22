import configs from "../../src/config";

export default async function getSuccessData(req, res) {
	const response = await fetch(configs.apiUrl, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	});
	console.log(response.body);
	await res.json();
}
