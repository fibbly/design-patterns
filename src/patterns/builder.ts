interface IAddress {
	zip: string | number;
	street: string;
}

export class Address implements IAddress {
	zip;
	street;

	constructor(zip: string | number, street: string) {
		this.zip = zip;
		this.street = street;
	}
}

interface IUserDetails {
	age: number;
	phone: number | string;
	address: Address;
}

interface IUser {
	username: string;
	age?: number;
	phone?: number | string;
	address?: Address;
}

class User implements IUser {
	username;
	age?: number | undefined;
	phone?: string | number | undefined;
	address?: Address | undefined;

	constructor(username: string) {
		this.username = username;
	}
}

interface IUserBuilder {
	user: User;
	setAge: (age: IUserDetails["age"]) => UserBuilder;
	setPhone: (phone: IUserDetails["phone"]) => UserBuilder;
	setAddress: (address: IUserDetails["address"]) => UserBuilder;
}

export default class UserBuilder implements IUserBuilder {
	user: User;

	constructor(username: string) {
		this.user = new User(username);
	}

	public setAge(age: number) {
		this.user.age = age;
		return this;
	}

	public setPhone(phone: string | number) {
		this.user.phone = phone;
		return this;
	}

	public setAddress(address: Address) {
		this.user.address = address;
		return this;
	}
}
