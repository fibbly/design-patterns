import { User, NullUser } from "patterns/nullObject";
import UserBuilder, { Address } from "patterns/builder";
import logger from "patterns/singleton";
import Calculator, {
	AddCommand,
	SubtractCommand,
	MultiplyCommand,
	DivideCommand,
	AddThenMultiplyCommand,
} from "patterns/command";
import { getUsers, getUserPosts } from "patterns/facade";
import AreaCalculator, {
	Circle,
	Square,
	SumCalculatorOutputter,
} from "principles/singleResponsibility";

/**
 * Null Object Pattern
 */
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

/**
 * Builder Pattern
 */
const user = new UserBuilder("Bob")
	.setAge(40)
	.setAddress(new Address(12345, "123 Main St."))
	.setPhone(1234567890);

console.log(user);

/**
 * Singleton Pattern
 */
logger.printLogCount();
logger.log("First File");
logger.printLogCount();
logger.log("Second File");
logger.printLogCount();

/**
 * Command Pattern
 */
const calculator = new Calculator();
calculator.executeCommand(new AddCommand(10));
console.log(calculator.value);
calculator.executeCommand(new SubtractCommand(5));
console.log(calculator.value);
calculator.executeCommand(new MultiplyCommand(10));
console.log(calculator.value);
calculator.executeCommand(new DivideCommand(2));
console.log(calculator.value);
calculator.executeCommand(new AddThenMultiplyCommand(2, 2));
console.log(calculator.value);

/**
 * Facade Pattern
 */
type FacadeUser = {
	id: string | number;
	name: string;
};

getUsers().then((users: []) => {
	users.forEach((user: FacadeUser) => {
		getUserPosts(user.id).then((posts: []) => {
			console.log(`${user.name} has ${posts.length} posts`);
		});
	});
});

/**
 * Single Responsibility Principle
 */
const shapes = [new Circle(2), new Square(5), new Square(6)];
const areas = new AreaCalculator(shapes);
const output = new SumCalculatorOutputter(areas);
console.log(output.toJSON());

/**
 * Open-Closed Principle
 */
