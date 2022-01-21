import axios from "axios";

export function getUsers() {
	return getFetch("https://jsonplaceholder.typicode.com/users");
}

export function getUserPosts(userId: string | number) {
	return getFetch("https://jsonplaceholder.typicode.com/posts", {
		userId: userId,
	});
}

function getFetch(url: string, params: Record<string, unknown> = {}) {
	return axios({
		url: url,
		method: "GET",
		params: params,
		headers: {
			"Content-Type": "application/json",
		},
	}).then((res) => res.data);
}
