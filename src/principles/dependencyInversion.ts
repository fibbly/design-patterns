interface IDBConnection {
	connect: () => void;
}

class MySQLConnection implements IDBConnection {
	public connect() {
		// handle database connection
		return "Database Connection";
	}
}

class PasswordReminder {
	private dbConnection: IDBConnection;

	constructor(dbConnection: IDBConnection) {
		this.dbConnection = dbConnection;
	}
}

/**
 * Dependency Inversion Principle
 *
 * Entities must depend on abstractions, not on concretions.
 * It states that the high-level module must not depend on the low-level module,
 * but they should depend on abstractions.
 */

export default function () {
	console.log("Dependency Inversion Principle");
	const dbConnection = new MySQLConnection();
	const passwordReminder = new PasswordReminder(dbConnection);
}
