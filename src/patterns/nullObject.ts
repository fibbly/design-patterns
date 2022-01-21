interface IUser {
	id: string | number;
	username: string;
	isAuthorized: () => boolean;
}

export class User implements IUser {
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

export class NullUser implements IUser {
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
