interface ILogger {
	instance?: Logger;
	logs?: string[];
	log: (message: string) => void;
	printLogCount: () => void;
}

class Logger implements ILogger {
	private static instance?: Logger;
	logs?: string[];

	private constructor() {
		if (!Logger.instance) {
			this.logs = [];
		}
	}

	public static getInstance(): Logger {
		if (!Logger.instance) {
			Logger.instance = new Logger();
		}
		return Logger.instance;
	}

	public log(message: string) {
		this.logs?.push(message);
		console.log(`LOG: ${message}`);
	}

	public printLogCount() {
		console.log(`${this.logs?.length} logs`);
	}
}

const logger = Logger.getInstance();
Object.freeze(logger);
export default logger;
