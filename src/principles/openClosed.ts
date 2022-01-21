import {
	Square as SquareBase,
	Circle as CircleBase,
	SumCalculatorOutputter,
} from "./singleResponsibility";

interface IShape {
	area: () => number;
}

class Square extends SquareBase implements IShape {
	constructor(length: number) {
		super(length);
	}

	public area() {
		return Math.pow(this.length, 2);
	}
}

class Circle extends CircleBase implements IShape {
	constructor(radius: number) {
		super(radius);
	}

	public area() {
		return Math.PI * Math.pow(this.radius, 2);
	}
}

type Shape = Circle | Square;

function isShape(obj: any): obj is IShape {
	return "area" in obj;
}

class AreaCalculator {
	public shapes: Shape[];

	constructor(shapes: Shape[]) {
		this.shapes = shapes;
	}

	public sum(): number {
		const areas: number[] = [];

		this.shapes.forEach((shape: Shape) => {
			if (!isShape(shape))
				throw new Error("shape is not an instance of IShape");
			areas.push(shape.area());
		});

		return areas.reduce((pre: number, curr: number) => pre + curr);
	}
}

/**
 * Open-Closed Principle:
 *
 * Objects or entities should be open for extension
 * but closed for modification.
 */

export default function openClosed() {
	const shapes = [new Circle(2), new Square(5), new Square(6)];
	const calculator = new AreaCalculator(shapes);
	const areas = new SumCalculatorOutputter(calculator);
	console.log(areas.toString());
}
