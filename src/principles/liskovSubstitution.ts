import { AreaCalculator, Shape } from "./openClosed";

class VolumeCalculator extends AreaCalculator {
	constructor(shapes: Shape[]) {
		super(shapes);
	}

	public sum(): number {
		// calculate volume of shapes
		return 0;
	}
}

/**
 * Liskov Substitution Principle
 *
 * Let q(x) be a property provable about objects of x of type T.
 * Then q(y) should be provable for objects y of type S where S is a subtype of T.
 */

export default function () {
	console.log("Liskov Substitution Principle");
}
