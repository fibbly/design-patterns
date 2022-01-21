import { IShape } from "./openClosed";

interface IThreeDimensionalShape {
	volume: () => number;
}

interface IManageShape {
	calculate: () => number;
}

class Square implements IShape, IManageShape {
	public area() {
		// calculate surface area of a square
		return 0;
	}

	public calculate() {
		return this.area();
	}
}

class Cuboid implements IShape, IThreeDimensionalShape, IManageShape {
	public area() {
		// calculate surface area of a cuboid
		return 0;
	}

	public volume() {
		// calculate volume of a cuboid
		return 0;
	}

	public calculate() {
		return this.area();
	}
}

/**
 * Interface Segregation Principle
 *
 * A client should never be forced to implement an interface that it doesn’t use,
 * or clients shouldn’t be forced to depend on methods they do not use.
 */

export default function () {
	console.log("Interface Segregation Principle");
}
