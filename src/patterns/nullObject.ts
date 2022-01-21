interface IUser {
	id: string | number;
	username: string;
	isAuthorized: () => boolean;
}

class User implements IUser {
	id: string | number;
	username: string;

	constructor(id: string | number, username: string) {
		this.id = id;
		this.username = username;
	}

	isAuthorized() {
		return this.username === "Bob";
	}
}

class NullUser implements IUser {
	id: string | number;
	username: string;

	constructor() {
		this.id = -1;
		this.username = "Guest";
	}

	isAuthorized() {
		return false;
	}
}

/**
 * Null Object Pattern
 */
export default function nullObjectPattern() {
	const users = [new User(1, "Bob"), new User(2, "John")];

	function getUser(id: string | number) {
		const user = users.find((user) => user.id === id);
		return user == null ? new NullUser() : user;
	}

	const user1 = getUser(1);
	console.log(
		`Hello ${user1.username}! ${
			user1.isAuthorized() ? "You have access" : "You do not have access"
		}`
	);

	const user2 = getUser(2);
	console.log(
		`Hello ${user2.username}! ${
			user2.isAuthorized() ? "You have access" : "You do not have access"
		}`
	);
}
