import axios from "axios";

function getUsers() {
	return getFetch("https://jsonplaceholder.typicode.com/users");
}

function getUserPosts(userId: string | number) {
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

/**
 * Facade Pattern
 */
type FacadeUser = {
	id: string | number;
	name: string;
};

export default function facadePattern() {
	getUsers().then((users: []) => {
		users.forEach((user: FacadeUser) => {
			getUserPosts(user.id).then((posts: []) => {
				console.log(`${user.name} has ${posts.length} posts`);
			});
		});
	});
}
